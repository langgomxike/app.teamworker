import { Image, StyleSheet, Text, View } from "react-native";
import Project from "../../models/Project";
import Color from "../../constants/Color";
import { useCallback, useContext, useEffect, useState } from "react";
import AppConfig from "../../constants/AppConfig";
import Context from "../../constants/Context";

export default function ProjectItem({
  project = new Project(),
}: {
  project: Project;
}) {
  //refs, contexts
  const appContentContext = useContext(Context.AppContentContext);

  return (
    <View style={styles.container}>
      <Image style={styles.cover} src={project.coverImage} />

      <View style={styles.textGroup}>
        <Text style={styles.name}>{project.name}</Text>
        <Text style={styles.activity}>
          {project.activities.length > 0
            ? project.activities[0].name
            : "This project has no activities"}
        </Text>
      </View>

      {/* badge */}
      <View style={{ alignSelf: "center" }}>
        {project.countUnseenActivities() > 0 && (
          <Text style={styles.badge}>{project.countUnseenActivities()}</Text>
        )}
        <Text style={styles.activity}>
          {AppConfig.getDate(project.activities[0]?.createdTime, true)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    padding: 10,
  },

  cover: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignSelf: "center",
  },

  textGroup: {
    flex: 1,
    alignSelf: "center",
  },

  name: {
    fontWeight: "500",
  },

  activity: {
    fontSize: 12,
    color: "#AAA",
  },

  badge: {
    width: 25,
    height: 25,
    borderRadius: 20,
    backgroundColor: "red",
    fontSize: 10,
    fontWeight: "bold",
    color: Color.LIGHT_TEXT,
    alignSelf: "flex-end",
    textAlignVertical: "center",
    textAlign: "center",
  },
});
