import { Image, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import Color from "../../constants/Color";
import ShadowCornerBox from "./ShadowCornerBox";
import Message from "../../models/Message";
import ImageButton from "./ImageButton";
import { useCallback, useState } from "react";
import AppConfig from "../../constants/AppConfig";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import Loading from "./Loading";

export default function MessageItem({
  message = new Message(),
  replyMessage,
  inGroup = false,
}: {
  message: Message;
  replyMessage: Message | null;
  inGroup: boolean;
}) {
  //states
  const [showImage, setShowImage] = useState(false);
  const [loading, setLoading] = useState(false);

  //handlers
  const downloadFile = useCallback((fileName: string) => {
    setLoading(true);
    const url: string = message.file;
    // const url: string = "http://tft.fittdc.info/src/intros/introo.jpg";

    // Define the path where the file will be saved
    const fileUri = `${FileSystem.documentDirectory}${fileName}`;
    const destinationUri = `${FileSystem.cacheDirectory}${fileName}`;

    // Download the file
    FileSystem.downloadAsync(url, fileUri)
      .then(({ uri }) => {
        // Copy the file
        FileSystem.copyAsync({
          from: uri,
          to: destinationUri,
        })
          .then(() => {
            Sharing.isAvailableAsync().then((result) => {
              if (result) {
                Sharing.shareAsync(uri).finally(() => {
                  setLoading(false);
                  return;
                });
              }
            });
          })
          .catch((error) => {
            console.log("====================================");
            console.log(error);
            console.log("====================================");
          })
          .finally(() => {
            setLoading(false);
            return;
          });
      })
      .catch((error) => {
        console.log("====================================");
        console.log(error);
        console.log("====================================");
      })
      .finally(() => {
        setLoading(false);
        return;
      });
  }, []);

  let content;
  switch (message.type) {
    case 1: //text
      content = <Text>{message.content}</Text>;
      break;

    case 2: //image
      let aspectRatio: number = +message.content;

      if (!aspectRatio) {
        aspectRatio = 1;
      }

      content = (
        <Pressable onPress={() => setShowImage(true)} style={{ flex: 1 }}>
          <Image
            src={message.file}
            style={{ width: 250, minHeight: 250 / aspectRatio }}
          />

          {/* download button */}
          <ImageButton
            onPress={() => downloadFile(new Date().getTime() + ".jpg")}
            style={{}}
            src={require("../../../assets/icons/download.png")}
          />
          {/* modal image view */}
          <Modal animationType="fade" visible={showImage}>
            <View
              style={{
                flex: 1,
                backgroundColor: "black",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ImageButton
                onPress={() => setShowImage(false)}
                style={{ position: "absolute", left: 10, top: 10, zIndex: 1 }}
                src={require("../../../assets/icons/close.png")}
              />

              <Image
                src={message.file}
                style={{ width: 400, minHeight: 400 / aspectRatio }}
              />
            </View>
          </Modal>
        </Pressable>
      );
      break;

    case 3: //file
      content = (
        <>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 12,
              fontStyle: "italic",
              flex: 1,
            }}
          >
            {message.content}
          </Text>

          {/* download button */}
          <ImageButton
            onPress={() => downloadFile(message.content)}
            style={{}}
            src={require("../../../assets/icons/download.png")}
          />
        </>
      );
      break;

    default:
      content = <></>;
      break;
  }

  return (
    <View style={[styles.container, !inGroup && { marginTop: 10 }]}>
      {loading && <Loading />}
      <Image
        style={[
          styles.avatar,
          inGroup && { backgroundColor: Color.BACKGROUND_COLOR },
        ]}
        src={message.author.avatar}
      />

      <ShadowCornerBox onPress={() => {}}>
        <View style={styles.content}>
          <Text style={styles.authorName}>Nguyen Van A</Text>
          {/* reply context */}
          {replyMessage && replyMessage.id >= 1 && (
            <View style={[styles.container, styles.replyContainer]}>
              <Image style={[styles.avatar, styles.replyAvatar]} src="" />

              <View style={[styles.content, { padding: 5, maxWidth: 200 }]}>
                <Text style={styles.authorName}>Nguyen Van A</Text>

                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Libero, sapiente velit dignissimos quidem mollitia architecto,
                  repellendus sed dicta veniam, facere est. A possimus voluptas
                  obcaecati quod reiciendis est soluta ut?
                </Text>
              </View>
            </View>
          )}

          {/* main content */}
          {content}
        </View>
        <Text style={{ alignSelf: "flex-end", fontSize: 10 }}>
          {AppConfig.getDate(new Date(), true)}
        </Text>
      </ShadowCornerBox>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    gap: 0,
  },

  replyContainer: {
    backgroundColor: "#EEE",
    borderRadius: 10,
    padding: 5,
  },

  ofMine: {
    flexDirection: "row-reverse",
  },

  authorName: {
    fontSize: 13,
    fontWeight: "500",
  },

  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginTop: 10,
    backgroundColor: "#EEE",
  },

  replyAvatar: {
    backgroundColor: "#AAA",
  },

  content: {
    maxWidth: 250,
    gap: 5,
  },
});
