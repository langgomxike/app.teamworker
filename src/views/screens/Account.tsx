import { Image, ScrollView, StyleSheet, TextInput, View } from "react-native";
import ImageButton from "../components/ImageButton";
import SubCornerContainer from "../components/SubCornerContainer";
import StackLayout from "../layouts/StackLayout";
import { useCallback, useContext, useEffect, useState } from "react";
import Context from "../../constants/Context";
import { AppContentType } from "../../interface/AppContent";
import DetailInfo from "../components/DetailInfo";
import ShadowCornerBox from "../components/ShadowCornerBox";
import Toast from "react-native-simple-toast";
import Loading from "../components/Loading";

export default function AccountScreen() {
  //ref, contexts
  const appContentContext = useContext(Context.AppContentContext);

  //states
  const [editable, setEditable] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [requestCode, setRequestCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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

  const pickImage = useCallback(() => {
    alert("Picking image...");
  }, []);

  const handleSubmit = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setEditable(false);
      alert(confirmPassword);
    }, 2000);
  }, [email, name, password, confirmPassword]);

  // effects
  useEffect(() => {
    if (editable === true) {
      Toast.show("Đã bật chế độ chỉnh sửa", 1000);
    }
  }, [editable]);

  return (
    <StackLayout>
      {loading && <Loading />}
      {/* language */}
      <ImageButton
        src={appContentContext.content.LANGUAGE_ICON}
        style={styles.floatLanguage}
        onPress={handleChangeLanguage}
      />

      {/* header info */}
      <DetailInfo
        src={"https://i.sstatic.net/dPWYv.jpg?s=64"}
        title={name || "Name"}
        description={email || "example@mail.com"}
      />

      <View style={styles.actionContainer}>
        <ImageButton
          src={require("../../../assets/icons/images.png")}
          onPress={pickImage}
          style={{}}
        />

        <ImageButton
          src={
            editable
              ? require("../../../assets/icons/submit.png")
              : require("../../../assets/icons/edit.png")
          }
          onPress={editable ? handleSubmit : () => setEditable(true)}
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
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {/* name */}
          <ShadowCornerBox onPress={() => {}}>
            <TextInput
              placeholder={"Name"}
              value={name}
              onChangeText={setName}
              editable={editable}
            />

            {/^[A-Za-z0-9]{6,}$/.test(name) && (
              <View style={styles.badge}>
                <Image
                  source={require("../../../assets/icons/true.png")}
                  style={styles.badgeImage}
                />
              </View>
            )}
          </ShadowCornerBox>

          {/* email */}
          <ShadowCornerBox onPress={() => {}}>
            <TextInput
              inputMode="email"
              placeholder={"Email"}
              value={email}
              onChangeText={setEmail}
              editable={editable}
              maxLength={50}
            />

            {/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email) && (
              <View style={styles.badge}>
                <Image
                  source={require("../../../assets/icons/true.png")}
                  style={styles.badgeImage}
                />
              </View>
            )}
          </ShadowCornerBox>

          {/* request code */}
          <ShadowCornerBox onPress={() => {}}>
            <TextInput
              inputMode="numeric"
              placeholder={"Request code"}
              value={requestCode}
              onChangeText={setRequestCode}
              editable={editable}
              maxLength={6}
            />
            {/^[0-9]{6}$/.test(requestCode) && (
              <View style={styles.badge}>
                <Image
                  source={require("../../../assets/icons/true.png")}
                  style={styles.badgeImage}
                />
              </View>
            )}
          </ShadowCornerBox>

          {/* password */}
          <ShadowCornerBox onPress={() => {}}>
            <TextInput
              placeholder={"Password"}
              value={password
                .split("")
                .map(() => "😎")
                .join("")}
              onChangeText={(text) =>
                setPassword(
                  password +
                    (text.length >= 1 && text.length > password.length
                      ? text[text.length - 1]
                      : "")
                )
              }
              editable={editable}
              maxLength={20}
            />
            {/^.{6, 20}$/.test(password) && (
              <View style={styles.badge}>
                <Image
                  source={require("../../../assets/icons/true.png")}
                  style={styles.badgeImage}
                />
              </View>
            )}
          </ShadowCornerBox>

          {/* confirm password */}
          <ShadowCornerBox onPress={() => {}}>
            <TextInput
              placeholder={"Confirm Password"}
              value={confirmPassword
                .split("")
                .map(() => "😎")
                .join("")}
              onChangeText={(text) =>
                setConfirmPassword(
                  confirmPassword +
                    (text.length >= 1 ? text[text.length - 1] : "")
                )
              }
              editable={editable}
              maxLength={20}
            />
            {confirmPassword === password && /^.{6, 20}$/.test(password) && (
              <View style={styles.badge}>
                <Image
                  source={require("../../../assets/icons/true.png")}
                  style={styles.badgeImage}
                />
              </View>
            )}
          </ShadowCornerBox>
        </ScrollView>
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

  badge: {
    position: "absolute",
    right: 10,
    top: 0,
    bottom: 0,
    justifyContent: "center",
  },

  badgeImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
});
