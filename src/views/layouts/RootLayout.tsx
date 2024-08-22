import { LinearGradient } from "expo-linear-gradient";
import { PropsWithChildren } from "react";
import { StyleSheet } from "react-native";
import Color from "../../constants/Color";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <LinearGradient colors={Color.LINEAR_COLOR} style={style.container}>
      {children}
    </LinearGradient>  
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
});
