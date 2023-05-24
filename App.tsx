import React from "react";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { StackNavigation } from "./src/config/routes/Navigation";
import { NativeBaseProvider } from "native-base";

export default function App() {
  //loading fonts
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./src/assets/fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./src/assets/fonts/Poppins/Poppins-Bold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeBaseProvider>
      <StackNavigation />
    </NativeBaseProvider>
  );
}
