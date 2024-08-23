import { useContext, useEffect, useState } from "react";
import StackWithAccountLayout from "../layouts/StackWithAccountLayout";
import Context from "../../constants/Context";
import { NavigationRouteContext } from "@react-navigation/native";
import { ActivityScreenType } from "../../constants/NavigationType";

export default function PollDetailScreen() {
  //refs, contexts
  const appContentContext = useContext(Context.AppContentContext);
  const route = useContext(NavigationRouteContext);

  //states

  //effects
  useEffect(() => {
    const { id, type } = (route?.params as ActivityScreenType) ?? {
      id: -1,
      type: -1,
    };

    alert(id + " - " + type);
  }, []);

  return (
    <StackWithAccountLayout
      src={require("../../../assets/icons/poll.png")}
      url=""
      onPressDetail={() => {}}
      title={appContentContext.content.CREATE_ACTIVITY_POLL}
    ></StackWithAccountLayout>
  );
}
