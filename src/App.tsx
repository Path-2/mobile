import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeProvider } from "./theme";
import { StatusBar } from "expo-status-bar";
import { AppearanceProvider } from "react-native-appearance";
import { SafeAreaProvider } from "react-native-safe-area-context";

import SignedScreen from "./components/SignedScreen";
import UnSignedScreen from "./components/UnSignedScreen";
import { screenOptions } from "./configs";
import { ScreenEnum } from "./models/enums";
import { Opening } from "./screens";
import React from "react";

export default function App() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <AppearanceProvider>
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
    </AppearanceProvider>
  );
}
