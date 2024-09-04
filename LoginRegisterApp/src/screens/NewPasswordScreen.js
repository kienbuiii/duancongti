import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';

export default function NewPasswordScreen() {
  return (
    <View>
      <Text>Mật khẩu mới</Text>
      <TextInput placeholder="Nhập mật khẩu mới" secureTextEntry />
      <TextInput placeholder="Nhập lại mật khẩu" secureTextEntry />
      <Button title="Gửi" onPress={() => {}} />
      <TouchableOpacity>
        <Text>Đăng ký</Text>
      </TouchableOpacity>
    </View>
  );
}
