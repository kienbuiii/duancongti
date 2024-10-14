import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import DropDownPicker from 'react-native-dropdown-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import API_URLS from '../api';
export default function LoginScreen() {
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();

  const [username, setUsername] = useState(''); // Thêm state cho username
  const [password, setPassword] = useState(''); // Thêm state cho password
  const [loading, setLoading] = useState(false); // State để quản lý khi đăng nhập

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(i18n.language);
  const [items, setItems] = useState([
    { label: 'English', value: 'en' },
    { label: 'Vietnamese', value: 'vi' }
  ]);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setValue(lang);
  };

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert(t('Error'), t('Please enter both username and password.'));
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(API_URLS.LOGIN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Đăng nhập thành công
        await AsyncStorage.setItem('userId', data.userId);
        Alert.alert(t('Success'), t('Login successful!'));
        navigation.navigate('DropDownPicker'); // Chuyển đến màn hình Home sau khi đăng nhập thành công
      } else {
        // Xử lý lỗi đăng nhập
        Alert.alert(t('Error'), data.error || t('Login failed.'));
      }
    } catch (error) {
      Alert.alert(t('Error'), t('An error occurred. Please try again.'));
    }

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Logo.png')} style={styles.logo} />
      <Text style={styles.title}>{t('Đăng nhập đặt hàng')}</Text>
      
      <Text style={styles.label}>{t('ID')}</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={username}
        onChangeText={setUsername}
      />

      <Text style={styles.label}>{t('Mật khẩu')}</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder=""
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.eyeIcon}>
          {/* Add eye icon here */}
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPassword}>{t('Bạn quên mật khẩu?')}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>{t('Đăng nhập')}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>{t('Đã có tài khoản? Đăng ký thành viên')}</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>https://www.riatec-th.co.jp</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    width: "90%",
    height: "10%",
    alignSelf: 'center',
    marginTop: 70,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 30,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 10,
  },
  forgotPassword: {
    color: '#0000FF',
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#0000FF',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerText: {
    color: '#0000FF',
    marginBottom: 20,
  },
  footerText: {
    position: 'absolute',
    bottom: 20,
    color: '#888',
  },
});