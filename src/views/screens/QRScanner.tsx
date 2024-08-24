import { useCallback, useContext, useState } from "react";
import StackLayout from "../layouts/StackLayout";
import {
  BarcodeScanningResult,
  Camera,
  CameraView,
  useCameraPermissions,
} from "expo-camera";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import SubCornerContainer from "../components/SubCornerContainer";
import Color from "../../constants/Color";
import Context from "../../constants/Context";
import * as ImagePicker from "expo-image-picker";

export default function QRScannerScreen() {
  //refs, contexts
  const appContentContext = useContext(Context.AppContentContext);
  const [permission, requestPermission] = useCameraPermissions();
  const [showCamera, setShowCamera] = useState(true);

  //handlers
  const handleScan = useCallback((scanningResult: BarcodeScanningResult) => {
    setShowCamera(false);
    processResult(scanningResult.data);
  }, []);

  const prepareToScan = useCallback(() => {
    if (!permission || !permission.granted) {
      requestPermission();
    } else {
      setShowCamera(true);
    }
  }, [permission]);

  const pickImage = useCallback(() => {
    setShowCamera(false);
    ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    })
      .then((result) => {
        if (!result.canceled) {
          return Camera.scanFromURLAsync(result.assets[0].uri);
        }
        return [];
      })
      .then((value: BarcodeScanningResult[]) => {
        processResult(value.length > 0 ? value[0].data : "");
      });
  }, []);

  const processResult = useCallback((result: string) => {
    alert(result);
  }, []);

  return (
    <StackLayout>
      <SubCornerContainer>
        {/* camera */}
        <View style={{ flex: 1, justifyContent: "center" }}>
          {showCamera && (
            <CameraView
              onBarcodeScanned={handleScan}
              style={styles.camera}
              facing={"back"}
            />
          )}
        </View>

        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          {/* re-scan */}
          <Pressable style={styles.scanButton} onPress={prepareToScan}>
            <Image
              style={styles.scanButtonImage}
              source={require("../../../assets/icons/scan.png")}
            />
          </Pressable>

          {/* pick up qr image */}
          <Pressable style={styles.scanButton} onPress={pickImage}>
            <Image
              style={styles.scanButtonImage}
              source={require("../../../assets/icons/images.png")}
            />
          </Pressable>
        </View>
      </SubCornerContainer>
    </StackLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
    borderRadius: 20,
    margin: 20,
  },

  scanButton: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    backgroundColor: Color.BACKGROUND_COLOR,
    borderRadius: 20,
    margin: 5,
    padding: 5,
    alignSelf: "center",
  },

  scanButtonImage: {
    width: 50,
    height: 50,
  },
});
