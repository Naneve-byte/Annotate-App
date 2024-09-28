/* eslint-disable react/prop-types */
import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, containerStyle, textStyles, isLoading}) => {
  return (
    <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.7}
         className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center  w-full ${containerStyle} ${isLoading ? 'opacity-50' : ''}`}>
        <Text className={`text-primary text-lg ${textStyles}`}>
                {title}
        </Text>
    </TouchableOpacity>
  )
}

export default CustomButton

