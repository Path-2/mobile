import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
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
  value,
  disabled,
  limit,
  style,
}: InputProps) {
  const getType = (type: string) => {
    if (type === "phone" || type === "tel") return "phone-pad";
    else if (type === "email") return "email-address";
    else return "default";
  };
  return (
    <View style={styles.container}>
      {icon.startsWith("ios") ? (
        <Ionicons
          size={14}
          name={icon}
          style={{ ...styles.icon, ...style }}
          color={style?.color}
        />
      ) : icon === "idcard" ? (
        <AntDesign
          size={14}
          name="idcard"
          style={{ ...styles.icon, ...style }}
          color={style?.color}
        />
      ) : (
        <MaterialIcons
          size={14}
          name={icon}
          style={{ ...styles.icon, ...style }}
          color={style?.color}
        />
      )}
      <TextInput
        style={{ ...styles.input, ...style }}
        keyboardType={getType(type)}
        placeholderTextColor={style?.color}
        secureTextEntry={type === "password"}
        placeholder={placeholder}
        editable={!disabled}
        value={value?.substring(0, limit)}
        onChangeText={(text: string) => {
          if (limit! >= text.length || !limit) onChange(text);
        }}
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
