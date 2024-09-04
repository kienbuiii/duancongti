import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';

export default function VerificationCodeScreen() {
  return (
    <View>
      <Text>Xác minh</Text>
      <Text>Vui lòng nhập mã xác nhận của bạn</Text>
      <View>
        <TextInput placeholder="3" />
        <TextInput placeholder="7" />
        <TextInput placeholder="1" />
        <TextInput placeholder="9" />
      </View>
      <Button title="Gửi" onPress={() => {}} />
      <TouchableOpacity>
        <Text>Đăng ký</Text>
      </TouchableOpacity>
    </View>
  );
}
