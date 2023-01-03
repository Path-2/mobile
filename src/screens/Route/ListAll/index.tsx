import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";

import { primary } from "../../../configs/colors";
import { routes1 as paths } from "../../../mocks";
import { ScreenEnum } from "../../../models/enums";
import { Title } from "../../SignIn/styles";

export default function Route({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 5,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreenEnum.Search)}
          style={{
            borderColor: primary,
            borderWidth: 1,
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 10,
          }}
        >
          <Ionicons name="ios-search-outline" size={14} color={primary} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreenEnum.RouteNew)}
          style={{ backgroundColor: primary, padding: 5, borderRadius: 10 }}
        >
          <Text style={{ color: "#fff" }}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View>
          <Title>Visitados recentemente</Title>
          <View>
            <FlatList
              data={paths.splice(0, 5)}
              ListEmptyComponent={
                <Text style={{ textAlign: "center", marginTop: 10 }}>
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
                    navigation.navigate(ScreenEnum.Home, {
                      name: item.start.name,
                    });
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
        </View>
        <View>
          <Title>Favoritos</Title>
          <View>
            <FlatList
              data={paths.splice(0, 5)}
              ListEmptyComponent={
                <Text style={{ textAlign: "center", marginTop: 10 }}>
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
                    navigation.navigate(ScreenEnum.Home, {
                      name: item.start.name,
                    });
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
        </View>
        <View>
          <Title>Adicionados recentemente</Title>
          <View>
            <FlatList
              data={paths.splice(0, 5)}
              ListEmptyComponent={
                <Text style={{ textAlign: "center", marginTop: 10 }}>
                  Lista vazia
                </Text>
              }
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    flex: 1,
                    marginBottom: 10,
                  }}
                  onPress={() => {
                    navigation.navigate(ScreenEnum.Home, {
                      name: item.start.name,
                    });
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "column",
    justifyContent: "space-evenly",
    flex: 1,
  },
});
