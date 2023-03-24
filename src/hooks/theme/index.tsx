import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { darkColors, lightColors } from "./colors";

export const ThemeContext = React.createContext({
  isDark: false,
  colors: lightColors,
  setScheme: (schema: "dark" | "light") => {},
});

export const ThemeProvider = (props: any) => {
  // Getting the device color theme, this will also work with react-native-web
  const colorScheme = useColorScheme(); // Can be dark | light | no-preference

  /*
   * To enable changing the app theme dynamically in the app (run-time)
   * we're gonna use useState so we can override the default device theme
   */
  const [isDark, setIsDark] = React.useState(colorScheme === "dark");

  // Listening to changes of device appearance while in run-time
  React.useEffect(() => {
    setIsDark(colorScheme === "dark");
  }, [colorScheme]);

  React.useEffect(() => {
    AsyncStorage.getItem("scheme").then((scheme) => {
      if (scheme) setIsDark(scheme === "dark");
    });
  }, []);

  const defaultTheme = React.useMemo(
    () => ({
      isDark,
      // Changing color schemes according to theme
      colors: isDark ? darkColors : lightColors,
      // Overrides the isDark value will cause re-render inside the context.
      setScheme: (scheme: "dark" | "light") => {
        AsyncStorage.setItem("scheme", scheme);
        setIsDark(scheme === "dark");
      },
    }),
    [isDark]
  );

  return (
    <ThemeContext.Provider value={defaultTheme}>
      <SafeAreaProvider>{props.children}</SafeAreaProvider>
    </ThemeContext.Provider>
  );
};

// Custom hook to get the theme object returns {isDark, colors, setScheme}
export const useTheme = () => React.useContext(ThemeContext);
