import React from "react";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import FacebookIcon from "../../assets/icons/facebook.svg";
import GoogleIcon from "../../assets/icons/google.svg";
import Input from "../../components/Input";
import { primary } from "../../configs/colors";
import { ScreenEnum } from "../../models/enums";
import { Title } from "./styles";

export default function SignIn({ navigation }: any) {
  const [isProcessing, setIsProcessing] = React.useState<boolean>(false);
  const signup = React.useCallback(
    () => navigation.navigate(ScreenEnum.SignUp),
    []
  );

  const login = React.useCallback(() => setIsProcessing(true), []);

  React.useEffect(() => {
    if (isProcessing)
      setTimeout(() => navigation.navigate(ScreenEnum.Signed), 4000);
  }, [isProcessing]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{ fontSize: 90, textAlign: "center", color: primary }}>
          Path2
        </Text>
      </View>
      <View>
        <Title>Login</Title>
        <Input
          type="email"
          icon="alternate-email"
          placeholder="Email ID"
          onChange={function (newValue: any): void {}}
        />
        <Input
          type="password"
          icon="ios-lock-closed-outline"
          placeholder="Senha"
          option={{
            text: "Esqueceu?",
            action: () => {
              navigation.navigate(ScreenEnum.Forgot);
            },
          }}
          onChange={function (newValue: any): void {}}
        />
        <TouchableOpacity style={styles.loginButton} onPress={login}>
          {isProcessing ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.loginButtonText}>Entrar</Text>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.text}>
        <Text>Ou, entrar com</Text>
      </View>
      <View style={styles.loginOptions}>
        <TouchableOpacity style={styles.loginOptionsButton}>
          <GoogleIcon height={30} width={30} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginOptionsButton}>
          <FacebookIcon height={30} width={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.text}>
        <Text>Novo no PATH2?</Text>
        <TouchableOpacity onPress={signup} style={{ marginLeft: 3 }}>
          <Text style={{ color: primary }}>Criar conta</Text>
        </TouchableOpacity>
      </View>
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
  loginOptions: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  loginOptionsButton: {
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
  loginButton: {
    backgroundColor: primary,
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#fff",
  },
});
