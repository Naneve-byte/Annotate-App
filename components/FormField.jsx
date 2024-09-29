import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, Text } from 'react-native';
import { icons } from '../constants';
import { Picker } from '@react-native-picker/picker';

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  isDropdown = false,
  selectedValue,
  handleValueChange,
  items = [],
  noRounded = false,  
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      {/*<Text className="text-gray-700">{title}</Text>*/}
      {!isDropdown ? (
        <View
          className={`border-2 border-gray-300 w-full h16 px-4 bg-white-100 items-center flex-row ${noRounded ? '' : 'rounded-lg'}`}
        >
          <TextInput
            className="flex-1 text-black"
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#7b7b8b"
            onChangeText={handleChangeText}
            secureTextEntry={title === 'Password' && !showPassword}
          />
          {title === 'Password' && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Image source={!showPassword ? icons.closedeye : icons.openeye} className="w-6 h-6" resizeMode="contain" />
            </TouchableOpacity>
          )}
        </View>
      ) : (
        <View className="border-2 border-gray-300 w-full px-4 bg-white-100 rounded-lg focus:border-secondary-100">
          <Picker
            selectedValue={selectedValue}
            onValueChange={handleValueChange}
            style={{ height: 50 }}
          >
            {items.map((item) => (
              <Picker.Item key={item.value} label={item.label} value={item.value} />
            ))}
          </Picker>
        </View>
      )}
    </View>
  );
};

export default FormField;
