import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import FacebookButton from "../../components/FacebookButton";
import GoogleButton from "../../components/GoogleButton";
import Input from "../../components/Input";
import { primary } from "../../configs/colors";
import { useTheme } from "../../hooks/theme";
import { ScreenEnum } from "../../models/enums";
import { FacebookUserData, SocialAuth } from "../../models/types";
import { fbLogin, googleLogin, login } from "../../service/user";
import { Title } from "./styles";

export default function SignIn({ navigation }: any) {
  const [isProcessing, setIsProcessing] = React.useState<boolean>(false);
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const signup = React.useCallback(
    () => navigation.navigate(ScreenEnum.SignUp),
    []
  );

  const { colors } = useTheme();
  const { setItem } = useAsyncStorage("");

  const handleLoginWithEmail = React.useCallback(async () => {
    setIsProcessing(true);

    const response = await login({ username, password });

    if (!response || !response.jwt) {
      setIsProcessing(false);
      return;
    }

    setItem(JSON.stringify(response), (error) => {
      console.error(error?.message);
    });

    navigation.navigate(ScreenEnum.Signed);

    setIsProcessing(false);
  }, [username, password]);

  const handleUsername = (val: string) => setUsername(val);

  const handlePassword = (val: string) => setPassword(val);

  const handleLoginWithFacebook = (authData: SocialAuth | undefined) => {
    if (authData) {
      setIsProcessing(false);
      return;
    }

    fbLogin(authData!).then((token) => {
      if (!token || !token.jwt) {
        setIsProcessing(false);
        return;
      }

      setItem(JSON.stringify(token), (error) => {
        console.error(error?.message);
      });

      navigation.navigate(ScreenEnum.Signed);

      setIsProcessing(false);
    });
  };
  const handleLoginWithGoogle = (authData: SocialAuth | undefined) => {
    if (authData) {
      setIsProcessing(false);
      return;
    }

    googleLogin(authData!).then((token) => {
      if (!token || !token.jwt) {
        setIsProcessing(false);
        return;
      }

      setItem(JSON.stringify(token), (error) => {
        console.error(error?.message);
      });

      navigation.navigate(ScreenEnum.Signed);

      setIsProcessing(false);
    });
  };

  const handleFailureLoginWithGoogle = () => {};

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
          placeholder="Email ID or username"
          onChange={handleUsername}
          style={{ color: colors.primary.txt }}
          value={username}
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
          onChange={handlePassword}
          value={password}
        />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLoginWithEmail}
          disabled={!username || !password}
        >
          {isProcessing ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={{ color: colors.primary.txtBt }}>Entrar</Text>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.text}>
        <Text style={{ color: colors.primary.txt }}>Ou, entrar com</Text>
      </View>
      <View style={styles.loginOptions}>
        <GoogleButton
          onFailure={handleFailureLoginWithGoogle}
          onSuccess={handleLoginWithGoogle}
        />
        <FacebookButton
          onFailure={(message: any) => console.error(message)}
          onSuccess={handleLoginWithFacebook}
        />
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
  },
});
