import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import API_URLS from '../api';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegisterScreen() {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const [companyName, setCompanyName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [storedEmail, setStoredEmail] = useState('');

  // lưu email
  const storeEmail = async (email) => {
    try {
      await AsyncStorage.setItem('userEmail', email);
    } catch (error) {
      console.error('Failed to save email', error);
    }
  };

  // Hàm lấy email từ AsyncStorage
  const retrieveEmail = async () => {
    try {
      const savedEmail = await AsyncStorage.getItem('userEmail');
      if (savedEmail !== null) {
        setStoredEmail(savedEmail);
      }
    } catch (error) {
      console.error('Failed to retrieve email', error);
    }
  };

  // Hàm validate email
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Hàm validate số điện thoại
  const validatePhoneNumber = (phoneNumber) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(phoneNumber);
  };

  // Hàm validate mật khẩu
  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleRegister = async () => {
    if (!companyName) {
      Alert.alert('Error', 'Company Name is required');
      return;
    }

    if (!username) {
      Alert.alert('Error', 'Username is required');
      return;
    }

    if (!email || !validateEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    if (!phoneNumber || !validatePhoneNumber(phoneNumber)) {
      Alert.alert('Error', 'Please enter a valid phone number (10 digits)');
      return;
    }

    if (!password || !validatePassword(password)) {
      Alert.alert('Error', 'Password must be at least 6 characters long');
      return;
    }

    try {
      const response = await fetch(API_URLS.REGISTER, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          companyname: companyName,
          username: username,
          email: email,
          phoneNumber: phoneNumber,
          password: password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        Alert.alert('Success', 'Registration successful!');
        storeEmail(email);
        navigation.navigate('VerificationAccount');
      } else {
        Alert.alert('Error', data.error);
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Image source={require('../../assets/Logo.png')} style={styles.logo} />
        <Text style={styles.textdangnhap}>{t('register')}</Text>
        <Text style={styles.textID}>{t('companyName')}</Text>
        <TextInput style={styles.box} onChangeText={setCompanyName} value={companyName} />
        <Text style={styles.textID}>{t('username')}</Text>
        <TextInput style={styles.box} onChangeText={setUsername} value={username} />
        <Text style={styles.textID}>{t('email')}</Text>
        <TextInput style={styles.box} onChangeText={setEmail} value={email} keyboardType="email-address" />
        <Text style={styles.textID}>{t('phoneNumber')}</Text>
        <TextInput style={styles.box} keyboardType="numeric" onChangeText={setPhoneNumber} value={phoneNumber} />
        <Text style={styles.textID}>{t('password')}</Text>
        <TextInput style={styles.box} secureTextEntry onChangeText={setPassword} value={password} />
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.text}>{t('register')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textdktk}>{t('alreadyhaveaccount')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  formContainer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  logo: {
    width: "100%",
    height: "10%",
    alignSelf: 'center',
    marginBottom: 30,
  },
  textdangnhap: {
    color: '#000C7E',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  box: {
    height: 40,
    backgroundColor: '#F5F5F5',
    borderColor: '#8A8A8A',
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  textID: {
    color: '#262626',
    fontSize: 14,
    marginBottom: 5,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#182EF3',
    borderRadius: 20,
    paddingVertical: 12,
    marginBottom: 20,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  textdktk: {
    color: '#000000',
    fontSize: 14,
    textAlign: 'center',
  },
});
