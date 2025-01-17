import { Alert, Image, ScrollView, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';
import { icons } from '../../constants';
import { supabase } from '../../lib/supabase';


const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    role: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    const { username, email, password, firstname, lastname, role } = form;
    setIsSubmitting(true);

    const { data, error } = await supabase
      .from('users')
      .insert([
        { username, email, password, firstname, lastname, role }
      ]);

    if (error) {
      console.error('Error inserting data:', error);
    } else {
      console.log('Data inserted successfully:', data);
    }

    setIsSubmitting(false);
  };



  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="justify-self-start ml-10">
          <Text className="text-2xl text-black text-semi-bold mt-10">Sign Up</Text>
          
          <View className="flex-row items-center mt-4">
  <Image 
    source={icons.info} 
    className="w-6 h-6 mr-2" 
    resizeMode="contain" 
  />
  <Text className="text-lg text-gray-500 text-semi-bold">
    All fields are required
  </Text>
</View>

        </View>

        {/* Center FormField using flexbox */}
        <View className="w-full px-4 justify-center items-center">
          <FormField
            title="Username"
            placeholder="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-7 w-[80%]" // Width 80% and centered
          />
          <FormField
            title="Email"
            placeholder="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7 w-[80%]" // Width 80% and centered
          />
          <FormField
            title="Password"
            placeholder="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7 w-[80%]" // Width 80% and centered
          />
          <FormField
            title="First Name"
            placeholder="First Name"
            value={form.firstname}
            handleChangeText={(e) => setForm({ ...form, firstname: e })}
            otherStyles="mt-7 w-[80%]" // Width 80% and centered
          />
          <FormField
            title="Last Name"
            placeholder="Last Name"
            value={form.lastname}
            handleChangeText={(e) => setForm({ ...form, lastname: e })}
            otherStyles="mt-7 w-[80%]" // Width 80% and centered
          />
          <FormField
            title="Role"
            isDropdown
            selectedValue={form.role}
            handleValueChange={(value) => setForm({ ...form, role: value })}
            items={[
              { label: 'Guest', value: 'guest' },
              { label: 'Annotator', value: 'annotator' },
              { label: 'Reviewer', value: 'Reviewer' },
            ]}
            otherStyles="mt-7 w-[80%]"
          />

          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyle="w-[80%] mt-14" // Center button width
            isLoading={isSubmitting}
          />

          <View className="justify-center flex-row gap-2 mt-4">
            <Text className="text-base text-gray-400">Already have an account?</Text>
            <Link href="/sign-in" className="text-base text-secondary">Sign in</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;