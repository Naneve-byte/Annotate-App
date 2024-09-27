import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
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
    <SafeAreaView claseName="bg-primary h-full">
      <ScrollView>
        <View claseName="w-full justify-center items-center h-full px4 my-6">
        <Image
          source={images.iconTrisakti}
          className="w-[115px] h-[90px] mb-2"
          resizeMode='contain'
          />

          <Text claseName = "text-2xl text-black text-semi-blod mt-10 ">
            Sign Up
          </Text>

          <FormField  
            title= "Username"
            value= {form.username}
            handleChangeText={(e) => setForm({ ...form, email: e})}
            otherStyles="mt-7"
          />
          <FormField  
            title= "Email"
            value= {form.email}
            handleChangeText={(e) => setForm({ ...form, email: e})}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField  
            title= "Password"
            value= {form.password}
            handleChangeText={(e) => setForm({ ...form, email: e})}
            otherStyles="mt-7"
          />
          <FormField  
            title= "Firstname"
            value= {form.firstname}
            handleChangeText={(e) => setForm({ ...form, email: e})}
            otherStyles="mt-7"
          />
          <FormField  
            title= "Lastname"
            value= {form.lastname}
            handleChangeText={(e) => setForm({ ...form, email: e})}
            otherStyles="mt-7"
          />
          <FormField  
            title= "Role"
            value= {form.role}
            handleChangeText={(e) => setForm({ ...form, email: e})}
            otherStyles="mt-7"
          />

          <CustomButton
          title="Sign-in"
          handlePress={submit}
          containerStyle="mt-7"
          isLoading={isSubmitting}/>

          <View claseName="justify-center pt-5 flex-row gap-2">
            <Text  claseName="text-lg text-gray-100">
              Alreadyhave an account?
            </Text>
            <Link href="/sign-up" className="text-lg text-secondary">Sign U p</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp

 