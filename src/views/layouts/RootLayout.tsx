import { LinearGradient } from "expo-linear-gradient";
import { PropsWithChildren } from "react";
import { StyleSheet } from "react-native";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <LinearGradient colors={["#000", "#FFF"]} style={style.container}>
      {children}
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});
