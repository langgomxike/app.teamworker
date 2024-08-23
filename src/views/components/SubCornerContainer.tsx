import { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

export default function SubCornerContainer({ children }: PropsWithChildren) {
  return (
    <View style={styles.container}>
      <View style={styles.hr} />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 10,
    gap: 10,
  },

  hr: {
    width: 80,
    height: 5,
    borderRadius: 10,
    backgroundColor: "#AAA",
    alignSelf: "center",
  },
});
