import { useContext, useEffect, useState } from "react";
import StackWithAccountLayout from "../layouts/StackWithAccountLayout";
import Context from "../../constants/Context";
import { NavigationRouteContext } from "@react-navigation/native";

export default function ProgressReportDetailScreen() {
  //refs, contexts
  const appContentContext = useContext(Context.AppContentContext);
  const route = useContext(NavigationRouteContext);

  //states

  //effects
  useEffect(() => {}, []);

  return (
    <StackWithAccountLayout
      src={require("../../../assets/icons/progress_report.png")}
      url=""
      onPressDetail={() => {}}
      title={appContentContext.content.CREATE_ACTIVITY_PROGRESS_REPORT}
    ></StackWithAccountLayout>
  );
}
