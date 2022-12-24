import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { screenOptions } from "../../configs";
import { ScreenEnum } from "../../models/enums";
import { Home, Community, Search, Route, Settings } from "../../screens";

export default function SignedScreen() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName={ScreenEnum.Home} screenOptions={screenOptions}>
      <Tab.Screen name={ScreenEnum.Home} component={Home} />
      <Tab.Screen name={ScreenEnum.Community} component={Community} />
      <Tab.Screen name={ScreenEnum.Search} component={Search} />
      <Tab.Screen name={ScreenEnum.Route} component={Route} />
      <Tab.Screen name={ScreenEnum.Settings} component={Settings} />
    </Tab.Navigator>
  );
}