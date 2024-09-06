import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

export default function ListOrderScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.textf}>
                {"Tên đơn hàng"}
            </Text>
            <View>
                <Text style={styles.text1}>
                    {"Danh sách đơn hàng ( chưa xác nhận)"}
                </Text>
            </View>
            <View style={styles.viewday}>
                <Text style={styles.textday}>
                    {"8/7/2024"}
                </Text>
            </View>

            <ScrollView style={styles.scrollView}>
                <View style={styles.viewallrow}>
                    {[...Array(10)].map((_, index) => (
                        <View key={index} style={styles.row}>
                            <View style={styles.row2}>
                                <View style={styles.view}>
                                    <Text style={styles.text}>
                                        {"Thịt bò"}
                                    </Text>
                                </View>
                                <View style={styles.view2}>
                                    <Text style={styles.text}>
                                        {"1"}
                                    </Text>
                                </View>
                                <View style={styles.view3}>
                                    <Text style={styles.text}>
                                        {"kg"}
                                    </Text>
                                </View>
                                <View style={styles.box}></View>
                            </View>
                            <TouchableOpacity>
                                <Text style={styles.buttonText}>
                                    {"Xoá"}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ScrollView>

            <View style={styles.viewbutton}>
                <TouchableOpacity style={styles.viewodcf}>
                    <Text style={styles.textodcf}>
                        {"Đơn hàng đã được xác nhận"}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewodcf2}>
                    <Text style={styles.textodcf}>
                        {"Gửi đơn hàng"}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textf: {
        color: "#000000",
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 140,
    },
    text1: {
        color: "#000000",
        fontSize: width * 0.045,
        marginBottom: height * 0.04,
        marginLeft: width * 0.04,
        marginTop: height * 0.04,
    },
    viewday: {
        borderColor: "#79747E",
        borderRadius: 4,
        borderWidth: 1,
        paddingVertical: height * 0.03,
        paddingLeft: width * 0.4,
        paddingRight: width * 0.35,
        marginBottom: height * 0.02,
        marginHorizontal: width * 0.05,
    },
    textday: {
        color: "#1D1B20",
        fontSize: width * 0.03,
          paddingLeft: 1,
          paddingRight: 2,
    },
    box: {
        width: 1,
        height: height * 0.05,
        backgroundColor: "#B8B8B8",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: width * 0.06,
        marginLeft: 20,
        maxHeight:300,
    
    },
    row2: {
        width: width * 0.80,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
    },
    text: {
        color: "#000000",
        fontSize: width * 0.027,
    },
    view: {
        width: width * 0.30,
        backgroundColor: "#FFFFFF00",
        borderColor: "#B8B8B8",
        borderWidth: 1,
        paddingVertical: height * 0.02,
        paddingHorizontal: width * 0.02,
    },
    view2: {
        width: width * 0.20,
        backgroundColor: "#FFFFFF00",
        borderColor: "#B8B8B8",
        borderWidth: 1,
        paddingVertical: height * 0.02,
        paddingHorizontal: width * 0.02,
    },
    view3: {
        width: width * 0.2,
        backgroundColor: "#FFFFFF00",
        borderColor: "#B8B8B8",
        borderWidth: 1,
        paddingVertical: height * 0.02,
        paddingHorizontal: width * 0.02,
    },
    textodcf: {
        color: "#FFFFFF",
        fontSize: width * 0.035,
        fontWeight: "bold",
    },
    viewodcf: {
        width: width * 0.55,
        height: height * 0.06,
        alignItems: "center",
        backgroundColor: "#182EF3",
        borderRadius: 20,
        paddingVertical: height * 0.02,
        marginBottom: height * 0.015,
        marginHorizontal: width * 0.3,
        marginTop: height * 0.1,
        marginTop:100
    },
    viewodcf2: {
        width: width * 0.55,
        height: height * 0.06,
        alignItems: "center",
        backgroundColor: "#182EF3",
        borderRadius: 20,
        paddingVertical: height * 0.02,
        marginBottom: height * 0.015,
        marginHorizontal: width * 0.3,
        
    },
    viewallrow: {
        padding: 11,
        marginLeft:-13,
       
    },
    viewbutton: {
        marginLeft: -30,
       
    },
    scrollView: {
        flex: 1,
        
    },
    buttonText:{
        color:"black",
        fontWeight: "bold",
    }
});
