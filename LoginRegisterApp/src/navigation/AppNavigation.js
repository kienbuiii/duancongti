import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import VerificationCodeScreen from '../screens/VerificationCodeScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import ConfirmPassScreen from '../screens/ConfirmPassScreen';
import DropDownPickerScreen from '../screens/DropDownPickerScreen';
import OderProductScreen from '../screens/OderProductScreen';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="VerificationCode" component={VerificationCodeScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="ConfirmPass" component={ConfirmPassScreen} />
        <Stack.Screen name="DropDownPicker" component={DropDownPickerScreen} />
        <Stack.Screen name="OderProduct" component={OderProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;