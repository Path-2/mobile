import { ActivityIndicator } from "@react-native-material/core";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import AutocompleteInput from "react-native-autocomplete-input";
import { SafeAreaView } from "react-native-safe-area-context";

import Input from "../../../components/Input";
import { primary } from "../../../configs/colors";
import { routes } from "../../../mocks";
import { Title } from "../../SignIn/styles";

export default function NewRoute({ navigation }: any) {
  const [isProcessing, setIsProcessing] = React.useState<boolean>(false);
  const [inputText, setInputText] = React.useState<string>("");
  const [results, setResults] = React.useState<string[]>([]);

  const handleStartFilter = (text: string) => {
    setResults(
      routes
        .filter(
          (e) =>
            e.start.name.toUpperCase().includes(text.toUpperCase()) &&
            text !== ""
        )
        .map((e) => e.start.name)
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Title>Begin</Title>
          {/**<Input
            icon={""}
            type={""}
            placeholder={""}
            onChange={function (newValue: any): void {}}
  />*/}
          <AutocompleteInput
            data={results}
            onChangeText={handleStartFilter}
            renderResultList={(e) => (
              <TouchableOpacity>
                <Text>{e.value}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View>
          <Title>End</Title>
          <AutocompleteInput
            data={results}
            onChangeText={handleStartFilter}
            renderResultList={(e) => (
              <TouchableOpacity>
                <Text>{e.value}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View>
          <Title>Cost</Title>
          <Input
            icon={""}
            type={""}
            placeholder={""}
            onChange={function (newValue: any): void {}}
          />
        </View>
        <View>
          <Title>Time</Title>
          <Input
            icon={""}
            type={""}
            placeholder={""}
            onChange={function (newValue: any): void {}}
          />
        </View>
        <View>
          <Title>Obs</Title>
          <Input
            icon={""}
            type={""}
            placeholder={""}
            onChange={function (newValue: any): void {}}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              if (!isProcessing) setIsProcessing(true);
            }}
            style={{ backgroundColor: primary, padding: 10, borderRadius: 15 }}
          >
            {isProcessing ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={{ textAlign: "center", color: "#fff" }}>Criar</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
