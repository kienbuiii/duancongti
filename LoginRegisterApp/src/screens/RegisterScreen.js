import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity,StyleSheet,Image,ScrollView } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function RegisterScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView>
        <Image source={require('../../assets/Logo ĐCM.png')} style={styles.logo} />
      <Text style={styles.textdangnhap}>Đăng ký thành viên</Text>
      <Text style={styles.textID}>{"Tên công ty"}</Text>
      <TextInput style={styles.box} placeholder="" />
      <Text style={styles.textID}>{"Tên người dùng"}</Text>
      <TextInput style={styles.box} placeholder="" />
      <Text style={styles.textID}>{"Địa chỉ email người dùng"}</Text>
      <TextInput style={styles.box} placeholder="" />
      <Text style={styles.textID}>{"Số điện thoại"}</Text>
      <TextInput style={styles.box} placeholder="" keyboardType="numeric"/>
      <Text style={styles.textID}>{"ID"}</Text>
      <TextInput style={styles.box} placeholder="" />
      <Text style={styles.textID}>{"Mật khẩu"}</Text>
      <TextInput style={styles.box} placeholder="" secureTextEntry />
      <TouchableOpacity style={styles.button}>
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