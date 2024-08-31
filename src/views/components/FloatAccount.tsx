import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Color from "./../../constants/Color";
import { useCallback, useContext } from "react";
import { NavigationContext } from "@react-navigation/native";
import ScreenName from "../../constants/ScreenName";
import Context from "../../constants/Context";

export default function FloatAccount() {
  //refs, contexts
  const navigation = useContext(NavigationContext);
  const appContentContext = useContext(Context.AppContentContext);

  //handlers
  const goToAccountScreen = useCallback(() => {
    navigation?.navigate(ScreenName.ACCOUNT);
  }, []);

  const handleLogin = useCallback(() => {}, []);

  return (
    <Pressable
      onPress={goToAccountScreen}
      style={styles.container}
    >
      <View style={{ alignSelf: "center" }}>
        {false ? (
          <>
            <Text style={styles.name}>John Smith</Text>
            <Text style={styles.email}>{"jonh@gmail.com"}</Text>
          </>
        ) : (
          <Text style={styles.name}>{appContentContext.content.LOGIN}</Text>
        )}
      </View>

      {false ? (
        <Image
          style={styles.avatar}
          src={"https://cdn-icons-png.flaticon.com/128/13727/13727505.png"}
        />
      ) : (
        <Image
          style={styles.avatar}
          source={true && require("../../../assets/icons/google.png")}
        />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 10,
    flexDirection: "row",
    gap: 5,
  },

  name: {
    fontWeight: "500",
    color: "#FFF",
    alignSelf: "flex-end",
  },

  email: {
    fontSize: 12,
    color: "#FFF",
    alignSelf: "flex-end",
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
    alignSelf: "center",
    backgroundColor: Color.BACKGROUND_COLOR,
  },
});
