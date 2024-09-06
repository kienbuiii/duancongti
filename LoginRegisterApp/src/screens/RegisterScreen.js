import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity,StyleSheet,Image,ScrollView } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function RegisterScreen() {
  const navigation = useNavigation();
  const [companyName, setCompanyName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await fetch('https://005c-14-241-159-153.ngrok-free.app/api/auth/register', {
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
        // Handle successful registration, e.g., navigate to login screen
        Alert.alert('Success', 'Registration successful!');
        // Navigate to login screen
      } else {
        Alert.alert('Error', data.error);
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again later.');
    }
  };
  return (
    <ScrollView>
      <Image source={require('../../assets/Logo.png')} style={styles.logo} />
      <Text style={styles.textdangnhap}>Đăng ký thành viên</Text>
      <Text style={styles.textID}>{"Tên công ty"}</Text>
      <TextInput style={styles.box} placeholder="" onChangeText={setCompanyName} value={companyName} />
      <Text style={styles.textID}>{"Tên người dùng"}</Text>
      <TextInput style={styles.box} placeholder="" onChangeText={setUsername} value={username} />
      <Text style={styles.textID}>{"Địa chỉ email người dùng"}</Text>
      <TextInput style={styles.box} placeholder="" onChangeText={setEmail} value={email} />
      <Text style={styles.textID}>{"Số điện thoại"}</Text>
      <TextInput style={styles.box} placeholder="" keyboardType="numeric" onChangeText={setPhoneNumber} value={phoneNumber} />
      <Text style={styles.textID}>{"Mật khẩu"}</Text>
      <TextInput style={styles.box} placeholder="" secureTextEntry onChangeText={setPassword} value={password} />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.text}>{"Đăng ký"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.text}>{"Bạn đã có tài khoản? Đăng nhập"}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
	textqmk: {
		color: "#182EF3",
		fontSize: 14,
		fontWeight: "bold",
		marginBottom: 44,
		marginLeft: 65,
	},
  button: {
		alignItems: "center",
		backgroundColor: "#182EF3",
		borderRadius: 20,
		paddingVertical: 17,
		marginBottom: 24,
		marginHorizontal: 43,
	},
	text: {
		color: "#FFFFFF",
		fontSize: 14,
		fontWeight: "bold",
	},
  logo: {
		width: 285,
		height: 70,
		marginTop: 67,
		marginBottom: 78,
		marginHorizontal: 67,
    alignSelf: 'center',
	},
  textdangnhap: {
		color: "#000C7E",
		fontSize: 28,
		fontWeight: "bold",
		marginBottom: 30,
		marginLeft: 69,
	},
  box: {
		height: 44,
		backgroundColor: "#FFFFFF",
		borderColor: "#8A8A8A",
		borderRadius: 12,
		borderWidth: 1,
		marginBottom: 20,
		marginHorizontal: 16,
	},
  textID: {
		color: "#262626",
		fontSize: 16,
		marginBottom: 5,
		marginLeft: 17,
	},
  textdktk: {
		color: "#000000",
		fontSize: 14,
		marginBottom: 268,
		marginLeft: 69,
	},
});