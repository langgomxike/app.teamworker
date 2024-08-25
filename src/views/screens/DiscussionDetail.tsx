import { useCallback, useContext, useEffect, useState } from "react";
import StackWithAccountLayout from "../layouts/StackWithAccountLayout";
import Context from "../../constants/Context";
import { NavigationRouteContext } from "@react-navigation/native";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import ImageButton from "../components/ImageButton";
import MessageItem from "../components/MessageItem";
import Message from "../../models/Message";
import Account from "../../models/Account";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";

export default function DiscussionDetailScreen() {
  //refs, contexts
  const appContentContext = useContext(Context.AppContentContext);
  const route = useContext(NavigationRouteContext);

  //states
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Array<Message>>([]);

  //handlers
  const getMessages = useCallback(() => {
    const l = [];
    for (let i = 1; i <= 20; i++) {
      const m = new Message(
        i,
        "https://cdn.wallpapersafari.com/14/68/BE9xq5.jpg",
        "https://cdn.wallpapersafari.com/14/68/BE9xq5.jpg",
        Math.floor(Math.random() * 3) + 1
      );

      const a = new Account(Math.floor(Math.random() * 3), "Account");
      m.author = a;

      l.push(m);
    }

    setMessages(l);
  }, []);

  const handleSendMessage = useCallback(() => {
    if (!input) {
      return;
    }

    const message = new Message(1, input, "", 1);

    setMessages((prev) => [message, ...prev]);
    setInput("");
  }, [input, messages]);

  const pickImage = useCallback(() => {
    ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    }).then((result) => {
      if (!result.canceled) {
        const message = new Message(
          1,
          result.assets[0].width / result.assets[0].height + "",
          result.assets[0].uri,
          2
        );
        setMessages((prev) => [message, ...prev]);
      }
    });
  }, [messages]);

  const pickFile = useCallback(() => {
    DocumentPicker.getDocumentAsync().then((result) => {
      if (!result.canceled) {
        const message = new Message(
          1,
          result.assets[0].name,
          result.assets[0].uri,
          3
        );
        setMessages((prev) => [message, ...prev]);
      }
    });
  }, [messages]);

  //effects
  useEffect(() => {
    getMessages();
  }, []);

  return (
    <StackWithAccountLayout
      src={require("../../../assets/icons/discussion.png")}
      url=""
      onPressDetail={() => {}}
      title={appContentContext.content.CREATE_ACTIVITY_DISCUSSION}
    >
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        initialNumToRender={20}
        data={messages}
        inverted={true}
        renderItem={({ item: message, index }) => (
          <MessageItem
            message={message}
            replyMessage={message.id % 2 === 0 ? messages[index - 1] : null}
            inGroup={
              index >= 1 && message.author.id === messages[index - 1].author.id
            }
          />
        )}
      />

      <View style={styles.actionContainer}>
        {!input && (
          <>
            <ImageButton
              src={require("../../../assets/icons/file.png")}
              onPress={pickFile}
              style={{}}
            />
            <ImageButton
              src={require("../../../assets/icons/images.png")}
              onPress={pickImage}
              style={{}}
            />
            <ImageButton
              src={require("../../../assets/icons/voice.png")}
              onPress={() => {}}
              style={{}}
            />
          </>
        )}

        <TextInput
          placeholder="Nhập tin nhắn..."
          value={input}
          onChangeText={setInput}
          style={styles.input}
        />

        <Pressable onPress={handleSendMessage} style={{ alignSelf: "center" }}>
          <Image
            source={require("../../../assets/icons/send.png")}
            style={{ width: 35, height: 35, alignSelf: "center" }}
          />
        </Pressable>
      </View>
    </StackWithAccountLayout>
  );
}

const styles = StyleSheet.create({
  actionContainer: {
    flexDirection: "row",
    gap: 5,
    paddingHorizontal: 10,
  },

  input: {
    flex: 1,
    backgroundColor: "#EEE",
    borderRadius: 15,
    paddingHorizontal: 10,
  },
});
