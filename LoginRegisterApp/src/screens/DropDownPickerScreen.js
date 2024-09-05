import React, { useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';
import OderProductScreen from './OderProductScreen';  


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

        <View>
            <View style={styles.hangnga}>
                <Text style={styles.text}>
                {"Khách hàng"}
            </Text>
            <Text style={styles.text}>
                {"Tên người dùng ứng dụng"}
            </Text>
           
           
            </View>
           
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
            />
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OderProduct')}>
	    <Text style={styles.text2}>{"Đến tiếp theo"}</Text>
      </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    text: {
        color: "#55555",
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 5,
        marginRight: 2,
        width: 206,
    },
    text1: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "bold",

    },
    button: {
        alignItems: "center",
        backgroundColor: "#182EF3",
        borderRadius: 20,
        paddingVertical: 16,
        marginHorizontal: 113,
        marginTop: 300,
    },
    hangnga: {
        flexDirection: 'row',  // Sắp xếp các phần tử theo hàng ngang
        justifyContent: 'space-between',  // Tùy chọn: Căn giữa các phần tử hoặc tạo khoảng cách
        alignItems: 'center',  // Căn các phần tử theo chiều dọc
        marginRight:30,
    },
    logo:{
        width: 30,
		height: 16,
  },text2:{
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  }
});
