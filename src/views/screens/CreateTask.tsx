import { useContext, useEffect, useState } from "react";
import StackWithAccountLayout from "../layouts/StackWithAccountLayout";
import Context from "../../constants/Context";
import { NavigationRouteContext } from "@react-navigation/native";

export default function CreateTaskScreen() {
  //refs, contexts
  const appContentContext = useContext(Context.AppContentContext);
  const route = useContext(NavigationRouteContext);

  //states

  //effects
  useEffect(() => {}, []);

  return (
    <StackWithAccountLayout
      src={require("../../../assets/icons/task.png")}
      url=""
      onPressDetail={() => {}}
      title={appContentContext.content.CREATE_ACTIVITY_TASK}
    ></StackWithAccountLayout>
  );
}
