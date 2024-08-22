import { LinearGradient } from "expo-linear-gradient";
import {
  Image,
  ImageURISource,
  Pressable,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";
import Color from "../../constants/Color";

export default function ImageButton({
  src,
  onPress = () => {},
  style = {},
}: {
  src: ImageURISource;
  onPress: () => void;
  style: StyleProp<ViewStyle>;
}) {
  return (
    <Pressable onPress={onPress} style={[styles.container, style]}>
      <Image style={[styles.image]} source={src} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: Color.BACKGROUND_COLOR,
    justifyContent: "center",
  },

  image: {
    width: 20,
    height: 20,
    alignSelf: "center",
  },
});
