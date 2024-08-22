import { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

export default function SubCornerContainer({ children }: PropsWithChildren) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 10,
  },
});
