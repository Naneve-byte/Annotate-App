import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons, images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'

const SignUp = () => {

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    role:'',
  })

  const [isSubmitting, setIsSubmitting] = useState(false )

  const submit = () => {}
 
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView><View className="justify-self-start">
          <Text className = "text-2xl text-black text-semi-blod mt-10 ">
            Sign Up
          </Text>
          <Image
          source={icons.info}
          className="w-6 h-6"
          resizeMode='contain'
          />
          </View>
        <View className=" w-full justify-start  px4">
          

          <FormField  
            title= "Username"
            placholder= "Username"
            value= {form.username}
            handleChangeText={(e) => setForm({ ...form, email: e})}
            otherStyles="mt-7 "
          />
          <FormField  
            title= "Email"
            placholder= "Email"
            value= {form.email}
            handleChangeText={(e) => setForm({ ...form, email: e})}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField  
            title= "Password"
            placholder= "Password"
            value= {form.password}
            handleChangeText={(e) => setForm({ ...form, email: e})}
            otherStyles="mt-7"
          />
          <FormField  
            title= "Firstname"
            placholder= "First Name"
            value= {form.firstname}
            handleChangeText={(e) => setForm({ ...form, email: e})}
            otherStyles="mt-7"
          />
          <FormField  
            title= "Lastname"
            placholder= "Last Name"
            value= {form.lastname}
            handleChangeText={(e) => setForm({ ...form, email: e})}
            otherStyles="mt-7"
          />
          <FormField  
            title= "Role"
            placholder= "Role"
            value= {form.role}
            handleChangeText={(e) => setForm({ ...form, email: e})}
            otherStyles="mt-7"
          />

          <CustomButton
          title="Sign-in"
          handlePress={submit}
          containerStyle=" w-[80] mt-14 justify-self-start"
          isLoading={isSubmitting}/>
          <View className="justify-center  flex-row gap-2 ">
            <Text  className="text-base text-gray-400">
              Don't have account?
            </Text>
            <Link href="/sign-in" className="text-base text-secondary">Sign in</Link>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp

 