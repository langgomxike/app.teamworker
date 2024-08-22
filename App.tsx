import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/views/screens/Home";
import ScreenName from "./src/constants/ScreenName";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ScreenName.HOME}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={ScreenName.HOME} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
