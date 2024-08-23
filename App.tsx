import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/views/screens/Home";
import ScreenName from "./src/constants/ScreenName";
import AccountScreen from "./src/views/screens/Account";
import { useState } from "react";
import AppContent from "./src/interface/AppContent";
import Context from "./src/constants/Context";
import ProjectScreen from "./src/views/screens/Project";
import ProjectDetailScreen from "./src/views/screens/ProjectDetail";
import CreateScreen from "./src/views/screens/Create";
import CreatePollScreen from "./src/views/screens/CreatePoll";
import CreateTaskScreen from "./src/views/screens/CreateTask";
import CreateDiscussionScreen from "./src/views/screens/CreateDiscussion";
import CreateErrorReportScreen from "./src/views/screens/CreateErrorReport";
import CreateProgressReportScreen from "./src/views/screens/CreateProgressReport";
import CreateEndTaskReportScreen from "./src/views/screens/CreateEndTaskReport";

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
          <Stack.Screen name={ScreenName.PROJECT} component={ProjectScreen} />
          <Stack.Screen
            name={ScreenName.PROJECT_DETAIL}
            component={ProjectDetailScreen}
          />

          <Stack.Screen name={ScreenName.CREATE} component={CreateScreen} />
          <Stack.Screen
            name={ScreenName.CREATE_POLL}
            component={CreatePollScreen}
          />
          <Stack.Screen
            name={ScreenName.CREATE_TASK}
            component={CreateTaskScreen}
          />
          <Stack.Screen
            name={ScreenName.CREATE_DISCUSSION}
            component={CreateDiscussionScreen}
          />
          <Stack.Screen
            name={ScreenName.CREATE_ERROR_REPORT}
            component={CreateErrorReportScreen}
          />
          <Stack.Screen
            name={ScreenName.CREATE_PROGRESS_REPORT}
            component={CreateProgressReportScreen}
          />
          <Stack.Screen
            name={ScreenName.CREATE_END_TASK_REPORT}
            component={CreateEndTaskReportScreen}
          />
        </Stack.Navigator>
      </Context.AppContentContext.Provider>
    </NavigationContainer>
  );
}
