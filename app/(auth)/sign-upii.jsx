import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const LoginCard = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implementasi logika login di sini
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <View className="bg-white p-6 rounded-lg shadow-lg w-80">
        <Text className="text-2xl font-bold mb-4 text-center">Login</Text>
        
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          className="border border-gray-300 rounded-lg p-2 mb-4"
        />
        
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          className="border border-gray-300 rounded-lg p-2 mb-4"
        />
        
        <TouchableOpacity
          onPress={handleLogin}
          className="bg-blue-500 py-2 rounded-lg"
        >
          <Text className="text-white text-center font-bold">Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginCard;
