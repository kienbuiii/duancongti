import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import VerificationCodeScreen from './src/screens/VerificationCodeScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import OrderListScreen from './src/screens/OrderListScreen';
import OrderDetailScreen from './src/screens/OrderDetailScreen';
import SupportCustomerScreen from './src/screens/SupportCustomerScreen';


const Stack = createStackNavigator();

export default function App() {
import AppNavigation from './src/navigation/AppNavigation'; 

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SupportCustomerScreenCode">
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="VerificationCode" component={VerificationCodeScreen} />
        <Stack.Screen name="NotifycationCode" component={NotificationScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="OrderListCode" component={OrderListScreen} />
        <Stack.Screen name="OderDetailCode" component={OrderDetailScreen} />
        <Stack.Screen name="SupportCustomerScreenCode" component={SupportCustomerScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

    <AppNavigation />
  );
};

export default App;