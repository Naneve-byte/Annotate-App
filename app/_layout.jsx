import React, { useEffect } from 'react'
import {  SplashScreen, Stack} from 'expo-router'
import {useFonts} from 'expo-font'

SplashScreen.preventAutoHideAsync();

const RooyLayout = () => {
  

  const[fontsLoaded, error] = useFonts({
    "Inter-Bold" : require("../assets/fonts/Inter_18pt-Bold.ttf"),
    "Inter-Reguler" : require("../assets/fonts//Inter_18pt-Regular.ttf")
  })



  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);
  
  if(!fontsLoaded && !error) return null;



  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown : false}} />
    </Stack>
  )
}


export default RooyLayout

