import { PropsWithChildren } from "react";
import { Pressable, StyleSheet } from "react-native";
import Color from "../../constants/Color";

type Props = {
  onPress: () => void;
};

export default function ShadowCornerBox({
  onPress = () => {},
  children,
}: Props & PropsWithChildren) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
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
    margin: 5,
  },
});
