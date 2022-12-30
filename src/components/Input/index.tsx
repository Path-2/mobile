import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { primary } from "../../configs/colors";
import { InputProps } from "../../models/types";

export default function Input({
  icon,
  type,
  option,
  placeholder,
  onChange,
  disabled
}: InputProps) {
  return (
    <View style={styles.container}>
      {icon.startsWith("ios") ? (
        <Ionicons size={14} name={icon} style={styles.icon} />
      ) : (
        <MaterialIcons size={14} name={icon} style={styles.icon} />
      )}
      <TextInput
        style={styles.input}
        keyboardType={type === "email" ? "email-address" : "default"}
        secureTextEntry={type === "password"}
        placeholder={placeholder}
        editable={disabled}
        onChangeText={(text: string) => onChange(text)}
      />
      {option && (
        <TouchableOpacity onPress={option.action}>
          <Text style={styles.optionText}>{option.text}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: "row",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 25,
    alignItems: "center",
  },
  input: {
    flex: 1,
    paddingVertical: 0,
  },
  icon: {
    marginRight: 5,
  },
  optionText: {
    color: primary,
  },
});
