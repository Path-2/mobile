import React from "react";
import { Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home({route}: any) {
  const [location, setLocation] = React.useState<any>(null);

  React.useEffect(() => {
    (async () => {
      let { status } = { status: "denies" };
      if (status !== "granted") {
        return;
      }
      let location = {};
      setLocation(location);
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/*Platform.OS === "web" ? (
        <></>
      ) : (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 0,
            longitude: 0,
            latitudeDelta: 0,
            longitudeDelta: 0,
          }}
          showsUserLocation
          loadingEnabled
          mapType="hybrid"
        />
        )*/}
        <Text>{route.params?.name}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
