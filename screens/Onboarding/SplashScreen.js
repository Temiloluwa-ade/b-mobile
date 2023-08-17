import { View, Text, Video, Pressable } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import { useNavigation } from "@react-navigation/native";

export default function Splash() {
  const navigation = useNavigation();
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, or make any API calls that need to be made on start
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync;
    }
  }, [appIsReady]);

  return (
    <SafeAreaView className="h-full">
      <View className="flex flex-col" onLayout={onLayoutRootView}>
        <View className="h-[80%]">
          <Text className="self-center text-[#163300] font-bold text-xl">
            Welcome to Breew
          </Text>
        </View>

        <View className="">
          <Pressable
            className="flex items-center justify-center text-center rounded-md"
            onPress={() => navigation.navigate("Onboarding")}
          >
            <View className=" bg-[#163300] rounded-md items-center w-[90%] mx-2 p-3">
              <Text className="text-sm text-white font-semibold">Get Started</Text>
            </View>
          </Pressable>
          <Pressable
            className="mt-5 flex items-center justify-center text-center rounded-md"
            onPress={() => navigation.navigate("Onboarding")}
          >
            <View className=" bg-white rounded-md border-[#163300] border items-center w-[90%] mx-2 p-3">
              <Text className="text-sm font-semibold text-[#1B0D01]">Sign In</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
