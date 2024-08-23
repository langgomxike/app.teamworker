import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Color from "../../constants/Color";
import Activity from "../../models/Activity";
import { useContext } from "react";
import Context from "../../constants/Context";

export enum ActivityType {
  POLL,
  TASK,
  DISCUSSION,
  ERROR_REPORT,
  PROGRESS_REPORT,
  END_TASK_REPORT,
}

export default function ActivityItem({
  activity = new Activity(),
  onPress = () => {},
  onLongPress = () => {},
}: {
  activity: Activity;
  onPress: () => void;
  onLongPress: () => void;
}) {
  //refs, contexts
  const appContentContext = useContext(Context.AppContentContext);

  const descriptions = [
    appContentContext.content.CREATE_ACTIVITY_POLL,
    appContentContext.content.CREATE_ACTIVITY_TASK,
    appContentContext.content.CREATE_ACTIVITY_DISCUSSION,
    appContentContext.content.CREATE_ACTIVITY_ERROR_REPORT,
    appContentContext.content.CREATE_ACTIVITY_PROGRESS_REPORT,
    appContentContext.content.CREATE_ACTIVITY_END_TASK_REPORT,
  ];

  const images = [
    require("../../../assets/icons/poll.png"),
    require("../../../assets/icons/task.png"),
    require("../../../assets/icons/discussion.png"),
    require("../../../assets/icons/error_report.png"),
    require("../../../assets/icons/progress_report.png"),
    require("../../../assets/icons/end_task_report.png"),
  ];

  return (
    <Pressable
      onLongPress={onLongPress}
      onPress={onPress}
      style={styles.itemContainer}
    >
      <Image style={styles.itemImage} source={images[activity.type]} />

      <View style={{ flex: 1 }}>
        <Text style={styles.itemText}>{activity.name}</Text>
        <Text style={styles.itemDesc}>{descriptions[activity.type]}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    gap: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    padding: 20,
    backgroundColor: Color.BACKGROUND_COLOR,
    borderRadius: 20,
  },

  itemImage: {
    width: 50,
    height: 50,
    alignSelf: "center",
  },

  itemText: {
    fontWeight: "500",
  },

  itemDesc: {
    fontSize: 10,
  },
});
