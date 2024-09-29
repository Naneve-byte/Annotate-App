import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react'; // Pastikan untuk mengimpor useEffect
import { supabase } from '../../lib/supabase';

const Home = () => {
  const [userName, setUserName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        // Dapatkan user dari auth session
        const { data: { user }, error: userError } = await supabase.auth.getUser();
        
        if (userError) {
          console.error('Error getting user:', userError.message);
          setError('Failed to get user.');
          return;
        }

        // Jika user ditemukan, ambil userName dari tabel "users"
        if (user) {
          const { data: userData, error: userDataError } = await supabase
            .from('users')
            .select('userName')
            .eq('id', user.id)
            .maybeSingle(); // Gunakan maybeSingle untuk menangani 0 atau 1 baris

          if (userDataError) {
            console.error('Error fetching user data:', userDataError.message);
            setError('Error fetching user data.');
          } else if (!userData) {
            setError('No user data found.');
          } else {
            setUserName(userData.userName);
          }
        }
      } catch (error) {
        console.error('Unexpected error:', error.message);
        setError('Unexpected error occurred.');
      }
    };

    fetchUserName();
  }, []); // Dependency array kosong agar useEffect hanya dipanggil sekali

  return (
    <View>
      {error ? (
        <Text>Error: {error}</Text>
      ) : (
        <Text>Welcome, {userName}!</Text>
      )}
      <Text>awdwdaw</Text>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({});