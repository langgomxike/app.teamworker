import { Image, Modal, ScrollView, StyleSheet, Text, View } from "react-native";
import { useCallback, useContext, useEffect, useState } from "react";
import {
  NavigationContext,
  NavigationRouteContext,
} from "@react-navigation/native";
import ScreenName from "../../constants/ScreenName";
import Project from "../../models/Project";
import { ProjectDetailScreenType } from "../../constants/NavigationType";
import StackLayout from "../layouts/StackLayout";
import SubCornerContainer from "../components/SubCornerContainer";
import Color from "./../../constants/Color";
import Context from "../../constants/Context";
import ShadowCornerBox from "../components/ShadowCornerBox";
import QRCode from "react-native-qrcode-svg";
import ImageButton from "../components/ImageButton";

export default function ProjectDetailScreen() {
  //refs, contexts
  const navigation = useContext(NavigationContext);
  const route = useContext(NavigationRouteContext);
  const appContentContext = useContext(Context.AppContentContext);

  //states
  const [project, setProject] = useState<Project>(new Project());
  const [showQR, setShowQR] = useState<boolean>(false);

  //handlers
  const getProject = useCallback((id: number) => {
    // alert(id);

    const p = new Project(
      id,
      "Java 2",
      `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Abreprehenderit aspernatur architecto nulla porro, assumenda repudiandaemodi delenit libero voluptate laborum, ullam autem ad error corruptinon cum natus quis.
      `,
      "https://th.bing.com/th?id=ODLS.8f0774dc-2b47-4aea-af78-a119b54c7979&w=32&h=32&qlt=96&pcl=fffffa&o=6&pid=1.2"
    );

    setProject(p);
  }, []);

  const goToStorageScreen = useCallback(() => {
    const data = {};
    navigation?.navigate(ScreenName.STORAGE, data);
  }, []);

  const goToAnalysisScreen = useCallback(() => {
    const data = {};
    navigation?.navigate(ScreenName.ANALYSIS, data);
  }, []);

  const handleStopProject = useCallback(() => {
    alert("stop project");
  }, []);

  //effects
  useEffect(() => {
    const { id } = (route?.params as ProjectDetailScreenType) ?? { id: -1 };

    getProject(id);
  }, []);

  return (
    <StackLayout>
      {/* header */}
      <View style={styles.headerContainer}>
        <Image style={styles.image} src={project.coverImage} />

        <Text style={styles.title}>{project.name}</Text>
        <Text style={styles.desc}>{project.description}</Text>
      </View>

      {/* content */}
      <SubCornerContainer>
        {/* items */}
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {/* qr code */}
          <ShadowCornerBox onPress={() => setShowQR(true)}>
            <View style={styles.item}>
              <Image
                style={styles.itemImage}
                source={require("../../../assets/icons/qr.png")}
              />
              <Text style={styles.itemText}>
                {appContentContext.content.QR}
              </Text>
            </View>
          </ShadowCornerBox>

          {/* storage */}
          <ShadowCornerBox onPress={goToStorageScreen}>
            <View style={styles.item}>
              <Image
                style={styles.itemImage}
                source={require("../../../assets/icons/storage.png")}
              />
              <Text style={styles.itemText}>
                {appContentContext.content.STORAGE}
              </Text>
            </View>
          </ShadowCornerBox>

          {/* analysis */}
          <ShadowCornerBox onPress={goToAnalysisScreen}>
            <View style={styles.item}>
              <Image
                style={styles.itemImage}
                source={require("../../../assets/icons/analysis.png")}
              />
              <Text style={styles.itemText}>
                {appContentContext.content.ANALYSIS}
              </Text>
            </View>
          </ShadowCornerBox>

          {/* stop project */}
          <ShadowCornerBox onPress={handleStopProject}>
            <View style={styles.item}>
              <Image
                style={styles.itemImage}
                source={require("../../../assets/icons/stop.png")}
              />
              <Text style={styles.itemText}>
                {appContentContext.content.STOP}
              </Text>
            </View>
          </ShadowCornerBox>
        </ScrollView>
      </SubCornerContainer>

      {/* qr modal */}
      <Modal transparent={true} visible={showQR} animationType="slide">
        <View style={{ flex: 1, justifyContent: "center" }}>
          <View style={styles.qrModel}>
            <ShadowCornerBox onPress={() => {}}>
              <ImageButton
                src={require("../../../assets/icons/close.png")}
                onPress={() => setShowQR(false)}
                style={{ alignSelf: "flex-end" }}
              />
              <QRCode
                value={JSON.stringify({
                  project_id: project.id,
                  password: project.name,
                })}
                size={300}
              />
            </ShadowCornerBox>
          </View>
        </View>
      </Modal>
    </StackLayout>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    marginBottom: 10,
    gap: 5,
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: Color.BACKGROUND_COLOR,
    alignSelf: "center",
  },

  title: {
    textAlign: "center",
    color: Color.LIGHT_TEXT,
    fontSize: 16,
    fontWeight: "500",
  },

  desc: {
    textAlign: "center",
    color: Color.LIGHT_TEXT,
    fontSize: 12,
  },

  item: {
    flexDirection: "row",
    gap: 10,
  },

  itemImage: {
    width: 40,
    height: 40,
  },

  itemText: {
    flex: 1,
    alignSelf: "center",
  },

  qrModel: {
    alignSelf: "center",
    padding: 30,
  },
});
