import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Rings from "../../components/Rings";
import { primary } from "../../configs/colors";
import { ScreenEnum } from "../../models/enums";

export default function Opening({ navigation }: any) {
  React.useEffect(() => {
    const id = setTimeout(() => navigation.navigate(ScreenEnum.UnSigned), 5 * 1000);
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Path2</Text>
      <Rings delay={500} />
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
