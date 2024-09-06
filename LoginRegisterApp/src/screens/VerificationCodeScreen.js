import React, { useRef } from 'react';

import { View, Text, TextInput, Button, TouchableOpacity,StyleSheet,Image } from 'react-native';

export default function VerificationCodeScreen() {
  // Tạo các tham chiếu cho mỗi TextInput
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);

  // Hàm xử lý khi nhập hoặc xóa text
  const handleInputChange = (text, currentInputRef, nextInputRef, previousInputRef) => {
    if (text.length === 1) {
      // Nếu người dùng nhập 1 ký tự
      if (/^\d$/.test(text) && nextInputRef) {
        nextInputRef.current.focus(); // Focus vào ô tiếp theo
      }
    } else if (text.length === 0 && previousInputRef) {
      // Nếu người dùng xóa ký tự và có ô trước đó
      previousInputRef.current.focus(); // Focus về ô trước đó
    }
  };

  return (
    
    <View style={styles.column}>
	<View style={styles.row}>
		<Image
			source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
			resizeMode = {"stretch"}
			style={styles.image}
		/>
		<View style={styles.box}>
		</View>
		<Text style={styles.textxm}>
			{"Xác minh"}
		</Text>
	</View>
	<Text style={styles.textnm}>
		{"vui lòng nhập mã xác minh của  bạn"}
	</Text>
	<View style={styles.row}>
      {/* TextInput đầu tiên */}
      <View style={styles.view}>
        <TextInput
          ref={input1Ref}
          style={styles.text}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={(text) => handleInputChange(text, input1Ref, input2Ref, null)}
        />
      </View>

      {/* TextInput thứ hai */}
      <View style={styles.view}>
        <TextInput
          ref={input2Ref}
          style={styles.text}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={(text) => handleInputChange(text, input2Ref, input3Ref, input1Ref)}
        />
      </View>

      {/* TextInput thứ ba */}
      <View style={styles.view}>
        <TextInput
          ref={input3Ref}
          style={styles.text}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={(text) => handleInputChange(text, input3Ref, input4Ref, input2Ref)}
        />
      </View>

      {/* TextInput thứ tư */}
      <View style={styles.view}>
        <TextInput
          ref={input4Ref}
          style={styles.text}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={(text) => handleInputChange(text, input4Ref, null, input3Ref)}
        />
      </View>
    </View>
	<Text style={styles.textnb}>
		{"nếu bạn chưa nhận được mã , hãy gửi lại"}
	</Text>
	<TouchableOpacity style={styles.button}>
	<Text style={styles.text}>
		{"Gửi"}
	</Text>
</TouchableOpacity>
	<Text style={styles.textdc}>
		{"Đã có tài khoản?"}
	</Text>
	<TouchableOpacity style={styles.buttondk}>
	<Text style={styles.textdk}>
		{"Đăng ký"}
	</Text>
</TouchableOpacity>
	<Text style={styles.textlink}>
		{"https://www.riatec-th.co.jp"}
	</Text>
</View>
  );
}
const styles = StyleSheet.create({
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 12,
		marginHorizontal: 73,
	},
	text: {
    color: "#8F8F8F",
		fontSize: 13,
		fontWeight: "bold",
	},
  textxm: {
		color: "#444444",
		fontSize: 16,
		fontWeight: "bold",
		marginRight:80,
		marginTop: 20
	},
  textnm: {
		color: "#444444",
		fontSize: 14,
		fontWeight: "bold",
		marginBottom: 20,
		marginLeft: 51,
	},
  textnb: {
		color: "#ABABAB",
		fontSize: 9,
		fontWeight: "bold",
		marginBottom: 41,
		marginLeft: 114,
	},
  textdc: {
		color: "#ABABAB",
		fontSize: 9,
		fontWeight: "bold",
		marginBottom: 41,
		marginLeft: 154,
	},
  button: {
		alignItems: "center",
		backgroundColor: "#182EF3",
		borderRadius: 20,
		paddingVertical: 17,
		marginBottom: 24,
		marginHorizontal: 43,
	},
  buttondk: {
		borderColor: "#444444",
		borderRadius: 20,
		borderWidth: 1,
		paddingVertical: 16,
		paddingHorizontal: 85,
		marginBottom: 187,
		marginHorizontal: 52,
	},
	textdk: {
    marginLeft:25,
		color: "#8F8F8F",
		fontSize: 13,
		fontWeight: "bold",
	},
	view: {
		width: 50,
		alignItems: "center",
		borderColor: "#444444",
		borderRadius: 33,
		borderWidth: 1,
		paddingVertical: 19,
	},
  textlink: {
		color: "#262626",
		fontSize: 14,
		fontWeight: "bold",
		marginLeft: 100,
	},
});