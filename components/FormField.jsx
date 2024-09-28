import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'

const FormField = ({ title, value, placholder, handleChangeText, otherStyles,  ...props}) => {
    
    const [showPassword, setShowPassword] = useState(false)

    
    return (
    <View className={`space-y-2 ${otherStyles}`}>
      
      <View className="border-2 border-gray-300 w-full h16 px-4 bg-white-100 rounded-lg focus:border-secondary-100 items-center flex-row">
        <TextInput
            className="flex-1 text-black "
            value={value} 
            placeholder={placholder}
            placeholderTextColor="#7b7b8b"
            onChangeText={handleChangeText}
            secureTextEntry={title === 'Password' && !showPassword} 
            />

            {title === 'Password' && (
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Image source={!showPassword ? icons.closedeye : icons.openeye} className="w-6 h-6" resizeMode='contain'/>
                </TouchableOpacity>
            )}
      </View> 
     </View>
  )
}

export default FormField

const styles = StyleSheet.create({})