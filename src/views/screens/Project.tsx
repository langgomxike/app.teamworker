import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import StackWithAccountLayout from "../layouts/StackWithAccountLayout";
import { useCallback, useContext, useEffect, useState } from "react";
import {
  NavigationContext,
  NavigationRouteContext,
} from "@react-navigation/native";
import ScreenName from "../../constants/ScreenName";
import Project from "../../models/Project";
import {
  CreateScreenType,
  ProjectDetailScreenType,
  ProjectScreenType,
} from "../../constants/NavigationType";
import ImageButton from "../components/ImageButton";
import Activity from "../../models/Activity";
import ActivityItem from "../components/ActivityItem";
import Color from "./../../constants/Color";
import AppConfig from "../../constants/AppConfig";
import Context from "../../constants/Context";
import Toast from "react-native-simple-toast";

export default function ProjectScreen() {
  //refs, contexts
  const navigation = useContext(NavigationContext);
  const route = useContext(NavigationRouteContext);
  const appContentContext = useContext(Context.AppContentContext);

  //states
  const [project, setProject] = useState<Project>(new Project());
  const [activities, setActivities] = useState<Array<Activity>>(
    new Array<Activity>()
  );

  // handlers
  const goToDetailProjectScreen = useCallback(() => {
    const data: ProjectDetailScreenType = {
      id: project.id,
    };
    navigation?.navigate(ScreenName.PROJECT_DETAIL, data);
  }, [project]);

  const goToCreateScreen = useCallback(() => {
    const data: CreateScreenType = {
      id: project.id,
    };
    navigation?.navigate(ScreenName.CREATE, data);
  }, [project]);

  const goToActivityScreen = useCallback(() => {}, []);

  const getActivitiesInProject = useCallback((id: number) => {
    const p = new Project(
      id,
      "JavaScript",
      "JavaScript",
      "https://th.bing.com/th?id=ODLS.73bfb02e-babc-481c-a470-cee86081a127&w=32&h=32&qlt=98&pcl=fffffa&o=6&pid=1.2"
    );

    setProject(p);

    const as = [];

    for (let i = 1; i <= 10; i++) {
      const type = Math.floor(Math.random() * 6);
      const a = new Activity(i, "Activity " + i, type);
      as.push(a);
    }

    setActivities(as);
  }, []);

  const handlePinActivity = useCallback(() => {
    Toast.show(appContentContext.content.PIN, 1000);
  }, [appContentContext.content]);

  //effects
  useEffect(() => {
    const { id } = (route?.params as ProjectScreenType) || { id: -1 };

    getActivitiesInProject(id);
  }, []);

  return (
    <StackWithAccountLayout
      title={project.name}
      url={project.coverImage}
      src={undefined}
      onPressDetail={goToDetailProjectScreen}
    >
      {/* action */}
      <View style={styles.actionContainer}>
        <Text style={styles.actionResult}>Today</Text>
        <ImageButton
          src={require("../../../assets/icons/calendar.png")}
          onPress={() => {}}
          style={{}}
        />

        <ImageButton
          src={require("../../../assets/icons/members.png")}
          onPress={() => {}}
          style={{}}
        />

        <ImageButton
          src={require("../../../assets/icons/options.png")}
          onPress={() => {}}
          style={{}}
        />

        <ImageButton
          src={require("../../../assets/icons/pin.png")}
          onPress={() => {}}
          style={{}}
        />
      </View>

      {/* activities */}
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.activityContainer}
        data={activities}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <ActivityItem
              activity={item}
              onPress={goToActivityScreen}
              onLongPress={handlePinActivity}
            />
            <Text style={styles.time}>
              {AppConfig.getDate(item.createdTime, true)}
            </Text>
          </View>
        )}
      />

      <ImageButton
        src={require("../../../assets/icons/plus.png")}
        onPress={goToCreateScreen}
        style={styles.createButton}
      />
    </StackWithAccountLayout>
  );
}

const styles = StyleSheet.create({
  createButton: {
    right: 10,
    alignSelf: "flex-end",
  },

  actionContainer: {
    flexDirection: "row",
    padding: 10,
    paddingBottom: 5,
  },

  actionResult: {
    flex: 1,
    alignSelf: "center",
    backgroundColor: "#EEE",
    fontSize: 12,
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 10,
    marginRight: 10,
  },

  activityContainer: {
    backgroundColor: Color.BACKGROUND_COLOR,
  },

  item: {
    gap: 2,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },

  time: {
    alignSelf: "flex-end",
    fontSize: 12,
  },
});
