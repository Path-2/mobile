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
import { useTheme } from "../../hooks/theme";
import { ScreenEnum } from "../../models/enums";
import * as Utils from "../../utils";
import { Title } from "../SignIn/styles";

export default function SignUp({ navigation }: any) {
  const signIn = React.useCallback(
    () => navigation.navigate(ScreenEnum.SignIn),
    []
  );

  const [isProcessing, setIsProcessing] = React.useState<boolean>(false);
  const [isValidPassword, setIsValidPassword] = React.useState<boolean>(false);
  const [isValidIdCard, setIsValidIdCard] = React.useState<boolean>(false);
  const [isValidEmail, setIsValidEmail] = React.useState<boolean>(false);
  const [isValidPhone, setIsValidPhone] = React.useState<boolean>(false);
  const [isEqualsPassword, setIsEqualsPassword] =
    React.useState<boolean>(false);

  const [messageWarningPassword, setMessageWarningPassword] =
    React.useState<string>("");
  const [messageInvalidIdCard, setMessageInvalidIdCard] =
    React.useState<string>("");
  const [messageInvalidEmail, setMessageInvalidEmail] =
    React.useState<string>("");
  const [messageInvalidPhone, setMessageInvalidPhone] =
    React.useState<string>("");
  const [messageNotEqualsPassword, setMessageNotEqualsPassword] =
    React.useState<string>("");

  const [fullName, setFullName] = React.useState<string>("");
  const [idCard, setIdCard] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [phoneMasked, setPhoneMasked] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");

  const { colors } = useTheme();

  const handleFullName = (text: string) => setFullName(Utils.capitalize(text));
  const handleIdCard = (text: string) => setIdCard(text.toUpperCase());
  const handleEmail = (text: string) => {
    if (!text.includes("..")) setEmail(text.toLowerCase());
  };
  const handlePhone = (text: string) => setPhone(text);
  const handlePassword = (text: string) => setPassword(text);
  const handleConfirmPassword = (text: string) => setConfirmPassword(text);

  const handleSignup = React.useCallback(() => setIsProcessing(true), []);

  React.useEffect(() => {
    if (!(confirmPassword && password)) {
      setMessageNotEqualsPassword("");
      setIsEqualsPassword(false);
    } else if (confirmPassword.length === password.length) {
      setIsEqualsPassword(confirmPassword === password);
      setMessageNotEqualsPassword(
        confirmPassword === password ? "" : "Senhas diferentes."
      );
    } else {
      setIsEqualsPassword(false);
      setMessageNotEqualsPassword("Senhas diferentes.");
    }
  }, [confirmPassword]);

  React.useEffect(() => {
    if (!isValidEmail)
      setMessageInvalidEmail("Por favor insira um email válido.");
    else setMessageInvalidEmail("");
  }, [isValidEmail]);

  React.useEffect(() => {
    if (email) setIsValidEmail(Utils.validateEmail(email));
    else setIsValidEmail(true);
  }, [email]);

  React.useEffect(() => {
    const warnings: string[] = [];

    if (password) {
      setIsValidPassword(Utils.validatePassword(password));

      if (!Utils.hasNumeric(password)) warnings.push("um número");
      if (!Utils.hasLowerCase(password)) warnings.push("um caracter minúsculo");
      if (!Utils.hasUpperCase(password)) warnings.push("um caracter maiúsculo");
      if (!Utils.hasEnoughLength(password, 8)) warnings.push("8 dígitos");

      setMessageWarningPassword(warnings.join(", "));
    } else setMessageWarningPassword("");

    if (!(confirmPassword && password)) {
      setMessageNotEqualsPassword("");
      setIsEqualsPassword(false);
    } else if (confirmPassword.length === password.length) {
      setIsEqualsPassword(confirmPassword === password);
      setMessageNotEqualsPassword(
        confirmPassword === password ? "" : "Senhas diferentes."
      );
    } else {
      setIsEqualsPassword(false);
      setMessageNotEqualsPassword("Senhas diferentes.");
    }
  }, [password]);

  React.useEffect(() => {
    if (!isValidIdCard) setMessageInvalidIdCard("bi inválido.");
    else setMessageInvalidIdCard("");
  }, [isValidIdCard]);

  React.useEffect(() => {
    if (idCard) setIsValidIdCard(Utils.validateIdCard(idCard));
    else {
      setIsValidIdCard(true);
      setMessageInvalidIdCard("");
    }
  }, [idCard]);

  React.useEffect(() => {
    if (phone) {
      setIsValidPhone(Utils.validatePhone(phone));
      //setPhoneMasked(Utils.mask(phone, "xxx-xxx-xxx"));

      if (!Utils.validatePhone(phone)) {
        setMessageInvalidPhone("Número inválido.");
      } else setMessageInvalidPhone("");
    } else {
      setIsValidPhone(false);
      setMessageInvalidPhone("");
    }
  }, [phone]);

  React.useEffect(() => {
    if (isProcessing)
      setTimeout(() => navigation.navigate(ScreenEnum.Signed), 4000);
  }, [isProcessing]);

  return (
    <SafeAreaView
      style={{ ...styles.container, backgroundColor: colors.background }}
    >
      <View>
        <Text style={{ fontSize: 90, textAlign: "center", color: primary }}>
          Path2
        </Text>
      </View>
      <View>
        <Title style={{ color: colors.text }}>Criar Conta</Title>
        <View style={styles.signupOptions}>
          <TouchableOpacity style={styles.signupOptionsButton}>
            <GoogleIcon height={30} width={30} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.signupOptionsButton}>
            <FacebookIcon height={30} width={30} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={{ marginBottom: 5, color: colors.text }}>
        Ou, cria conta com...
      </Text>
      <ScrollView>
        <View>
          <Input
            icon={"ios-person-outline"}
            type={"text"}
            placeholder={"Nome completo"}
            onChange={handleFullName}
            value={fullName}
            style={{ color: colors.text }}
          />
          <View>
            <Input
              icon={"idcard"}
              type={"text"}
              placeholder={"Bilhete de Identidade"}
              onChange={handleIdCard}
              value={idCard}
              limit={14}
              style={{ color: colors.text }}
            />
            {messageInvalidIdCard ? (
              <Text style={{ color: "red" }}>{messageInvalidIdCard}</Text>
            ) : (
              <></>
            )}
          </View>
          <View>
            <Input
              type="email"
              icon="alternate-email"
              placeholder="Email ID"
              onChange={handleEmail}
              value={email}
              style={{ color: colors.text }}
            />
            {messageInvalidEmail ? (
              <Text style={{ color: "red" }}>{messageInvalidEmail}</Text>
            ) : (
              <></>
            )}
          </View>
          <View>
            <Input
              type="tel"
              icon="phone"
              placeholder="(+244) xxx-xxx-xxx"
              onChange={handlePhone}
              value={phone}
              limit={9}
              style={{ color: colors.text }}
            />
            {messageInvalidPhone ? (
              <Text style={{ color: "red" }}>{messageInvalidPhone}</Text>
            ) : (
              <></>
            )}
          </View>
          <View>
            <Input
              type="password"
              icon="ios-lock-closed-outline"
              placeholder="Senha"
              onChange={handlePassword}
              value={password}
              style={{ color: colors.text }}
            />
            {messageWarningPassword ? (
              <Text style={{ color: "orange" }}>
                Insira pelo menos{" " + messageWarningPassword}
              </Text>
            ) : (
              <></>
            )}
          </View>
          <View>
            <Input
              type="password"
              icon="ios-lock-closed-outline"
              placeholder="Confirme a senha"
              onChange={handleConfirmPassword}
              value={confirmPassword}
              style={{ color: colors.text }}
            />
            {messageNotEqualsPassword ? (
              <Text style={{ color: "red", marginBottom: 10 }}>
                {messageNotEqualsPassword}
              </Text>
            ) : (
              <></>
            )}
          </View>
          <TouchableOpacity
            disabled={
              !isEqualsPassword ||
              !isValidEmail ||
              !isValidIdCard ||
              !isValidPassword ||
              !fullName
            }
            style={styles.signupButton}
            onPress={handleSignup}
          >
            {isProcessing ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={{ ...styles.signupButtonText, color: colors.text }}>
                Criar
              </Text>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.text}>
          <Text style={{ color: colors.text }}>Já tens uma conta?</Text>
          <TouchableOpacity onPress={signIn} style={{ marginLeft: 3 }}>
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
