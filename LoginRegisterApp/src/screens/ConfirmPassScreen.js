import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ConfirmPassScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={styles.textmkmoi}>
        {"Mật khẩu mới"}
      </Text>
      <Text style={styles.text1}>
	{"Vui lòng nhập mật khẩu mới"}
</Text>

<TextInput
	
	placeholder={"Ít nhất 8 chữ số"}
	style={styles.input} secureTextEntry={true}
/>
<Text style={styles.text2}>
	{"Xác thực mật khẩu"}
</Text>
<TextInput
	placeholder={"********"} secureTextEntry={true}
	style={styles.input2}  
/>
<TouchableOpacity style={styles.buttongui}>
	<Text style={styles.text}>
		{"Gửi"}
	</Text>
  
</TouchableOpacity>
<Text style={styles.text3}>
	{"Đã có tài khoản?"}
</Text>
<TouchableOpacity style={styles.button1}>
	<Text style={styles.text4}>
		{"Đăng ký"}
	</Text>
</TouchableOpacity>
    </View>
    
  );
  
}

const styles = StyleSheet.create({
  textmkmoi: {
		color: "#444444",
		fontSize: 16,
		fontWeight: "bold",
    marginLeft:120,
	},
  text1: {
    color: "#444444",
		fontSize: 13,
		fontWeight: "bold",
		marginBottom: 10,
		marginLeft: 27,
    marginTop:100,
	},
  input: {
		color: "#8F8F8F",
		fontSize: 12,
		marginBottom: 22,
		marginHorizontal: 21,
		borderColor: "#444444",
		borderRadius: 20,
		borderWidth: 1,
		paddingVertical: 16,
		paddingHorizontal: 26,
	},
  input2: {
		color: "#8F8F8F",
		fontSize: 13,
		marginBottom: 33,
		marginHorizontal: 25,
		borderColor: "#444444",
		borderRadius: 20,
		borderWidth: 1,
		paddingVertical: 18,
		paddingHorizontal: 25,
	},
  text2: {
		color: "#444444",
		fontSize: 13,
		fontWeight: "bold",
		marginBottom: 10,
		marginLeft: 27,
	},
  buttongui: {
		alignItems: "center",
		backgroundColor: "#182EF3",
		borderRadius: 20,
		paddingVertical: 18,
		marginBottom: 76,
		marginHorizontal: 91,
	},
	text: {
		color: "#FFFFFF",
		fontSize: 13,
		fontWeight: "bold",
	},
  text3: {
		color: "#ABABAB",
		fontSize: 10,
		fontWeight: "bold",
		marginBottom: 13,
		marginLeft: 150,
	},
  button1: {
		alignItems: "center",
		borderColor: "#444444",
    borderRadius: 20,
		borderWidth: 1,
		borderRadius: 20,
		paddingVertical: 18,
		marginBottom: 76,
		marginHorizontal: 91,
	},
	text4: {
		color: "#8F8F8F",
		fontSize: 13,
		fontWeight: "bold",
	},
});
