import * as Network from "expo-network";
import React from "react";
import { BackHandler, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Rings, Modal } from "../../components";
import { primary } from "../../configs/colors";
import { useTheme } from "../../hooks/theme";
import { ScreenEnum } from "../../models/enums";

export default function Opening({ navigation }: any) {
  const { colors } = useTheme();
  const [message, setMessage] = React.useState<string>("");
  const [alert, setAlert] = React.useState<boolean>(false);

  React.useEffect(() => {
    Network.getNetworkStateAsync().then((state) => {
      if (state.isConnected)
        setTimeout(() => {
          setAlert(false);
          navigation.navigate(ScreenEnum.UnSigned);
        }, 5000);
      else {
        setTimeout(() => {
          setMessage(
            "Pareces estar sem internet, alguns recursos estarão limitados..."
          );
          setAlert(true);
          setTimeout(() => {
            setAlert(false);
            navigation.navigate(ScreenEnum.UnSigned);
          }, 5000);
        }, 5000);

        setTimeout(() => {
          BackHandler.exitApp();
        }, 7 * 1000);
      }
    });
  }, []);

  return (
    <SafeAreaView
      style={{ ...styles.container, backgroundColor: colors.primary.bg }}
    >
      <Text style={styles.text}>Path2</Text>
      <Rings delay={500} />
      <Modal message={message} visible={alert}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: primary,
  },
  text: {
    color: "#fff",
    fontWeight: "800",
    marginBottom: 20,
  },
});
