import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  useDimensions, useDeviceOrientation
} from '@react-native-community/hooks';
import WelcomeScreen from './app/src/views/screens/WelcomeScreen';
import SignInScreen from './app/src/views/screens/SignInScreen';
import SignUpScreen from './app/src/views/screens/SignUpScreen';
import ForgetPasswordScreen from './app/src/views/screens/ForgetPasswordScreen';
import ResetPasswordScreen from './app/src/views/screens/ResetPasswordScreen';
import CodeAuthentication from './app/src/views/screens/CodeAuthentication';
import Verification from './app/src/views/screens/Verification';
import TabBottom from './app/src/views/screens/TabBottom';
import ManagePayment from './app/src/views/screens/ManagePayment';
import EditProfile from './app/src/views/screens/EditProfile';
import Order from './app/src/views/screens/Order';
import FinalizeOrder from './app/src/views/screens/FinalizeOder';
import NotificationScreen from './app/src/views/screens/UploadDocument';
import UploadDocument from './app/src/views/screens/UploadDocument';
// import Home from './app/src/views/screens/TabBottom';

const Stack = createNativeStackNavigator();

const App = () => {
  console.log(useDimensions());
  const { landscape } = useDeviceOrientation();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen" screenOptions={{ header: () => null }} >
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="TabBottom" component={TabBottom} />
        <Stack.Screen name="CodeAuthentication" component={CodeAuthentication} />
        <Stack.Screen name="ManagePayment" component={ManagePayment} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="FinalizeOrder" component={FinalizeOrder} />
        <Stack.Screen name="UploadDocument" component={UploadDocument} />

      </Stack.Navigator>
    </NavigationContainer>

  );
};


export default App;

