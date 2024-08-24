import { useContext } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import * as Progress from "react-native-progress";
import Context from "../../constants/Context";
import Color from "../../constants/Color";

export default function Loading() {
  //refs, contexts
  const appContentContext = useContext(Context.AppContentContext);
  return (
    <Modal transparent={true}>
      <View style={styles.container}>
        <Progress.Circle
          style={{ alignSelf: "center", opacity: 1 }}
          color="black"
          indeterminate={true}
          size={100}
        />
        <Text style={{ alignSelf: "center", opacity: 1 }}>
          {appContentContext.content.LOADING}
        </Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: Color.BACKGROUND_COLOR,
    opacity: 0.4,
  },
});
