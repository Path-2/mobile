import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
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
  disabled,
  style,
}: InputProps) {
  return (
    <View style={styles.container}>
      {icon.startsWith("ios") ? (
        <Ionicons size={14} name={icon} style={{ ...styles.icon, ...style }} color={style?.color} />
      ) : icon === "idcard" ? (
        <AntDesign
          size={14}
          name="idcard"
          style={{ ...styles.icon, ...style }}
        />
      ) : (
        <MaterialIcons
          size={14}
          name={icon}
          style={{ ...styles.icon, ...style }}
        />
      )}
      <TextInput
        style={{ ...styles.input, ...style }}
        keyboardType={type === "email" ? "email-address" : "default"}
        secureTextEntry={type === "password"}
        placeholder={placeholder}
        editable={!disabled}
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
