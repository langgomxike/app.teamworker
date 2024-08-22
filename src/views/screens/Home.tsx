import { View, Text, StyleSheet, Image } from "react-native";
import AppConfig from "../../constants/AppConfig";
import RootLayout from "../layouts/RootLayout";
import SubCornerContainer from "../components/SubCornerContainer";

export default function HomeScreen() {
  return (
    <RootLayout>
      <View style={styles.container}>
        {/* app header */}
        <View style={styles.header}>
          <Text style={styles.appName}>{AppConfig.APP_NAME}</Text>

          <View>
            <Text></Text>
            <Image src="" />
          </View>
        </View>

        {/* actions */}

        {/* sub container */}
        <SubCornerContainer>
          {/* tab header */}
          <View style={styles.tabHeader}>
            <Text style={[styles.tab, styles.activeTab]}>Tab 1</Text>
            <Text style={styles.tab}>Tab 2</Text>
          </View>
        </SubCornerContainer>
      </View>
    </RootLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: "row",
    paddingHorizontal: 10,
  },

  appName: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },

  tabHeader: {
    flexDirection: "row",
    padding: 10,
  },

  tab: {
    flex: 1,
    textAlign: "center",
    paddingVertical: 5,
  },
  activeTab: {
      borderBottomWidth: 3,
    borderBottomColor: "#CCC",
  },
});
