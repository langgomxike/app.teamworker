import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import StackWithAccountLayout from "../layouts/StackWithAccountLayout";
import { useCallback, useContext, useEffect, useState } from "react";
import {
  NavigationContext,
  NavigationRouteContext,
} from "@react-navigation/native";
import ScreenName from "../../constants/ScreenName";
import Project from "../../models/Project";
import {
  ActivityScreenType,
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

const activityScreens = [
  ScreenName.POLL_DETAIL,
  ScreenName.TASK_DETAIL,
  ScreenName.DISCUSSION_DETAIL,
  ScreenName.REMINDER_DETAIL,
  ScreenName.ERROR_REPORT_DETAIL,
  ScreenName.PROGRESS_REPORT_DETAIL,
  ScreenName.END_TASK_REPORT_DETAIL,
];

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

  const goToActivityScreen = useCallback((id: number, type: number) => {
    const data: ActivityScreenType = {
      id: id,
      type: type,
    };
    navigation?.navigate(activityScreens[type], data);
  }, []);

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
      const type = Math.floor(Math.random() * 7);
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
              onPress={() => goToActivityScreen(item.id, item.type)}
              onLongPress={handlePinActivity}
            />
            <Text style={styles.time}>
              {AppConfig.getDate(item.createdTime, true)}
            </Text>
          </View>
        )}
      />

      <Pressable style={[styles.createButton]} onPress={goToCreateScreen}>
        <Image
          source={require("../../../assets/icons/create.png")}
          style={styles.createButton}
        />
      </Pressable>
    </StackWithAccountLayout>
  );
}

const styles = StyleSheet.create({
  createButton: {
    right: 10,
    bottom: 10,
    width: 50,
    height: 50,
    position: "absolute",
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
