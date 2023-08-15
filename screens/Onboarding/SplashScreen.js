import { View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen"

SplashScreen.preventAutoHideAsync();

export default function Splash() {
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
      await SplashScreen.hideAsync
    }
  }, [appIsReady])

  return (
    <View onLayout={onLayoutRootView}>

    </View>
  )

}