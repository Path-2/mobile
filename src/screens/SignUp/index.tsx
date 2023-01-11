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
import { validatePassword } from "../../utils";
import { Title } from "../SignIn/styles";

export default function SignUp({ navigation }: any) {
  const signin = React.useCallback(
    () => navigation.navigate(ScreenEnum.SignIn),
    []
  );

  const [isProcessing, setIsProcessing] = React.useState<boolean>(false);
  const [isValidPassword, setIsValidPassword] = React.useState<boolean>(false);
  const [isEqualsPassword, setIsEqualsPassword] =
    React.useState<boolean>(false);
  const [messageInvalidPassword, setMessageInvalidPassword] =
    React.useState<string>("");
  const [messageNotEqualsPassword, setMessageNotEqualsPassword] =
    React.useState<string>("");

  const [fullName, setFullName] = React.useState<string>("");
  const [idCard, setIdCard] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");

  const handleFullName = (text: string) => setFullName(text);
  const handleIdCard = (text: string) => setIdCard(text);
  const handleEmail = (text: string) => setEmail(text);
  const handlePassword = (text: string) => setPassword(text);
  const handleConfirmPassword = (text: string) => setConfirmPassword(text);

  const handleSignup = React.useCallback(() => setIsProcessing(true), []);

  React.useEffect(() => {
    if (isProcessing)
      setTimeout(() => navigation.navigate(ScreenEnum.Signed), 4000);
  }, [isProcessing]);

  React.useEffect(() => {}, [confirmPassword]);

  React.useEffect(() => {
    if (!isValidPassword)
      setMessageInvalidPassword("Por favor insira uma senha forte e segura.");
    else setMessageInvalidPassword("");
  }, [isValidPassword]);

  React.useEffect(() => {
    if (password) {
      setIsValidPassword(validatePassword(password));
    } else setMessageInvalidPassword("");
  }, [password]);

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
            onChange={handleFullName}
          />
          <Input
            icon={""}
            type={"text"}
            placeholder={"BI"}
            onChange={handleIdCard}
          />
          <Input
            type="email"
            icon="alternate-email"
            placeholder="Email ID"
            onChange={handleEmail}
          />
          <View>
            <Input
              type="password"
              icon="ios-lock-closed-outline"
              placeholder="Senha"
              onChange={handlePassword}
            />
            {messageInvalidPassword ? (
              <Text style={{ color: "red" }}>{messageInvalidPassword}</Text>
            ) : (
              <></>
            )}
          </View>
          <Input
            type="password"
            icon="ios-lock-closed-outline"
            placeholder="Confirme a senha"
            onChange={handleConfirmPassword}
          />
          <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
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
