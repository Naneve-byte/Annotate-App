import { Image, ScrollView, StyleSheet, Text, View, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link, useRouter } from 'expo-router'; // pastikan router diimpor

import { supabase } from '../../lib/supabase';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter(); // inisialisasi router

  const submit = async () => {
    const { email, password } = form;

    // Cek apakah email dan password sudah diisi
    if (!email || !password) {
      Alert.alert('Error', 'Email and password are required.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Verifikasi pengguna dengan Supabase
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        Alert.alert('Sign In Failed', error.message);
      } else {
        // Jika login berhasil, arahkan ke halaman home
        router.push('/home');
      }
    } catch (error) {
      Alert.alert('Unexpected Error', error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 justify-center items-center">
          <View
            className="bg-white p-6 rounded-3xl w-80 justify-center items-center"
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 10, // for Android shadow
            }}
          >
            <Image
              source={images.iconTrisakti}
              className="w-[115px] h-[90px] mb-4"
              resizeMode='contain'
            />

            <Text className="text-3xl text-black font-bold">
              TrisaktiAnnotate
            </Text>

            <FormField
              title="Email"
              placeholder="Email"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              otherStyles="mt-7"
              keyboardType="email-address"
            />
            <FormField
              title="Password"
              placeholder="Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              otherStyles="mt-7"
              secureTextEntry
            />
            <CustomButton
              title="Sign-in"
              handlePress={submit}
              containerStyle="mt-3 min-h-[41px]"
              isLoading={isSubmitting}
            />
            <View className="justify-center pt-5 flex-row gap-2 ">
              <Text className="text-base text-gray-100"> 
                Don't remember your 
              </Text>
              <Link href="/sign-up" className="text-base text-secondary">password</Link>
            </View>
          </View>

          <View className="p-6 my-6 w-80 h-20 justify-center items-center border-2 border-gray-300">
            <View className="justify-center flex-row gap-2 ">
              <Text className="text-base text-gray-400">
                Don't have an account?
              </Text>
              <Link href="/sign-up" className="text-base text-secondary">Sign Up</Link>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

