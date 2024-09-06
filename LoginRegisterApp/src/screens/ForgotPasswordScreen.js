import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';

import { View, Text, TextInput, Button, TouchableOpacity , StyleSheet} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import NewPasswordScreen from './NewPasswordScreen';
import ConfirmPassScreen from './ConfirmPassScreen';
export default function ForgotPasswordScreen() {
  return (
    <View>
      <Text>Quên mật khẩu</Text>
      <TextInput placeholder="Nhập địa chỉ email của bạn" />
      <Button title="Gửi" onPress={() => {}} />
      <TouchableOpacity>
        <Text>Bạn đã có tài khoản? Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
}
