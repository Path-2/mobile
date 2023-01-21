import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";

import { inactive, primary } from "../../../configs/colors";
import { ScreenEnum } from "../../../models/enums";
import { Forgot, SignIn, SignUp } from "../../";

const { Screen, Navigator } = createStackNavigator();

export default function UnSignedScreen() {
  return (
    <Navigator
      initialRouteName={ScreenEnum.SignIn}
      screenOptions={screenOptions}
    >
      <Screen name={ScreenEnum.SignIn} component={SignIn} />
      <Screen name={ScreenEnum.SignUp} component={SignUp} />
      <Screen name={ScreenEnum.Forgot} component={Forgot} />
    </Navigator>
  );
}

const screenOptions = ({ route }: any) => ({
  tabBarIcon: ({ focused, color, size }: any) => {
    let iconName: string;

    switch (route.name) {
      case ScreenEnum.Home:
        iconName = focused ? "ios-home" : "ios-home-outline";
        break;
      case ScreenEnum.Settings:
        iconName = focused ? "ios-settings" : "ios-settings-outline";
        break;
      case ScreenEnum.Search:
        iconName = focused ? "ios-search" : "ios-search-outline";
        break;
      case ScreenEnum.Route:
        iconName = focused ? "ios-car" : "ios-car-outline";
        break;
      case ScreenEnum.Community:
        iconName = focused ? "ios-people-circle" : "ios-people-circle-outline";
        break;
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName!} size={size} color={color} />;
  },
  tabBarActiveTintColor: primary,
  tabBarInactiveTintColor: inactive,
  headerShown: false,
});
