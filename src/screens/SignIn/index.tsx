import { Button } from "@react-native-material/core";
import React from "react";
import { Text, TouchableOpacity, View,StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Input from "../../components/Input";
import { Title } from "./styles";

import FacebookSVG from '../../../assets/facebook.svg'
import GoogleSVG from '../../../assets/google.svg'

export default function SignIn() {
  return (
    <SafeAreaView style={styles.container}>
      <View></View>
      <View>
        <Title>Login</Title>
        <Input type="email" icon="alternate-email" placeholder="Email ID" />
        <Input
          type="password"
          icon="ios-lock-closed-outline"
          placeholder="Password"
          option={{ text: "Esqueceu?", action: () => {} }}
        />
        <Button title="Entrar" />
      </View>
      <View>
        <Text>Ou, entrar com</Text>
      </View>
      <View>
        <TouchableOpacity>
          <GoogleSVG />
        </TouchableOpacity>
        <TouchableOpacity>
          <FacebookSVG />
        </TouchableOpacity>
      </View>
      <View>
        <Text>Novo no PATH2? Criar conta</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
})