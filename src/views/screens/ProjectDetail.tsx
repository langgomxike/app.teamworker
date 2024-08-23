import { Image, StyleSheet, Text, View } from "react-native";
import StackWithAccountLayout from "../layouts/StackWithAccountLayout";
import { useCallback, useContext, useEffect, useState } from "react";
import {
  NavigationContext,
  NavigationRouteContext,
} from "@react-navigation/native";
import ScreenName from "../../constants/ScreenName";
import Project from "../../models/Project";
import {
  ProjectDetailScreenType,
  ProjectScreenType,
} from "../../constants/NavigationType";
import StackLayout from "../layouts/StackLayout";
import SubCornerContainer from "../components/SubCornerContainer";
import Color from "./../../constants/Color";

export default function ProjectDetailScreen() {
  //refs, contexts
  const navigation = useContext(NavigationContext);
  const route = useContext(NavigationRouteContext);

  //states
  const [project, setProject] = useState<Project>(new Project());

  //handlers
  const getProject = useCallback((id: number) => {
    alert(id);

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
      <SubCornerContainer></SubCornerContainer>
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
});
