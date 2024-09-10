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
import NotificationScreen from '../screens/NotificationScreen';
import OrderListScreen from '../screens/OrderListScreen';
import OrderDetailScreen from '../screens/OrderDetailScreen';
import SupportCustomerScreen from '../screens/SupportCustomerScreen';
import ListOderScreen from '../screens/ListOderScreen';
import OderSucsess from '../screens/OderSucsess';
import SupportChanelScreen from '../screens/SupportChanelScreen';
import FaqScreen from '../screens/FaqScreen';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="VerificationCode"
        screenOptions={{ headerShown: false }}  // Ẩn thanh tiêu đề ở đây
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="VerificationCode" component={VerificationCodeScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="ConfirmPass" component={ConfirmPassScreen} />
        <Stack.Screen name="DropDownPicker" component={DropDownPickerScreen} />
        <Stack.Screen name="OderProduct" component={OderProductScreen} />
        <Stack.Screen name="NotifycationCode" component={NotificationScreen} />
        <Stack.Screen name="OrderListCode" component={OrderListScreen} />
        <Stack.Screen name="OderDetailCode" component={OrderDetailScreen} />
        <Stack.Screen name="SupportCustomerScreenCode" component={SupportCustomerScreen} />
        <Stack.Screen name="SupportChanelScreenCode" component={SupportChanelScreen} />
        <Stack.Screen name="SupportFaqScreenCode" component={FaqScreen} />
        <Stack.Screen name="ListOder" component={ListOderScreen} />
        <Stack.Screen name="OderSucess" component={OderSucsess} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
