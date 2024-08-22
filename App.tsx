import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/views/screens/Home";
import ScreenName from "./src/constants/ScreenName";
import AccountScreen from "./src/views/screens/Account";
import { useState } from "react";
import AppContent from "./src/interface/AppContent";
import EnglishAppContent from "./src/constants/EnglishAppContent";
import Context from "./src/constants/Context";

const Stack = createNativeStackNavigator();

export default function App() {
  //refs, contexts

  //states
  const [appContent, setAppContent] = useState<AppContent>(
    Context.ENGLISH_CONTENT
  );

  return (
    <NavigationContainer>
      <Context.AppContentContext.Provider
        value={{ content: appContent, setContent: setAppContent }}
      >
        <Stack.Navigator
          initialRouteName={ScreenName.HOME}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name={ScreenName.HOME} component={HomeScreen} />
          <Stack.Screen name={ScreenName.ACCOUNT} component={AccountScreen} />
        </Stack.Navigator>
      </Context.AppContentContext.Provider>
    </NavigationContainer>
  );
}
