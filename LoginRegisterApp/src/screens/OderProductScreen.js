import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';

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
        <View style={styles.container}>
            <Text style={styles.titleText}>Tên đơn hàng</Text>

            <View style={styles.row}>
                <Text style={styles.labelText}>＊Tên sản phẩm</Text>
            </View>

            <TextInput
                placeholder="Đầu vào chính của sản phẩm"
                style={styles.input}
            />

            <View style={styles.row}>
                <Text style={styles.labelText}>＊Số lượng</Text>
                <Text style={styles.labelText}>Có khoảng 12</Text>
            </View>

            <View style={styles.row}>
                <TextInput
                    placeholder="Đầu vào số"
                    style={[styles.input, styles.inputHalf]}
                    keyboardType="numeric"
                />
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    style={[styles.input, styles.inputHalf]}
                    maxHeight={150}
                />
            </View>
            <View style={styles.cach}>
                <Text style={styles.labelText}>*Nhận xét</Text>

                <TextInput
                    placeholder=""
                    style={[styles.input, styles.inputLarge]}
                    multiline={true}
                />
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Lưu vào danh sách đặt hàng</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Đơn hàng đã kết thúc</Text>
            </TouchableOpacity>
        </View>
    );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    titleText: {
        color: "#000000",
        fontSize: width * 0.06, // Responsive font size
        fontWeight: "bold",
        marginBottom: 16,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    labelText: {
        color: "#000000",
        fontSize: width * 0.05, // Responsive font size
        marginBottom: 3,
    },
    input: {
        color: "#1D1B20",
        fontSize: width * 0.04, // Responsive font size
        borderColor: "#79747E",
        borderRadius: 4,
        borderWidth: 1,
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginBottom: 16,
        width: '100%',
    },
    inputHalf: {
        width: '48%', // Half width for inputs in row
    },
    inputLarge: {
        height: 100, // Larger input for comments
    },
    button: {
        backgroundColor: "#182EF3",
        borderRadius: 20,
        paddingVertical: 12,
        alignItems: "center",
        marginBottom: 16,
        marginHorizontal: width * 0.2, // Responsive horizontal margin
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: width * 0.045, // Responsive font size
        fontWeight: "bold",
    },
    cach:{
        // marginTop:80,
    },
});
