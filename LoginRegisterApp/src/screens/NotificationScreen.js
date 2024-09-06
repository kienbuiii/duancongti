
import React from 'react';
import { ScrollView, View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function NotificationScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {/* Text nằm ngoài ScrollView */}
            <Text style={styles.textnotf}>
                {"Thông báo"}
            </Text>

            {/* ScrollView chứa các thông tin */}
            <ScrollView style={styles.column}>
                <TouchableOpacity style={styles.buttonRow}>
                    <Image
                        source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                        resizeMode={"stretch"}
                        style={styles.image}
                    />
                    <TouchableOpacity style={styles.buttonColumn}>
                        <Text style={styles.text}>
                            {"Bữa tiệc thứ năm đang chờ đón!"}
                        </Text>
                        <Text style={styles.text2}>
                            {"Đĩa rau của bạn đã có trong thực đơn. Hãy phấn khích lên!"}
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.text3}>
                        {"2 ngày trước"}
                    </Text>
                </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRow}>
                    <Image
                        source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                        resizeMode={"stretch"}
                        style={styles.image}
                    />
                    <TouchableOpacity style={styles.buttonColumn}>
                        <Text style={styles.text}>
                            {"Thursday's Feast Awaits!"}
                        </Text>
                        <Text style={styles.text2}>
                            {"Your Exotic Veggie Platter is on the menu. Get excited!"}
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.text3}>
                        {"2 days ago"}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRow}>
                    <Image
                        source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                        resizeMode={"stretch"}
                        style={styles.image}
                    />
                    <TouchableOpacity style={styles.buttonColumn}>
                        <Text style={styles.text}>
                            {"Thursday's Feast Awaits!"}
                        </Text>
                        <Text style={styles.text2}>
                            {"Your Exotic Veggie Platter is on the menu. Get excited!"}
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.text3}>
                        {"2 days ago"}
                    </Text>
                </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRow}>
                    <Image
                        source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                        resizeMode={"stretch"}
                        style={styles.image}
                    />
                    <TouchableOpacity style={styles.buttonColumn}>
                        <Text style={styles.text}>
                            {"Thursday's Feast Awaits!"}
                        </Text>
                        <Text style={styles.text2}>
                            {"Your Exotic Veggie Platter is on the menu. Get excited!"}
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.text3}>
                        {"2 days ago"}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRow}>
                    <Image
                        source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                        resizeMode={"stretch"}
                        style={styles.image}
                    />
                    <TouchableOpacity style={styles.buttonColumn}>
                        <Text style={styles.text}>
                            {"Thursday's Feast Awaits!"}
                        </Text>
                        <Text style={styles.text2}>
                            {"Your Exotic Veggie Platter is on the menu. Get excited!"}
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.text3}>
                        {"2 days ago"}
                    </Text>
                </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRow}>
                    <Image
                        source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                        resizeMode={"stretch"}
                        style={styles.image}
                    />
                    <TouchableOpacity style={styles.buttonColumn}>
                        <Text style={styles.text}>
                            {"Thursday's Feast Awaits!"}
                        </Text>
                        <Text style={styles.text2}>
                            {"Your Exotic Veggie Platter is on the menu. Get excited!"}
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.text3}>
                        {"2 days ago"}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRow}>
                    <Image
                        source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                        resizeMode={"stretch"}
                        style={styles.image}
                    />
                    <TouchableOpacity style={styles.buttonColumn}>
                        <Text style={styles.text}>
                            {"Thursday's Feast Awaits!"}
                        </Text>
                        <Text style={styles.text2}>
                            {"Your Exotic Veggie Platter is on the menu. Get excited!"}
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.text3}>
                        {"2 days ago"}
                    </Text>
                </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRow}>
                    <Image
                        source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                        resizeMode={"stretch"}
                        style={styles.image}
                    />
                    <TouchableOpacity style={styles.buttonColumn}>
                        <Text style={styles.text}>
                            {"Thursday's Feast Awaits!"}
                        </Text>
                        <Text style={styles.text2}>
                            {"Your Exotic Veggie Platter is on the menu. Get excited!"}
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.text3}>
                        {"2 days ago"}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRow}>
                    <Image
                        source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                        resizeMode={"stretch"}
                        style={styles.image}
                    />
                    <TouchableOpacity style={styles.buttonColumn}>
                        <Text style={styles.text}>
                            {"Thursday's Feast Awaits!"}
                        </Text>
                        <Text style={styles.text2}>
                            {"Your Exotic Veggie Platter is on the menu. Get excited!"}
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.text3}>
                        {"2 days ago"}
                    </Text>
                </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRow}>
                    <Image
                        source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                        resizeMode={"stretch"}
                        style={styles.image}
                    />
                    <TouchableOpacity style={styles.buttonColumn}>
                        <Text style={styles.text}>
                            {"Thursday's Feast Awaits!"}
                        </Text>
                        <Text style={styles.text2}>
                            {"Your Exotic Veggie Platter is on the menu. Get excited!"}
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.text3}>
                        {"2 days ago"}
                    </Text>
                </TouchableOpacity><TouchableOpacity style={styles.buttonRow}>
                    <Image
                        source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                        resizeMode={"stretch"}
                        style={styles.image}
                    />
                    <TouchableOpacity style={styles.buttonColumn}>
                        <Text style={styles.text}>
                            {"Thursday's Feast Awaits!"}
                        </Text>
                        <Text style={styles.text2}>
                            {"Your Exotic Veggie Platter is on the menu. Get excited!"}
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.text3}>
                        {"2 days ago"}
                    </Text>
                </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRow}>
                    <Image
                        source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                        resizeMode={"stretch"}
                        style={styles.image}
                    />
                    <TouchableOpacity style={styles.buttonColumn}>
                        <Text style={styles.text}>
                            {"Thursday's Feast Awaits!"}
                        </Text>
                        <Text style={styles.text2}>
                            {"Your Exotic Veggie Platter is on the menu. Get excited!"}
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.text3}>
                        {"2 days ago"}
                    </Text>
                </TouchableOpacity>
                
                


            </ScrollView>
        </View>
    );

}

const styles = StyleSheet.create({
    buttonColumn: {
        width: 193,
        marginRight: 29,
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        paddingVertical: 12,
        
    },
    image: {
        borderRadius: 4,
        width: 32,
        height: 32,
        marginRight: 12,
    },
    text: {
        color: "#000000",
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 10,
    },
    text2: {
        color: "#7C7C7C",
        fontSize: 14,
        width: 193,
    },
    text3: {
        color: "#A0A0A0",
        fontSize: 12,
    },
    textnotf: {
        color: "#000000",
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: 120,
        marginTop: 15,
        marginBottom: 15,

    },
    

});