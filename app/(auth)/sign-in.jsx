import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'

const SignIn = () => {

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

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
            Log in
          </Text>

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
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

 