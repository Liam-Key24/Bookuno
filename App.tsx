import "./global.css";

import { StatusBar } from "expo-status-bar";
import { CalendarBlank } from "phosphor-react-native";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white px-6">
      <CalendarBlank size={36} color="#111111" weight="regular" />
      <Text className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900">
        Meridian
      </Text>
      <Text className="mt-2 text-center text-base text-neutral-500">
        Marketing site scaffold — Expo, NativeWind, Phosphor.
      </Text>
      <StatusBar style="dark" />
    </View>
  );
}
