import { StyleSheet, View } from "react-native";
import ImageButton from "../components/ImageButton";
import SubCornerContainer from "../components/SubCornerContainer";
import StackLayout from "../layouts/StackLayout";
import { useCallback, useContext, useState } from "react";
import Context from "../../constants/Context";
import { AppContentType } from "../../interface/AppContent";
import DetailInfo from "../components/DetailInfo";

export default function AccountScreen() {
  //ref, contexts
  const appContentContext = useContext(Context.AppContentContext);

  //states
  const [editable, setEditable] = useState<boolean>(false);

  //handlers
  const handleChangeLanguage = useCallback(() => {
    switch (appContentContext.content.TYPE) {
      case AppContentType.EN:
        appContentContext.setContent(Context.VIETNAMESE_CONTENT);
        break;
      case AppContentType.VN:
        appContentContext.setContent(Context.JAPANESE_CONTENT);
        break;
      case AppContentType.JA:
        appContentContext.setContent(Context.ENGLISH_CONTENT);
        break;
    }
  }, [appContentContext.content]);

  const handleLogout = useCallback(() => {
    alert("Logout");
  }, []);

  return (
    <StackLayout>
      {/* language */}
      <ImageButton
        src={appContentContext.content.LANGUAGE_ICON}
        style={styles.floatLanguage}
        onPress={handleChangeLanguage}
      />

      {/* header info */}
      <DetailInfo
        src={"https://i.sstatic.net/dPWYv.jpg?s=64"}
        title="John Smith"
        description="john@gmail.com"
      />

      <View style={styles.actionContainer}>
        <ImageButton
          src={require("../../../assets/icons/edit.png")}
          onPress={() => setEditable((prev) => !prev)}
          style={{}}
        />

        <ImageButton
          src={require("../../../assets/icons/logout.png")}
          onPress={handleLogout}
          style={{}}
        />
      </View>

      {/* content */}
      <SubCornerContainer>
         
      </SubCornerContainer>
    </StackLayout>
  );
}

const styles = StyleSheet.create({
  floatLanguage: {
    position: "absolute",
    right: 10,
    marginTop: 50,
  },

  actionContainer: {
    flexDirection: "row",
    alignSelf: "flex-end",
    gap: 10,
    marginBottom: 5,
    marginRight: 10,
  },
});
