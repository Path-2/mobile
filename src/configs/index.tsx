import Ionicons from "react-native-vector-icons/Ionicons";
import { ScreenEnum } from "../models/enums";
import { useTheme } from "../hooks/theme";

export const screenOptions = ({ route }: any) => ({
  tabBarIcon: ({ focused, color, size }: any) => {
    let iconName: string;

    switch (route.name) {
      case ScreenEnum.Home:
        iconName = focused ? "ios-home" : "ios-home-outline";
        break;
      case ScreenEnum.SettingsWrapper:
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
  tabBarActiveTintColor: "#403FFB",
  tabBarInactiveTintColor: "#42414F",
  headerShown: false,
  tabBarStyle: { backgroundColor: useTheme().colors.primary.bg },
});
