import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Opening } from "./screens";
import { ScreenEnum } from "./models/enums";
import { SignedScreen, UnSignedScreen } from "./components";
import { screenOptions } from "./configs";

export default function App() {
  const {Navigator, Screen} = createNativeStackNavigator();

  return (
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
  );
}
