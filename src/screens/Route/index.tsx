import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { screenOptions } from "../../configs";
import { ScreenEnum } from "../../models/enums";
import ListAll from "./ListAll";
import New from "./New";

const { Navigator, Screen } = createStackNavigator();

export default function Routes(): JSX.Element {
  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name={ScreenEnum.RouteListAll} component={ListAll} />
      <Screen name={ScreenEnum.RouteNew} component={New} />
    </Navigator>
  );
}
