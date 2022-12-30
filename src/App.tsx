import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Opening } from "./screens";
import { ScreenEnum } from "./models/enums";
import { SignedScreen, UnSignedScreen } from "./components";
import { screenOptions } from "./configs";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name={ScreenEnum.Opening} component={Opening} />
          <Stack.Screen name={ScreenEnum.Signed} component={SignedScreen} />
          <Stack.Screen name={ScreenEnum.UnSigned} component={UnSignedScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
