import * as React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Sử dụng bộ icon Ionicons

const SimpleDropdownWithIcon = () => {
  const [isVisible, setIsVisible] = useState(false); // Trạng thái ẩn/hiện dropdown

  const toggleDropdown = () => {
    setIsVisible(!isVisible); // Thay đổi trạng thái khi người dùng nhấn
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.headerContainer}>
        <Text style={styles.header}>Đơn Hàng & Vận Chuyển</Text>
        {/* Hiển thị icon mũi tên lên hoặc xuống dựa trên trạng thái */}
        <Image
          source={isVisible ? require('../../assets/whatsApp.png') : require('../../assets/headphones.png')}
          style={styles.icon} // Định dạng kích thước cho ảnh
        />
      </TouchableOpacity>

      {/* Hiển thị nội dung dropdown khi trạng thái isVisible là true */}
      {isVisible && (
        <View style={styles.dropdown}>
          <Text style={styles.item}>Đơn hàng</Text>
          <Text style={styles.item}>Đánh giá & Bình luận</Text>
          <Text style={styles.item}>Thông tin vận chuyển khác</Text>
          <Text style={styles.item}>Phương thức vận chuyển</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row', // Sắp xếp theo hàng ngang
    justifyContent: 'space-between', // Căn đều khoảng cách giữa Text và Icon
    alignItems: 'center',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dropdown: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
  },
  item: {
    fontSize: 16,
    paddingVertical: 5,
  },
  icon: {
    width: 20, // Đặt kích thước icon
    height: 20,
  },
});

export default SimpleDropdownWithIcon;
