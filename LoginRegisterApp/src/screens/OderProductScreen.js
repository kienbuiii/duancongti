import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Image, ScrollView,Dimensions  } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListOderScreen from './ListOderScreen';
const { width, height } = Dimensions.get('window');
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
                <DropDownPicker style={styles.input3}
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
          <TouchableOpacity style={styles.buttonluu} onPress={() => navigation.navigate('ListOder')}>
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
        fontSize: width * 0.05,  // Giảm cỡ chữ
        fontWeight: "bold",
    },
    text1: {
        color: "#000000",
        fontSize: width * 0.04,  // Giảm cỡ chữ
        marginBottom: height * 0.015, 
        marginLeft: width * 0.07,  
        marginTop: height * 0.02,
    },
    text2: {
        color: "#000000",
        fontSize: width * 0.04, 
        marginBottom: height * 0.01,  
        paddingTop: height * 0.01, 
        flexDirection: 'row',  
        justifyContent: 'space-between',  
        alignItems: 'center',  
        marginRight: width * 0.06,  
    },
    input: {
        color: "#1D1B20",
        fontSize: width * 0.035,  
        marginBottom: height * 0.015, 
        marginHorizontal: width * 0.04,  
        borderColor: "#79747E",
        borderRadius: 4,
        borderWidth: 1,
        paddingVertical: height * 0.02,  
        paddingHorizontal: width * 0.035,  
    },
    input2: {
        color: "#1D1B20",
        fontSize: width * 0.035,  
        marginLeft: width * 0.04,  
        width: 160,  
        height:    50,  
        borderColor: "#79747E",
        borderRadius: 4,
        borderWidth: 1,
        paddingVertical: height * 0.015,  
        paddingHorizontal: width * 0.04,  
        marginLeft:20
    },
    input3: {
        color: "#1D1B20",
        fontSize: width * 0.035,  
        marginLeft: width * 0.04,  
        width: 160,  
        height:    50,  
        borderColor: "#79747E",
        borderRadius: 4,
        borderWidth: 1,
        paddingVertical: height * 0.015,  
        paddingHorizontal: width * 0.04,  
        marginLeft:25
    },
    textnx: {
        color: "#000000",
        fontSize: width * 0.045,  
        marginBottom: height * 0.008, 
        marginLeft: width * 0.06,  
        marginTop: height * 0.15,  
    },
    inputnx: {
        color: "#1D1B20",
        fontSize: width * 0.035,  
        marginBottom: height * 0.015,  
        marginHorizontal: width * 0.04,  
        borderColor: "#79747E",
        borderRadius: 4,
        borderWidth: 1,
        paddingVertical: height * 0.04,  
        paddingHorizontal: width * 0.035,  
    },
    buttonluu: {
        width: width * 0.50,  
        height: height * 0.06,  
        alignItems: "center",
        backgroundColor: "#182EF3",
        borderRadius: 20,
        paddingVertical: height * 0.012,  
        marginBottom: height * 0.01,  
        marginHorizontal: width * 0.2, 
        marginLeft:100 
    },
    textluu: {
        color: "#FFFFFF",
        fontSize: width * 0.035,  
        fontWeight: "bold",
    },
    buttondone: {
        width: width * 0.50,  
        
        height: height * 0.06,  
        alignItems: "center",
        backgroundColor: "#182EF3",
        borderRadius: 20,
        paddingVertical: height * 0.012,  
        marginHorizontal: width * 0.2,  
        marginLeft:100
    },
    textdone: {
        color: "#FFFFFF",
        fontSize: width * 0.035,  
        fontWeight: "bold",
    },
});