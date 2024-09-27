import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Slot, SplashScreen, Stack} from 'expo-router'
import {useFonts} from 'expo-font'

SplashScreen.preventAutoHideAsync();

const RooyLayout = () => {
  

  const[fontsLoaded, error] = useFonts({
    "Inter-Bold" : require("../assets/fonts/Inter_18pt-Bold.ttf")
  })



  useEffect(()=> {
    if(error) throw;
    if(fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error])
  
  if(!fontsLoaded && !error) return null;



  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown : false}} />
    </Stack>
  )
}


export default RooyLayout

