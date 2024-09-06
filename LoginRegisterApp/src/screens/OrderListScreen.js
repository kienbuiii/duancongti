import React from 'react';
import { ScrollView, View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Image, } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';



export default function OrderListScreen() {
    return (

        <View >
            <Text style={styles.text1}>
                {"Lịch sử đặt hàng"}
            </Text>
            <View style={styles.row}>
                <Image
                    source={{ uri: "https://cdn-icons-png.flaticon.com/128/751/751463.png" }}
                    resizeMode={"stretch"}
                    style={styles.image}
                />
                <TextInput style={styles.text} placeholder="Vui lòng nhập mã đơn của bạn. ">
                </TextInput>
            </View>
            <ScrollView>
                <View>
                <TouchableOpacity>
                <View style={styles.column}>
                    <View style={styles.row0}>
                        <Text style={styles.textcod1}>
                            {"Mã đơn "}
                        </Text>
                        <Text style={styles.textcod}>
                            {"IN000000011"}
                        </Text>
                    </View>
                    <View style={styles.row0}>
                        <Text style={styles.textcod1}>
                            {"Ngày đặt :"}
                        </Text>
                        <Text style={styles.text3}>
                            {"2024/07/14 15:03"}
                        </Text>
                    </View>
                    <View style={styles.row0}>
                        <Text style={styles.textpay}>
                            {"Tổng tiền : "}
                        </Text>
                        <Text style={styles.textyen}>
                            {"16,600 yen"}
                        </Text>
                    </View>
                    <View style={styles.row0}>
                        <Text style={styles.textpay}>
                            {"Tình trạng : "}
                        </Text>
                        <Text style={styles.textPC}>
                            {"Không có"}
                        </Text>
                    </View>
                    <View style={styles.row0}>
                        <Text style={styles.textpay}>
                            {"Tên khách hàng :"}
                        </Text>
                        <Text style={styles.textuser}>
                            {"Nguyễn văn  A"}
                        </Text>
                    </View>
                </View>
                </TouchableOpacity>
             
                
                </View><View>
                <TouchableOpacity>
                <View style={styles.column}>
                    <View style={styles.row0}>
                        <Text style={styles.textcod1}>
                            {"Mã đơn "}
                        </Text>
                        <Text style={styles.textcod}>
                            {"IN000000011"}
                        </Text>
                    </View>
                    <View style={styles.row0}>
                        <Text style={styles.textcod1}>
                            {"Ngày đặt :"}
                        </Text>
                        <Text style={styles.text3}>
                            {"2024/07/14 15:03"}
                        </Text>
                    </View>
                    <View style={styles.row0}>
                        <Text style={styles.textpay}>
                            {"Tổng tiền : "}
                        </Text>
                        <Text style={styles.textyen}>
                            {"16,600 yen"}
                        </Text>
                    </View>
                    <View style={styles.row0}>
                        <Text style={styles.textpay}>
                            {"Tình trạng : "}
                        </Text>
                        <Text style={styles.textPC}>
                            {"Không có"}
                        </Text>
                    </View>
                    <View style={styles.row0}>
                        <Text style={styles.textpay}>
                            {"Tên khách hàng :"}
                        </Text>
                        <Text style={styles.textuser}>
                            {"Nguyễn văn  A"}
                        </Text>
                    </View>
                </View>
                </TouchableOpacity>
             
                
                </View><View>
                <TouchableOpacity>
                <View style={styles.column}>
                    <View style={styles.row0}>
                        <Text style={styles.textcod1}>
                            {"Mã đơn "}
                        </Text>
                        <Text style={styles.textcod}>
                            {"IN000000011"}
                        </Text>
                    </View>
                    <View style={styles.row0}>
                        <Text style={styles.textcod1}>
                            {"Ngày đặt :"}
                        </Text>
                        <Text style={styles.text3}>
                            {"2024/07/14 15:03"}
                        </Text>
                    </View>
                    <View style={styles.row0}>
                        <Text style={styles.textpay}>
                            {"Tổng tiền : "}
                        </Text>
                        <Text style={styles.textyen}>
                            {"16,600 yen"}
                        </Text>
                    </View>
                    <View style={styles.row0}>
                        <Text style={styles.textpay}>
                            {"Tình trạng : "}
                        </Text>
                        <Text style={styles.textPC}>
                            {"Không có"}
                        </Text>
                    </View>
                    <View style={styles.row0}>
                        <Text style={styles.textpay}>
                            {"Tên khách hàng :"}
                        </Text>
                        <Text style={styles.textuser}>
                            {"Nguyễn văn  A"}
                        </Text>
                    </View>
                </View>
                </TouchableOpacity>
             
                
                </View><View>
                <TouchableOpacity>
                <View style={styles.column}>
                    <View style={styles.row0}>
                        <Text style={styles.textcod1}>
                            {"Mã đơn "}
                        </Text>
                        <Text style={styles.textcod}>
                            {"IN000000011"}
                        </Text>
                    </View>
                    <View style={styles.row0}>
                        <Text style={styles.textcod1}>
                            {"Ngày đặt :"}
                        </Text>
                        <Text style={styles.text3}>
                            {"2024/07/14 15:03"}
                        </Text>
                    </View>
                    <View style={styles.row0}>
                        <Text style={styles.textpay}>
                            {"Tổng tiền : "}
                        </Text>
                        <Text style={styles.textyen}>
                            {"16,600 yen"}
                        </Text>
                    </View>
                    <View style={styles.row0}>
                        <Text style={styles.textpay}>
                            {"Tình trạng : "}
                        </Text>
                        <Text style={styles.textPC}>
                            {"Không có"}
                        </Text>
                    </View>
                    <View style={styles.row0}>
                        <Text style={styles.textpay}>
                            {"Tên khách hàng :"}
                        </Text>
                        <Text style={styles.textuser}>
                            {"Nguyễn văn  A"}
                        </Text>
                    </View>
                </View>
                </TouchableOpacity>
             
                
                </View>
            </ScrollView>

        </View>
    );
}
const styles = StyleSheet.create({
    text1: {
        color: "#000000",
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: 105,
        marginTop: 10,
        marginBottom:10
    },
    image: {
        width: 18,
        height: 18,
        marginRight: 13,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        borderColor: "#262626",
        borderRadius: 12,
        borderWidth: 1,
        paddingVertical: 13,
        paddingHorizontal: 15,
        marginBottom: 20,
        marginHorizontal: 14,
    },
    text: {
        color: "#8A8A8A",
        fontSize: 16,
        flex: 1,
    },
    column: {
		backgroundColor: "#F9F9F9",
		borderColor: "#182EF3",
		borderRadius: 12,
		borderWidth: 1,
		paddingVertical: 12,
		paddingHorizontal: 16,
		marginBottom: 12,
		marginHorizontal: 14,
		shadowColor: "#00000026",
		shadowOpacity: 0.2,
		shadowOffset: {
		    width: 0,
		    height: 2
		},
		shadowRadius: 4,
		elevation: 4,
	},
    row0: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 14,
	},
    textcod: {
		color: "#0671E0",
		fontSize: 16,
        marginLeft: 40,
	},
    textcod1: {
		color: "#262626",
		fontSize: 16,
		marginRight: 90,
        fontWeight: "bold",
	},
    textpay: {
		color: "#262626",
		fontSize: 16,
		fontWeight: "bold",
	},
    textyen: {
		color: "#262626",
		fontSize: 16,
        marginLeft: 130,
	},
    textuser: {
		color: "#262626",
		fontSize: 16,
        marginLeft: 50,
	},
    textPC: {
        color: "#262626",
		fontSize: 16,
        marginLeft: 130,
    },
});