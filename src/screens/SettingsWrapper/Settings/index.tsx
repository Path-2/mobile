import React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ToggleSwitch from "toggle-switch-react-native";
import { primary } from "../../../configs/colors";

import { useTheme } from "../../../hooks/theme";
import { ScreenEnum } from "../../../models/enums";
import { logout } from "../../../utils/auth";

export default function Settings({ navigation }: any) {
  const { isDark, setScheme, colors } = useTheme();
  const [currentMode, setCurrentMode] = React.useState<number>(isDark ? 0 : 1);

  React.useEffect(() => {
    setScheme(currentMode ? "light" : "dark");
  }, [currentMode]);

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.primary.bg,
        minHeight: Dimensions.get("screen").height,
      }}
    >
      <ScrollView>
        <TouchableOpacity
          style={{
            ...styles.settingsItem,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate(ScreenEnum.Profile)}
        >
          <FontAwesome
            name="user-circle"
            size={24}
            color={colors.primary.txt}
          />
          <Text
            style={{ color: colors.primary.txt, fontSize: 16, marginLeft: 5 }}
          >
            Meu perfil
          </Text>
        </TouchableOpacity>
        <View
          onTouchEnd={() => setCurrentMode(currentMode ? 0 : 1)}
          style={{
            ...styles.settingsItem,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Ionicons name={!currentMode ? "moon" : "ios-sunny"} size={24} color={colors.primary.txt} />
          <ToggleSwitch
            isOn={currentMode === 0}
            onColor={colors.secondary.bg}
            offColor={colors.secondary.bg}
            label={currentMode ? "Claro" : "Escuro"}
            labelStyle={{
              color: colors.primary.txt,
              fontWeight: "900",
              marginLeft: -5,
              fontSize: 16,
              ...styles.settingsItem,
            }}
            size="small"
            onToggle={(isOn) => setCurrentMode(isOn ? 0 : 1)}
          />
        </View>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            ...styles.settingsItem,
          }}
        >
          <Text
            style={{
              color: colors.primary.txt,
              fontSize: 16,
              fontWeight: "900",
            }}
          >
            Versão
          </Text>
          <Text
            style={{
              color: primary,
              fontSize: 16,
              fontWeight: "900",
            }}
          >
            {"beta"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.settingsItem,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
          onPress={() => {
            logout();
            navigation.navigate(ScreenEnum.SignIn);
          }}
        >
          <MaterialIcons name="logout" size={24} color={colors.primary.txt} />
          <Text
            style={{ color: colors.primary.txt, fontSize: 16, marginLeft: 5 }}
          >
            Terminar sessão
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  settingsItem: {
    padding: 15,
  },
});
