import { PropsWithChildren, useCallback, useContext } from "react";
import RootLayout from "./RootLayout";
import ImageButton from "../components/ImageButton";
import { NavigationContext } from "@react-navigation/native";
import FloatAccount from "../components/FloatAccount";
import {
  Image,
  ImageURISource,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SubCornerContainer from "../components/SubCornerContainer";
import Color from "../../constants/Color";

type Props = {
  src: ImageURISource | undefined;
  url: string;
  title: string;
  onPressDetail: () => void;
};

export default function StackWithAccountLayout({
  src,
  url,
  title,
  onPressDetail = () => {},
  children,
}: Props & PropsWithChildren) {
  //refs, contexts,
  const navigation = useContext(NavigationContext);

  //states

  //handlers
  const handleBack = useCallback(() => {
    navigation?.goBack();
  }, []);
  return (
    <RootLayout>
      {/* header actions */}
      <View style={{ marginTop: 30, marginBottom: 10 }}>
        <ImageButton
          src={require("../../../assets/icons/close.png")}
          onPress={handleBack}
          style={{ left: 10 }}
        />

        <FloatAccount />
      </View>

      {/* detail */}
      <Pressable onPress={onPressDetail} style={styles.detailContainer}>
        {src && <Image style={styles.image} source={src} />}
        {url && <Image style={styles.image} src={url} />}

        <Text style={styles.title}>{title}</Text>
      </Pressable>

      {/* content */}
      <SubCornerContainer>{children}</SubCornerContainer>
    </RootLayout>
  );
}

const styles = StyleSheet.create({
  detailContainer: {
    alignSelf: "center",
    marginBottom: 20,
    gap: 10,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 75,
    backgroundColor: Color.BACKGROUND_COLOR,
    alignSelf: "center",
  },

  title: {
    fontWeight: "500",
    textAlign: "center",
    fontSize: 16,
    color: Color.LIGHT_TEXT,
    paddingHorizontal: 10,
  },
});
