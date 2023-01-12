import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import SignedScreen from "./components/SignedScreen";
import UnSignedScreen from "./components/UnSignedScreen";
import { screenOptions } from "./configs";
import { ThemeProvider } from "./hooks/theme";
import { ScreenEnum } from "./models/enums";
import { Opening } from "./screens";

export default function App() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
      <ThemeProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <Navigator screenOptions={screenOptions}>
              <Screen name={ScreenEnum.Opening} component={Opening} />
              <Screen name={ScreenEnum.Signed} component={SignedScreen} />
              <Screen name={ScreenEnum.UnSigned} component={UnSignedScreen} />
            </Navigator>
          </NavigationContainer>
          <StatusBar style="auto" />
        </SafeAreaProvider>
      </ThemeProvider>
  );
}
