import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { useTheme } from "../../hooks/theme";

export default function Rings({ delay }: any) {
  const ring = useSharedValue(0);
  const { colors } = useTheme();

  const ringStyle = useAnimatedStyle(() => {
    return {
      opacity: 0.8 - ring.value,
      transform: [
        {
          scale: interpolate(ring.value, [0, 1], [0, 2]),
        },
      ],
    };
  });
  useEffect(() => {
    ring.value = withDelay(
      delay,
      withRepeat(
        withTiming(1, {
          duration: 1000,
        }),
        -1,
        false
      )
    );
  }, []);
  return <Animated.View style={[{...styles.ring, borderColor: colors.primary.txt}, ringStyle]} />;
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: "#fff",
  },
  ring: {
    width: 30,
    height: 30,
    borderRadius: 40,
    borderColor: "#fff",
    borderWidth: 5,
  },
});
