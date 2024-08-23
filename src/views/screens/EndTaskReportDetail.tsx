import { useContext, useEffect, useState } from "react";
import StackWithAccountLayout from "../layouts/StackWithAccountLayout";
import Context from "../../constants/Context";
import { NavigationRouteContext } from "@react-navigation/native";

export default function EndTaskReportDetailScreen() {
  //refs, contexts
  const appContentContext = useContext(Context.AppContentContext);
  const route = useContext(NavigationRouteContext);

  //states

  //effects
  useEffect(() => {}, []);

  return (
    <StackWithAccountLayout
      src={require("../../../assets/icons/end_task_report.png")}
      url=""
      onPressDetail={() => {}}
      title={appContentContext.content.CREATE_ACTIVITY_END_TASK_REPORT}
    ></StackWithAccountLayout>
  );
}
