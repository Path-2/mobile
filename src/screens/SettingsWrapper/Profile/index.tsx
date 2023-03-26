import React from "react";
import { Dimensions, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";

import { useTheme } from "../../../hooks/theme";

export default function Profile({ route }: any) {
  const source = route.params?.userData
    ? (route.params?.userData?.picture as string)
    : "../../../assets/icons/avatar.svg";
  React.useEffect(() => {}, []);
  const { colors } = useTheme();
  console.log(source);
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.primary.bg,
        minHeight: Dimensions.get("screen").height,
      }}
    >
      <Image
        source="https://picsum.photos/seed/696/3000/2000"
        placeholder={blurhash}
        contentFit="cover"
        transition={1000}
      />
      <Text>Ola</Text>
    </SafeAreaView>
  );
}
