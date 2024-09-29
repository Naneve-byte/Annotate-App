import React, { useEffect, useState  } from 'react'
import {  SplashScreen, Stack} from 'expo-router'
import {useFonts} from 'expo-font'
import SignIn from './(auth)/sign-in'
import Home from './(tabs)/home'
import { supabase } from '../lib/supabase';


SplashScreen.preventAutoHideAsync();

const RooyLayout = () => {
  const [initialRoute, setInitialRoute] = useState('SignIn');
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setInitialRoute('Home'); // Arahkan ke Home jika ada session
      } else {
        setInitialRoute('SignIn');
      }
    };

    checkSession();
  }, []);

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
      <Stack.Screen name="(auth)" options={{ headerShown : false}} />
      <Stack.Screen name="(tabs)" options={{ headerShown : false}} />
    </Stack>
  )
}


export default RooyLayout

