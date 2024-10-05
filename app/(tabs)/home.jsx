import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react'; // Pastikan untuk mengimpor useEffect
import { supabase } from '../../lib/supabase';
import { images } from '../../constants';
import { Link, useRouter } from 'expo-router'; // pastikan router diimpor


const Home = () => {
  const [userName, setUserName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        // Dapatkan user dari auth session
        const { data: { user }, error: userError } = await supabase.auth.getUser();
        
        if (userError) {
          console.error('Error getting user:', userError.message);
          setError('Failed to get user.');
          return;
        }

        // Jika user ditemukan, ambil userName dari tabel "users"
        if (user) {
          const { data: userData, error: userDataError } = await supabase
            .from('users')
            .select('userName')
            .eq('id', user.id)
            .maybeSingle(); // Gunakan maybeSingle untuk menangani 0 atau 1 baris

          if (userDataError) {
            console.error('Error fetching user data:', userDataError.message);
            setError('Error fetching user data.');
          } else if (!userData) {
            setError('No user data found.');
          } else {
            setUserName(userData.userName);
          }
        }
      } catch (error) {
        console.error('Unexpected error:', error.message);
        setError('Unexpected error occurred.');
      }
    };

    fetchUserName();
  }, []); // Dependency array kosong agar useEffect hanya dipanggil sekali

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex flex-row justify-center items-center pt-8 ">
        <Image
              source={images.iconTrisakti}
              className="w-[60px] h-[40px]"
              resizeMode='contain'
            />

            <Text className="text-lg text-black font-bold">
              TrisaktiAnnotate
            </Text>
        </View>
        <View className="w-full border-b border-gray-400" />
        <View className=" justify-center items-center pt-10">

        <Text className="text-lg text-blue text-sky-700 mt-3">
              Welcome to Trisakti Annote App
            </Text>
            <Image
              source={images.profil}
              className="w-[115px] h-[90px] my-5 "
              resizeMode='contain'
            />
            <View>
            <Text className="border-*-4">Welcome, Boris !</Text>
              {/*{error ? (
                <Text className="text-2xl">Error: {error}</Text>
              ) : (
              <Text>Welcome, {userName}!</Text>
              )}*/}
              </View>
            <View className="justify-center flex-row gap-2 ">
              <Link href="/annotate" className="text-3xl text-gray-400">
              Lets get started
              
              </Link>
            </View>
            
        </View>
      </ScrollView>
    </SafeAreaView>
    /*<View>
      {error ? (
        <Text>Error: {error}</Text>
      ) : (
        <Text>Welcome, {userName}!</Text>
      )}
      <Text>awdwdaw</Text>
    </View>*/
  );
}

export default Home;

const styles = StyleSheet.create({});