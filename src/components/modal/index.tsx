import { Modal, View, Text } from "react-native";

export function CustomModal({ visible, message }: any) {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View
        style={{
          position: "absolute",
          bottom: 50,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff" }}>{message}</Text>
      </View>
    </Modal>
  );
}
