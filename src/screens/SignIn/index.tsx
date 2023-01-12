import React from "react";
import {
  ActivityIndicator,
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
import { useTheme } from "../../hooks/theme";
import { Title } from "./styles";

export default function SignIn({ navigation }: any) {
  const [isProcessing, setIsProcessing] = React.useState<boolean>(false);
  const signup = React.useCallback(
    () => navigation.navigate(ScreenEnum.SignUp),
    []
  );

  const { colors } = useTheme();

  const login = React.useCallback(() => setIsProcessing(true), []);

  React.useEffect(() => {
    if (isProcessing)
      setTimeout(() => navigation.navigate(ScreenEnum.Signed), 4000);
  }, [isProcessing]);

  return (
    <SafeAreaView
      style={{ ...styles.container, backgroundColor: colors.primary.bg }}
    >
      <View>
        <Text style={{ fontSize: 90, textAlign: "center", color: primary }}>
          Path2
        </Text>
      </View>
      <View>
        <Title style={{ color: colors.primary.txt }}>Login</Title>
        <Input
          type="email"
          icon="alternate-email"
          placeholder="Email ID"
          onChange={function (newValue: any): void {}}
          style={{ color: colors.primary.txt }}
        />
        <Input
          type="password"
          icon="ios-lock-closed-outline"
          placeholder="Senha"
          style={{ color: colors.primary.txt }}
          option={{
            child: (
              <Text style={{ color: colors.secondary.txt }}>Esqueceu?</Text>
            ),
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
            <Text style={{color: colors.primary.txtBt}}>Entrar</Text>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.text}>
        <Text style={{ color: colors.primary.txt }}>Ou, entrar com</Text>
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
        <Text style={{ color: colors.primary.txt }}>Novo no PATH2?</Text>
        <TouchableOpacity onPress={signup} style={{ marginLeft: 3 }}>
          <Text style={{ color: primary }}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: "column",
    justifyContent: "space-evenly",
    flex: 1,
  },
  loginOptions: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  loginOptionsButton: {
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
  }
});
