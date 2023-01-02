import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screenOptions } from "../../configs";
import { ScreenEnum } from "../../models/enums";
import ListAll from "./ListAll";
import New from "./New";

export default function Routes() {

  const {Navigator, Screen} = createNativeStackNavigator();

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name={ScreenEnum.RouteListAll} component={ListAll} />
      <Screen name={ScreenEnum.RouteNew} component={New} />
    </Navigator>
  );
}
