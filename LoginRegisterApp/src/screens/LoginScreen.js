import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity,StyleSheet,Image  } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './RegisterScreen';
export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View>
     <Image source={require('../../assets/Logo.png')} style={styles.logo} />
      <Text  style={styles.textdangnhap}>Đăng nhập đặt hàng</Text>
      <Text style={styles.textID}>{"ID"}</Text>
      <TextInput style={styles.box} placeholder="" />
      <Text style={styles.textID}>{"Mật khẩu"}</Text>
      <TextInput style={styles.box} placeholder="" secureTextEntry />
      <TouchableOpacity>
        <Text style={styles.textqmk}>Quên mật khẩu?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
	    <Text style={styles.text}>{"Đăng nhập"}</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation.navigate('Register')}>
      <Text style={styles.textdktk}>Bạn đã có tài khoản? Đăng ký</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
	textqmk: {
		color: "#182EF3",
		fontSize: 14,
		fontWeight: "bold",
		marginBottom: 44,
		marginLeft: 20,
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