import RNDateTimePicker from "@react-native-community/datetimepicker";
import React from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import FacebookIcon from "../../assets/icons/facebook.svg";
import GoogleIcon from "../../assets/icons/google.svg";
import Input from "../../components/Input";
import { primary } from "../../configs/colors";
import { ScreenEnum } from "../../models/enums";
import { Title } from "../SignIn/styles";

export default function SignUp({ navigation }: any) {
  const signin = React.useCallback(
    () => navigation.navigate(ScreenEnum.SignIn),
    []
  );
  const [editDate, setEditDate] = React.useState<boolean>(false);
  const [isProcessing, setIsProcessing] = React.useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{ fontSize: 90, textAlign: "center", color: primary }}>
          Path2
        </Text>
      </View>
      <View>
        <Title>Criar Conta</Title>
        <View style={styles.signupOptions}>
          <TouchableOpacity style={styles.signupOptionsButton}>
            <GoogleIcon height={30} width={30} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.signupOptionsButton}>
            <FacebookIcon height={30} width={30} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={{ marginBottom: 5 }}>Ou, cria conta com...</Text>
      <ScrollView>
        <View>
          <Input
            icon={"ios-person-outline"}
            type={"text"}
            placeholder={"Nome completo"}
            onChange={function (newValue: any): void {}}
          />
          <Input
            icon={""}
            type={"text"}
            placeholder={"BI"}
            onChange={function (newValue: any): void {}}
          />
          <Input
            type="email"
            icon="alternate-email"
            placeholder="Email ID"
            onChange={function (newValue: any): void {}}
          />

          <Input
            type="text"
            icon="ios-calendar-outline"
            placeholder="dd/MM/yyyy"
            disabled
            option={{
              action: () => {
                setEditDate(true);
              },
              text: "",
            }}
            onChange={function (newValue: any): void {}}
          />
          {editDate && <RNDateTimePicker value={new Date()} />}
          <Input
            type="password"
            icon="ios-lock-closed-outline"
            placeholder="Senha"
            onChange={function (newValue: any): void {}}
          />
          <Input
            type="password"
            icon="ios-lock-closed-outline"
            placeholder="Confirme a senha"
            onChange={function (newValue: any): void {}}
          />
          <TouchableOpacity style={styles.signupButton}>
            {isProcessing ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.signupButtonText}>Criar</Text>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.text}>
          <Text>Já tens uma conta?</Text>
          <TouchableOpacity onPress={signin} style={{ marginLeft: 3 }}>
            <Text style={{ color: primary }}>Login</Text>
          </TouchableOpacity>
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
  signupOptions: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  signupOptionsButton: {
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
    marginBottom: 10,
  },
  text: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 25,
  },
  signupButton: {
    backgroundColor: primary,
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  signupButtonText: {
    color: "#fff",
  },
});
