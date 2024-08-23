import { ScrollView, StyleSheet, View } from "react-native";
import SubCornerContainer from "../components/SubCornerContainer";
import ActivityItem, { ActivityType } from "../components/ActivityItem";
import Activity from "../../models/Activity";
import StackWithAccountLayout from "../layouts/StackWithAccountLayout";
import { useCallback, useContext } from "react";
import Context from "../../constants/Context";
import {
  NavigationContext,
  NavigationRouteContext,
} from "@react-navigation/native";
import ScreenName from "../../constants/ScreenName";
import { CreateScreenType } from "../../constants/NavigationType";

export default function CreateScreen() {
  //refs, contexts
  const appContentContext = useContext(Context.AppContentContext);
  const navigation = useContext(NavigationContext);
  const route = useContext(NavigationRouteContext);

  //handlers
  const items = [
    {
      activity: new Activity(1, appContentContext.content.POLL, 0),
      type: ActivityType.POLL,
      onPress: () => goToSubCreateScreen(ScreenName.CREATE_POLL),
    },
    {
      activity: new Activity(2, appContentContext.content.TASK, 1),
      type: ActivityType.TASK,
      onPress: () => goToSubCreateScreen(ScreenName.CREATE_TASK),
    },
    {
      activity: new Activity(3, appContentContext.content.DISCUSSION, 2),
      type: ActivityType.DISCUSSION,
      onPress: () => goToSubCreateScreen(ScreenName.CREATE_DISCUSSION),
    },
    {
      activity: new Activity(4, appContentContext.content.REMINDER, 3),
      type: ActivityType.ERROR_REPORT,
      onPress: () => goToSubCreateScreen(ScreenName.CREATE_REMINDER),
    },
    {
      activity: new Activity(5, appContentContext.content.ERROR_REPORT, 4),
      type: ActivityType.PROGRESS_REPORT,
      onPress: () => goToSubCreateScreen(ScreenName.CREATE_ERROR_REPORT),
    },
    {
      activity: new Activity(6, appContentContext.content.PROGRESS_REPORT, 5),
      type: ActivityType.END_TASK_REPORT,
      onPress: () => goToSubCreateScreen(ScreenName.CREATE_PROGRESS_REPORT),
    },
    {
      activity: new Activity(7, appContentContext.content.END_TASK_REPORT, 6),
      type: ActivityType.END_TASK_REPORT,
      onPress: () => goToSubCreateScreen(ScreenName.CREATE_END_TASK_REPORT),
    },
  ];

  const goToSubCreateScreen = useCallback((screenName: string) => {
    const { id } = (route?.params as CreateScreenType) ?? { id: -1 };
    const data: CreateScreenType = {
      id: id,
    };
    navigation?.goBack();
    navigation?.navigate(screenName, data);
  }, []);

  return (
    <StackWithAccountLayout
      src={require("../../../assets/icons/create.png")}
      url=""
      onPressDetail={() => {}}
      title={appContentContext.content.CREATE_ACTIVITY}
    >
      <SubCornerContainer>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            {items.map((item) => (
              <ActivityItem
                key={item.activity.id}
                activity={item.activity}
                onPress={item.onPress}
                onLongPress={() => {}}
              />
            ))}
          </View>
        </ScrollView>
      </SubCornerContainer>
    </StackWithAccountLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    padding: 10,
  },
});
