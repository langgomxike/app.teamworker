import {
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useCallback, useContext, useEffect, useState } from "react";
import {
  NavigationContext,
  NavigationRouteContext,
} from "@react-navigation/native";
import Project from "../../models/Project";
import {
  ProjectDetailScreenType,
  ProjectScreenType,
} from "../../constants/NavigationType";
import StackLayout from "../layouts/StackLayout";
import SubCornerContainer from "../components/SubCornerContainer";
import Color from "./../../constants/Color";
import Context from "../../constants/Context";
import ShadowCornerBox from "../components/ShadowCornerBox";
import * as ImagePicker from "expo-image-picker";
import Toast from "react-native-simple-toast";
import ScreenName from "../../constants/ScreenName";
import * as Progress from "react-native-progress";
import Loading from "../components/Loading";

export default function CreateProjectScreen() {
  //refs, contexts
  const navigation = useContext(NavigationContext);
  const route = useContext(NavigationRouteContext);
  const appContentContext = useContext(Context.AppContentContext);

  //states
  const [project, setProject] = useState<Project>(new Project());
  const [loading, setLoading] = useState(false);

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

  const pickImage = useCallback(() => {
    ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    }).then((result) => {
      if (!result.canceled) {
        const uri = result.assets[0].uri;
        setProject({ ...project, coverImage: uri } as Project);
      }
    });
  }, [project]);

  const handleSubmit = useCallback(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      Toast.show("Created project", 1000);
      const data: ProjectScreenType = {
        id: 1,
      };
      navigation?.goBack();
      navigation?.navigate(ScreenName.PROJECT, data);
      navigation?.navigate(ScreenName.PROJECT_DETAIL, data);
    }, 2000);
  }, [project]);

  //effects
  useEffect(() => {
    const { id } = (route?.params as ProjectDetailScreenType) ?? { id: -1 };

    getProject(id);
  }, []);

  return (
    <StackLayout>
      {/* progress bar */}
      {loading && <Loading />}

      {/* header */}
      <View style={styles.headerContainer}>
        <Pressable onPress={pickImage}>
          <Image style={styles.image} src={project.coverImage} />
        </Pressable>

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
          {/* project's name */}
          <ShadowCornerBox onPress={() => {}}>
            <TextInput
              placeholder={"Project's name"}
              value={project.name}
              onChangeText={(name) =>
                setProject({ ...project, name: name } as Project)
              }
            />
          </ShadowCornerBox>

          {/* project's desc */}
          <ShadowCornerBox onPress={() => {}}>
            <TextInput
              placeholder={"Project's description"}
              value={project.description}
              multiline={true}
              numberOfLines={3}
              onChangeText={(description) =>
                setProject({ ...project, description: description } as Project)
              }
            />
          </ShadowCornerBox>

          {/* project's pass */}
          <ShadowCornerBox onPress={() => {}}>
            <TextInput
              placeholder={"Project's password"}
              inputMode="numeric"
              maxLength={6}
              value={project.password}
              multiline={true}
              numberOfLines={3}
              onChangeText={(password) =>
                setProject({ ...project, password: password } as Project)
              }
            />
          </ShadowCornerBox>

          {/* submit */}
          <View style={{ alignSelf: "center" }}>
            <ShadowCornerBox onPress={handleSubmit}>
              <Image
                style={{ width: 30, height: 30 }}
                source={require("../../../assets/icons/create.png")}
              />
            </ShadowCornerBox>
          </View>
        </ScrollView>
      </SubCornerContainer>
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
