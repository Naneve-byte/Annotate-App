import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FormField = ({ title, value, placholder, handleChangeText, otherStyles, ...props}) => {
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100">FormField</Text>
      <View className="border-2 border-black-200 w-full h16 px-4 bg-black-100 rounded-2xl focus:border-secondary-100 items-center">
        
      </View>
    </View>
  )
}

export default FormField

const styles = StyleSheet.create({})