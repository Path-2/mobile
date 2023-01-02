import { routes1 as paths } from "../../mocks";
import { ScreenEnum } from "../../models/enums";
import { Route } from "../../models/types";
import React from "react";
import { Dimensions, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Search({ navigation }: any) {
  const [routes, setRoutes] = React.useState<Route[]>(paths);
  const [parName, setParName] = React.useState<string>("");

  const filterRoute = (par: string): Route[] => {
    if (par === "") return paths;

    return paths.filter(
      (route) =>
        route.start.name.toUpperCase().includes(par.toUpperCase()) ||
        route.end.name.toUpperCase().includes(par.toUpperCase())
    );
  };

  const handleRoute = () => {
    setRoutes(filterRoute(parName));
  };

  React.useEffect(() => {
    handleRoute();
  }, [parName]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.autocompleteContainer}>
        <TextInput
        placeholder="Pesquise aqui"
          style={{
            borderWidth: 1,
            borderColor: "#3c3c3c",
            width: "100%",
            padding: 5,
            borderRadius: 10,
          }}
          autoFocus
          onChangeText={(val) => setParName(val)}
        />
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={routes}
          ListEmptyComponent={
            <Text style={{ textAlign: "center", marginTop: 25 }}>
              Lista vazia
            </Text>
          }
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                flex: 1,
                marginBottom: 10,
              }}
              onPress={() => {
                navigation.navigate(ScreenEnum.Home, { name: item.start.name });
                setParName("");
              }}
            >
              <Text>
                {item.start.name} / {item.end.name}
              </Text>
              <Text>
                {item.cost.min} AOA / {item.cost.max} AOA
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "column",
    justifyContent: "flex-start",
    flex: 1,
  },
  autocompleteContainer: {
    flex: 0.1,
    /*left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 1,*/
  },
  listContainer: {
    overflow: "hidden",
    backgroundColor: "white",
    alignItems: "center",
    width: Dimensions.get("window").width,
    borderWidth: 0,
  },
});
