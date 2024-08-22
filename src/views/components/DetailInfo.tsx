import { Image, ImageURISource, StyleSheet, Text, View } from "react-native";
import Color from "./../../constants/Color";

type Prop = {
  src: string;
  title: string;
  description: string;
};

export default function DetailInfo({ src, title, description }: Prop) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} src={src} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    marginVertical: 20,
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: Color.BACKGROUND_COLOR,
  },

  title: {
    fontWeight: "500",
    fontSize: 18,
    color: Color.LIGHT_TEXT, 
    textAlign: "center",
  },

  desc: {
    fontSize: 12,
    color: Color.LIGHT_TEXT,
    textAlign: "center",
  },
});
