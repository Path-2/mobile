import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React from "react";

import { screenOptions } from "./configs";
import { ThemeProvider } from "./hooks/theme";
import { ScreenEnum } from "./models/enums";
import { Opening } from "./screens";
import { SignedScreen, UnSignedScreen } from "./screens/wrappers";

import "react-native-gesture-handler";

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Navigator screenOptions={screenOptions}>
          <Screen name={ScreenEnum.Opening} component={Opening} />
          <Screen name={ScreenEnum.Signed} component={SignedScreen} />
          <Screen name={ScreenEnum.UnSigned} component={UnSignedScreen} />
        </Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
