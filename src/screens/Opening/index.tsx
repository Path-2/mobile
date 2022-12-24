import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { ScreenEnum } from "../../models/enums";

export default function Opening({ navigation }: any) {

React.useEffect(() => {
    const id = setTimeout(() => navigation.navigate(ScreenEnum.UnSigned), 5000)
})

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Path2</Text>
      <View>
        <Text>Loading...</Text>
      </View>
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
    backgroundColor: "#403FFB",
  },
  text: {
    color: "#fff",
    fontWeight: "800",
    marginBottom: 10,
  },
});
