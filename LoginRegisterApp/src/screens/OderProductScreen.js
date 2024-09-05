import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function OderProductScreen() {
    const navigation = useNavigation();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'đi chợ 1', value: '1' },
        { label: 'đi chợ 2', value: '2' },
        { label: 'đi chợ 3', value: '3' },
        { label: 'đi chợ 4', value: '4' },
        { label: 'đi chợ 5', value: '5' },
        { label: 'đi chợ 6', value: '6' },
        { label: 'đi chợ 7', value: '7' }
    ]);
    return (
        <View>
            <Text style={styles.text}>
                {"Tên đơn hàng"}
            </Text>

            <View style={styles.text2}>
                <Text style={styles.text1}>
                    {"＊Tên sản phẩm"}
                </Text>
            </View>
            <TextInput

                placeholder={"Đầu vào chính của sản phẩm"}
                style={styles.input}
            />
            <View style={styles.text2}>
                <Text style={styles.text1}>
                    {"＊Số lượng"}
                </Text>
                <Text style={styles.text1}>
                    {"Có khoảng 12"}
                </Text>
            </View>
            <View style={styles.text2}>
                <TextInput

                    placeholder={"Đầu vào số"}
                    style={styles.input2} keyboardType="numeric"
                />
                <DropDownPicker style={styles.input2}
                  maxHeight={150}
                 
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    itemStyle={styles.itemStyle}

                />
            </View>
            <Text style={styles.textnx}>
                {"*Nhận xét"}
            </Text>
            <TextInput

                placeholder={""}
                style={styles.inputnx}
            />
            <TouchableOpacity style={styles.buttonluu}>
                <Text style={styles.textluu}>
                    {"Lưu vào danh sách đặt hàng"}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttondone}>
                <Text style={styles.textdone}>
                    {"Đơn hàng đã kết thúc"}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    text: {
        color: "#000000",
        fontSize: 22,
        fontWeight: "bold",
    },
    text1: {
        color: "#000000",
        fontSize: 20,
        marginBottom: 3,
        marginLeft: 35,
        margintop: 35,
    },
    text2: {
        color: "#000000",
        fontSize: 20,
        marginBottom: 3,
        // marginLeft: 35,
        paddingTop: 10,
        flexDirection: 'row',  // Sắp xếp các phần tử theo hàng ngang
        justifyContent: 'space-between',  // Tùy chọn: Căn giữa các phần tử hoặc tạo khoảng cách
        alignItems: 'center',  // Căn các phần tử theo chiều dọc
        marginRight: 30,
    },
    input: {
        color: "#1D1B20",
        fontSize: 16,
        marginBottom: 19,
        marginHorizontal: 23,
        borderColor: "#79747E",
        borderRadius: 4,
        borderWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 17,

    },
    text3: {
        color: "#000000",
        fontSize: 20,
    },
    text4: {
        color: "#000000",
        fontSize: 20,
    },
    input2: {
        color: "#1D1B20",
        fontSize: 16,
        marginLeft: 22,
        width: 169,
        borderColor: "#79747E",
        borderRadius: 4,
        borderWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 19,

    },
    textnx: {
        color: "#000000",
        fontSize: 20,
        marginBottom: 4,
        marginLeft: 32,
        marginTop: 130
    },
    inputnx: {
        color: "#1D1B20",
        fontSize: 16,
        marginBottom: 19,
        marginHorizontal: 23,
        borderColor: "#79747E",
        borderRadius: 4,
        borderWidth: 1,
        paddingVertical: 40,
        paddingHorizontal: 17,

    }, buttonluu: {
        width: 204,
        height: 43,
        alignItems: "center",
        backgroundColor: "#182EF3",
        borderRadius: 20,
        paddingVertical: 10,
        marginBottom: 11,
        marginHorizontal: 90,
    },
    textluu: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "bold",
    }
    ,
    buttondone: {
        width: 204,
        height: 43,
        alignItems: "center",
        backgroundColor: "#182EF3",
        borderRadius: 20,
        paddingVertical: 10,

        marginHorizontal: 90,
    },
    textdone: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "bold",
    },
    itemStyle: {
        maxWidth: '10%', // Chiều rộng của mỗi item
        // ... các kiểu dáng khác cho item
      },
});