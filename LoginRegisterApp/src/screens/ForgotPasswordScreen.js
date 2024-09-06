import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity , StyleSheet} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import NewPasswordScreen from './NewPasswordScreen';
import ConfirmPassScreen from './ConfirmPassScreen';
export default function ForgotPasswordScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.textqmk}>
	{"Quên mật khẩu  "}
</Text>
<Text style={styles.text1}>
	{"vui lòng nhập địa chỉ email của bạn"}
</Text>
<View style={styles.view}>
	<TextInput style={styles.text}>
		
	</TextInput>

</View>
<TouchableOpacity  onPress={() => navigation.navigate('Login')}>
	<Text style={styles.buttonText}>
		{"Quay lại để đăng nhập"}
	</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ConfirmPass')}>
	    <Text style={styles.text}>{"Gửi"}</Text>
      </TouchableOpacity>

	<Text style={styles.buttonText1}>
		{" Đã có tài khoản？"}
	</Text>

<TouchableOpacity style={styles.button2}  onPress={() => navigation.navigate('Register')}>
	<Text style={styles.text}>
		{"Đăng kí "}
	</Text>
</TouchableOpacity>
    </View>
  );

}
const styles = StyleSheet.create({
	textqmk: {
		color: "#444444",
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 125,
		marginLeft: 133,
	},
  text1: {
		color: "#444444",
		fontSize: 14,
		fontWeight: "bold",
		marginBottom: 11,
		marginLeft: 63,
	},
  text: {
		color: "#8F8F8F",
		fontSize: 12,
	},
	view: {
		borderColor: "#444444",
		borderRadius: 20,
		borderWidth: 2,
		paddingVertical: 14,
		paddingHorizontal: 20,
		marginBottom: 13,
		marginHorizontal: 24,

	},
  buttonText: {
		color: "#ABABAB",
		fontSize: 12,
		fontWeight: "bold",
		marginBottom: 36,
		marginLeft: 131,
	},
  button: {
		alignItems: "center",
		backgroundColor: "#182EF3",
		borderRadius: 20,
		paddingVertical: 15,
		marginBottom: 24,
		marginHorizontal: 73,
	},
	text: {
		color: "#FFFFFF",
		fontSize: 14,
		fontWeight: "bold",
	},
	text: {
		color: "#FFFFFF",
		fontSize: 13,
		fontWeight: "bold",
	},
  buttonText1: {
    alignItems: "center",
		color: "#ABABAB",
		fontSize: 13,
		fontWeight: "bold",
		marginBottom: 9,
		marginLeft: 131,
	},
  button2: {
		borderColor: "#444444",
		borderRadius: 20,
		borderWidth: 1,
    alignItems: "center",
		borderRadius: 20,
		paddingVertical: 15,
		marginBottom: 24,
		marginHorizontal: 73,
	},
	text: {
		color: "#8F8F8F",
		fontSize: 13,
		fontWeight: "bold",
	},
});