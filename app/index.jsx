/* eslint-disable react/react-in-jsx-scope */
import {  ScrollView, Image, View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Redirect, router} from 'expo-router';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
   <SafeAreaView className="bg-white h-full">
    <ScrollView contentContainerStyle={{ height: '100%'}}>
      <View className="w-full justify-center items-center h-full px-4">
        <Image
          source={images.iconTrisakti}
          className="w-[250px] h-[200px] mb-16"
          resizeMode='contain'
          />
          <View className="relative mt-5">
            <Text className="text-2xl text-black font-bold text-center">Welcome to Trisakti Annotate</Text>
            <Text className="text-lg text-gray-400  text-center">Here’s a good place for a brief overview
            of the app or it’s key features</Text>
          </View>
          <CustomButton 
            title="Get started"
            handlePress={() => router.push('/sign-in')}
            containerStyle="w-full mt-14"
            />
            <CustomButton 
            title="Get started"
            handlePress={() => router.push('/home')}
            containerStyle="w-full mt-14"
            />
      </View>
    </ScrollView>
    <StatusBar backgroundColor='#bdc5c3'
    style='light'/>
   </SafeAreaView>
  );
}

