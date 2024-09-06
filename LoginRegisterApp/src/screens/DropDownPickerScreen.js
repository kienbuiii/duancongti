import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';

export default function DropDownPickerScreen() {
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
            <View style={styles.header}>
                <Text style={styles.text}>Khách hàng</Text>
                <Text style={styles.text}>Tên người dùng ứng dụng</Text>
            </View>

            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                containerStyle={styles.dropdownContainer}
                style={styles.dropdown}
            />


            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OderProduct')}>
                <Text style={styles.buttonText}>Đến tiếp theo</Text>
            </TouchableOpacity>
        </View>
    );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'flex-start',  // Align items to the top
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
        marginTop: 20,  // Space from the top
    },
    text: {
        color: "#555555",
        fontSize: width * 0.05,  // Responsive font size
        fontWeight: "bold",
        textAlign: "center",
        flex: 1,
    },
    dropdownContainer: {
        marginBottom: 24,
    },
    dropdown: {
        borderColor: '#ccc',
        height: 50,
    },
    button: {
        backgroundColor: "#182EF3",
        borderRadius: 20,
        paddingVertical: 16,
        alignItems: "center",
        marginHorizontal: width * 0.2, // Responsive horizontal margin
        marginVertical: 20,  // Space from the dropdown picker
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: width * 0.04,  // Responsive font size
        fontWeight: "bold",
    },
});
