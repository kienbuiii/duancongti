import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';

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
