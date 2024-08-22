import { PropsWithChildren, useCallback, useContext } from "react";
import RootLayout from "./RootLayout";
import ImageButton from "../components/ImageButton";
import { NavigationContext } from "@react-navigation/native";
import ScreenName from "../../constants/ScreenName";
export default function StackLayout({ children }: PropsWithChildren) {
  //refs, contexts,
  const navigation = useContext(NavigationContext);

  //states

  //handlers
  const handleBack = useCallback(() => {
    navigation?.goBack();
  }, []);
  return (
    <RootLayout>
      <ImageButton
        src={require("../../../assets/icons/close.png")}
        onPress={handleBack}
        style={{ margin: 20 }}
      />
      {children}
    </RootLayout>
  );
}
