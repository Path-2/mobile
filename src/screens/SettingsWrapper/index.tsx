import { createStackNavigator } from "@react-navigation/stack";
import { ScreenEnum } from "../../models/enums";
import Profile from "./Profile";
import Settings from "./Settings";

const { Screen, Navigator } = createStackNavigator();

export default function SettingsWrapper() {
  return (
    <Navigator
      initialRouteName={ScreenEnum.Settings}
      screenOptions={screenOptions}
    >
      <Screen name={ScreenEnum.Settings} component={Settings} />
      <Screen name={ScreenEnum.Profile} component={Profile} />
    </Navigator>
  );
}

const screenOptions = ({ route }: any) => ({
  headerShown: false,
});
