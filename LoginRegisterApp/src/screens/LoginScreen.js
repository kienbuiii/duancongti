import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import DropDownPicker from 'react-native-dropdown-picker';
export default function LoginScreen() {
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(i18n.language);
  const [items, setItems] = useState([
    { label: 'English', value: 'en' },
    { label: 'Vietnamese', value: 'vi' }
  ]);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setValue(lang);
  };

  return (
    <View style={styles.container}>
		 <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onChangeValue={handleLanguageChange}
        containerStyle={styles.dropdownContainer}
        style={styles.dropdown}
        dropDownStyle={styles.dropdown}
      />
      <Image source={require('../../assets/Logo.png')} style={styles.logo} />
      <Text style={styles.textdangnhap}>{t('login')}</Text>
      <Text style={styles.textID}>{t('ID')}</Text>
      <TextInput style={styles.box} placeholder="" />
      <Text style={styles.textID}>{t('password')}</Text>
      <TextInput style={styles.box} placeholder="" secureTextEntry />
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.textqmk}>{t('forgotPassword')}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DropDownPicker')}>
        <Text style={styles.text}>{t('login')}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.textdktk}>{t('register')}</Text>
      </TouchableOpacity>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  logo: {
    width: 285,
    height: 70,
    marginTop: 67,
    marginBottom: 78,
    marginHorizontal: 67,
    alignSelf: 'center',
  },
  textdangnhap: {
    color: "#000C7E",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    marginLeft: 69,
  },
  box: {
    height: 44,
    backgroundColor: "#FFFFFF",
    borderColor: "#8A8A8A",
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 20,
    marginHorizontal: 16,
  },
  textID: {
    color: "#262626",
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 17,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#182EF3",
    borderRadius: 20,
    paddingVertical: 17,
    marginBottom: 24,
    marginHorizontal: 43,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  textqmk: {
    color: "#182EF3",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 44,
    marginLeft: 20,
  },
  textdktk: {
    color: "#000000",
    fontSize: 14,
    marginBottom: 268,
    marginLeft: 69,
  },
  dropdownContainer: {
    height: 50,
    width: '20%',
    marginLeft: "80%",
  },
  dropdown: {
    backgroundColor: '#fafafa',
  },
});
