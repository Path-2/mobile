import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { screenOptions } from "../../configs";
import { primary } from "../../configs/colors";
import { ScreenEnum } from "../../models/enums";
import { Home, Community, Search, Route, Settings } from "../../screens";

const { Navigator, Screen } = createBottomTabNavigator();

export default function SignedScreen() {
  const [notificationCounter, setNotificationCounter] =
    React.useState<number>(100);
  
  const communityOnFocus = () => {
    setNotificationCounter(0);
  };

  return (
    <Navigator initialRouteName={ScreenEnum.Home} screenOptions={screenOptions}>
      <Screen name={ScreenEnum.Home} component={Home} />
      <Screen
        options={{
          tabBarBadge: notificationCounter < 10 ? notificationCounter : "+9",
          tabBarBadgeStyle: {
            backgroundColor: primary,
            display: notificationCounter ? "flex" : "none",
            fontSize: 10,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          },
        }}
        listeners={{ focus: communityOnFocus }}
        name={ScreenEnum.Community}
        component={Community}
      />
      <Screen name={ScreenEnum.Search} component={Search} />
      <Screen name={ScreenEnum.Route} component={Route} />
      <Screen name={ScreenEnum.Settings} component={Settings} />
    </Navigator>
  );
}
