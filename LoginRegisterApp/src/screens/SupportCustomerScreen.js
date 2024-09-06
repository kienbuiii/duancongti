import * as React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import FaqScreen from '../screens/FaqScreen';
import SupportChanelScreeen from '../screens/SupportChanelScreeen';
// Tạo các Tab Component
function FaqScreenComponent() {
	return (
		<View style={styles.container}>
			<Text>Trang chủ</Text>
		</View>
	);
}

function SupportChanelScreeenComponent() {
	return (

		<View>

			<SupportChanelScreeen>
			</SupportChanelScreeen>
		</View>

	);
}


// Khởi tạo Tab Navigator
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
	return (
		<Tab.Navigator
		screenOptions={{
			tabBarIndicatorStyle: { backgroundColor: '#000' },  // Đổi màu của thanh indicator
		  }}
		>
			<Tab.Screen name="Câu hỏi thường gặp" component={FaqScreenComponent} />
			<Tab.Screen name=" " component={SupportChanelScreeenComponent} />
		</Tab.Navigator>
	);
}


export default function SupportCustomerScreen() {
	return (

		<MyTabs />

	);
}



const styles = StyleSheet.create({
	container: {
		flex: 1,               // Đảm bảo component chiếm hết không gian
		justifyContent: 'center',  // Canh giữa theo trục dọc
		alignItems: 'center',      // Canh giữa theo trục ngang
		backgroundColor: '#f5f5f5', // Màu nền cho dễ nhìn
	},
});