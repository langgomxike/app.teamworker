import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
  Modal,
  FlatList,
} from "react-native";
import AppConfig from "../../constants/AppConfig";
import RootLayout from "../layouts/RootLayout";
import SubCornerContainer from "../components/SubCornerContainer";
import { useCallback, useContext, useEffect, useState } from "react";
import ImageButton from "../components/ImageButton";
import FloatAccount from "../components/FloatAccount";
import Color from "../../constants/Color";
import Project from "../../models/Project";
import ProjectItem from "../components/ProjectItem";
import Activity from "../../models/Activity";
import Context from "../../constants/Context";
import { NavigationContext } from "@react-navigation/native";
import ScreenName from "../../constants/ScreenName";
import ShadowCornerBox from "../components/ShadowCornerBox";

enum Tab {
  MINE,
  JOINING,
}

const inputButtons = {
  search: require("../../../assets/icons/search.png"),
  close: require("../../../assets/icons/close.png"),
};

export default function HomeScreen() {
  //refs, contexts
  const appContentContext = useContext(Context.AppContentContext);
  const navigation = useContext(NavigationContext);

  //states
  const [currentTab, setCurrentTab] = useState<Tab>(Tab.MINE);
  const [keyword, setKeyword] = useState<string>("");
  const [projectId, setProjectId] = useState<string>("");
  const [privatePassword, setPrivatePassword] = useState<string>("");
  const [showProjectFindModal, setShowProjectFindModal] =
    useState<boolean>(false);
  const [myProjects, setMyProjects] = useState<Array<Project>>([]);
  const [joiningProjects, setJoiningProjects] = useState<Array<Project>>([]);

  //handlers
  const openScanner = useCallback(() => {
    navigation?.navigate(ScreenName.QR_SCANNER);
  }, []);

  const goToCreateScreen = useCallback(() => {
    navigation?.navigate(ScreenName.CREATE_PROJECT);
  }, []);

  const handleSubmitJoinProjectRequest = useCallback(() => {
    if (
      projectId.length <= 6 ||
      projectId.length >= 20 ||
      privatePassword.length !== 6
    ) {
      alert("Invalid project request");
      return;
    }

    alert(
      "Submit Join Project Request with id: " +
        projectId +
        ", password: " +
        privatePassword
    );

    setShowProjectFindModal(false);
  }, [privatePassword, projectId]);

  const getProjects = useCallback(() => {
    const l = [];
    const l2 = [];

    for (let i = 1; i <= 20; i++) {
      const p = new Project(
        i,
        "Project " + i,
        "",
        "https://mazii.net/assets/imgs/logo/mazii-logo.png"
      );

      const p2 = new Project(
        i,
        "Project 2-" + i,
        "",
        "https://lh3.googleusercontent.com/-cajZZxucJ3k/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rfN7QtqKmp_f654KWEfOU8PYxWipg/photo.jpg?sz=64"
      );

      for (let j = 1; j <= Math.random() * 3; j++) {
        const a = new Activity(j, "Activity " + j);
        a.isSeen = Math.random() > 0.5;
        p.activities.push(a);
        p2.activities.push(a);
      }

      l.push(p);
      l2.push(p2);
    }

    setJoiningProjects(l);
    setMyProjects(l2);
  }, []);

  //effects
  useEffect(() => {
    getProjects();
  }, []);
  return (
    <RootLayout>
      <View style={styles.container}>
        {/* app header */}
        <View style={styles.header}>
          {/* app name */}
          <View>
            <Image source={require("../../../assets/favicon.png")} />
            <Text style={styles.appName}>{AppConfig.APP_NAME}</Text>
          </View>

          {/* float account */}
          <FloatAccount />
        </View>

        {/* actions */}
        <View style={styles.actionContainer}>
          {/* search bar */}
          <View style={styles.inputContainer}>
            {/* input */}
            <TextInput
              placeholder={appContentContext.content.SEARCH}
              value={keyword}
              onChangeText={setKeyword}
              style={styles.input}
            />
            {/* button */}
            <Pressable
              style={styles.inputButton}
              onPress={keyword ? () => setKeyword("") : () => {}}
            >
              <Image
                style={styles.inputButton}
                source={keyword ? inputButtons.close : inputButtons.search}
              />
            </Pressable>
          </View>

          {/* find project by id */}
          <ImageButton
            style={{}}
            src={require("../../../assets/icons/project_id.png")}
            onPress={() => setShowProjectFindModal(true)}
          />

          {/* scan project qr code */}
          <ImageButton
            style={{}}
            src={require("../../../assets/icons/qr.png")}
            onPress={openScanner}
          />

          {/* create new project */}
          <ImageButton
            style={{}}
            src={require("../../../assets/icons/plus.png")}
            onPress={goToCreateScreen}
          />
        </View>

        {/* sub container */}
        <SubCornerContainer>
          {/* tab header */}
          <View style={styles.tabHeader}>
            <Text
              style={[styles.tab, currentTab === Tab.MINE && styles.activeTab]}
              onPress={() => setCurrentTab(Tab.MINE)}
            >
              {appContentContext.content.MIME_TAB}
            </Text>
            <Text
              style={[
                styles.tab,
                currentTab === Tab.JOINING && styles.activeTab,
              ]}
              onPress={() => setCurrentTab(Tab.JOINING)}
            >
              {appContentContext.content.JOINING_TAB}
            </Text>
          </View>

          {/* tab content */}
          <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={
              currentTab === Tab.MINE
                ? myProjects.filter((project) =>
                    project.name.toLowerCase().includes(keyword.toLowerCase())
                  )
                : joiningProjects.filter((project) =>
                    project.name.toLowerCase().includes(keyword.toLowerCase())
                  )
            }
            renderItem={({ item }) => <ProjectItem project={item} />}
            keyExtractor={(item) => item.id + ""}
          />
        </SubCornerContainer>
      </View>

      {/* input id modal */}
      <Modal
        visible={showProjectFindModal}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={[styles.modal]}>
            <ShadowCornerBox onPress={() => {}}>
              {/* close button */}
              <ImageButton
                src={inputButtons.close}
                style={{ alignSelf: "flex-end", margin: 5 }}
                onPress={() => setShowProjectFindModal(false)}
              />

              <Image
                style={{ alignSelf: "center", marginBottom: 40, marginTop: 10 }}
                source={require("../../../assets/icons/send_request.png")}
              />

              {/* input id*/}
              <View style={[styles.inputContainer, styles.modalInputContainer]}>
                <Text style={{ alignSelf: "center" }}>Project's ID</Text>
                <TextInput
                  inputMode="numeric"
                  value={projectId}
                  onChangeText={setProjectId}
                  style={[styles.input, styles.modalInput]}
                />
                <Pressable
                  onPress={() => setProjectId("")}
                  style={styles.inputButton}
                >
                  <Image
                    style={styles.inputButton}
                    source={projectId && inputButtons.close}
                  />
                </Pressable>
              </View>

              {/* input pass */}
              <View style={[styles.inputContainer, styles.modalInputContainer]}>
                <Text style={{ alignSelf: "center" }}>Private password</Text>
                <TextInput
                  inputMode="numeric"
                  maxLength={6}
                  value={privatePassword}
                  onChangeText={setPrivatePassword}
                  style={[styles.input, styles.modalInput]}
                />
                <Pressable
                  onPress={() => setPrivatePassword("")}
                  style={styles.inputButton}
                >
                  <Image
                    style={styles.inputButton}
                    source={privatePassword && inputButtons.close}
                  />
                </Pressable>
              </View>

              {/* submit button */}
              <Pressable
                style={styles.scanButton}
                onPress={handleSubmitJoinProjectRequest}
              >
                <Image
                  style={styles.scanButtonImage}
                  source={require("../../../assets/icons/send.png")}
                />
              </Pressable>
            </ShadowCornerBox>
          </View>
        </View>
      </Modal>
    </RootLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginBottom: 30,
    marginTop: 30,
  },

  appName: {
    color: Color.LIGHT_TEXT,
    fontSize: 20,
    fontWeight: "bold",
  },

  actionContainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "flex-end",
    marginHorizontal: 10,
    marginVertical: 15,
  },

  tabHeader: {
    flexDirection: "row",
    padding: 10,
  },

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: Color.BACKGROUND_COLOR,
  },

  input: {
    flex: 1,
  },

  inputButton: {
    width: 20,
    height: 20,
    alignSelf: "center",
  },

  tab: {
    flex: 1,
    textAlign: "center",
    paddingVertical: 5,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: "#CCC",
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#EEE",
  },

  modal: {
    alignSelf: "center",
  },

  modalInputContainer: {
    flex: 0,
    width: 300,
    gap: 10,
    marginVertical: 3,
  },

  modalInput: {
    backgroundColor: "#EEE",
    textAlign: "right",
    padding: 5,
    borderRadius: 10,
  },

  scanButton: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    backgroundColor: Color.BACKGROUND_COLOR,
    borderRadius: 20,
    marginTop: 20,
    padding: 5,
    alignSelf: "center",
  },

  scanButtonImage: {
    width: 35,
    height: 35,
    margin: 5,
  },
});
