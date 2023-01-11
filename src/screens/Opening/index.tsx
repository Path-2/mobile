import * as Network from "expo-network";
import React from "react";
import { BackHandler, Modal, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Rings } from "../../components";
import { primary } from "../../configs/colors";
import { ScreenEnum } from "../../models/enums";
import { useTheme } from "../../theme";

export default function Opening({ navigation }: any) {
  const { colors } = useTheme();
  const [forward, setForward] = React.useState<boolean>(false);
  const [alert, setAlert] = React.useState<boolean>(false);

  React.useEffect(() => {
    Network.getNetworkStateAsync().then((state) => {
      if (state.isConnected)
        setTimeout(() => navigation.navigate(ScreenEnum.UnSigned), 5000);
      else {
        setTimeout(() => {
          setAlert(true);
        }, 5000);

        setTimeout(() => {
          BackHandler.exitApp();
        }, 7000);
      }
    });
  }, []);

  return (
    <SafeAreaView
      style={{ ...styles.container, backgroundColor: colors.background }}
    >
      <Text style={styles.text}>Path2</Text>
      <Rings delay={500} />
      {
        <Modal animationType="slide" transparent={true} visible={alert}>
          <View
            style={{
              position: "absolute",
              bottom: 50,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff" }}>
              Pareces estar sem net, tente mais tarde!
            </Text>
          </View>
        </Modal>
      }
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
