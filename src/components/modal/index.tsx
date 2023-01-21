import React from "react";
import { Modal, View, Text } from "react-native";
import { useTheme } from "../../hooks/theme";

export function CustomModal({ visible, message }: any) {

  const { colors } = useTheme()

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View
        style={{
          position: "absolute",
          left: "10%",
          bottom: 50,
          width: "80%",
          justifyContent: "center",
          alignItems: "center",
          padding: 5,
          borderColor: colors.primary.bg,
          borderWidth: 1,
          borderRadius: 10
        }}
      >
        <Text style={{ color: colors.primary.txt, textAlign: 'center' }}>{message}</Text>
      </View>
    </Modal>
  );
}
