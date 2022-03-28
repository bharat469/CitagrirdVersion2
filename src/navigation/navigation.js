import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoard from '../screens/onBoard/onBoard';
import LoginScreen from '../screens/Login/LoginScreen';
import Register from '../screens/register/Register';
import Location from '../screens/Location/location';
import ForgetPassword from '../screens/forgetPassword/forgetPassword';
import ForgetOtp from '../screens/forgetPassword/forgetOtp';
import ChangePassword from '../screens/forgetPassword/changePassword';
import PinScreen from '../screens/pinScreen/pinScreen';
import ForgetPin from '../screens/pinScreen/forgetPin';
import PinOtp from '../screens/pinScreen/pinOtp';
import CreatePin from '../screens/pinScreen/createPin';

const homeStack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <homeStack.Navigator>
        <homeStack.Screen
          name="OnboardScreen"
          component={OnBoard}
          options={{headerShown: false}}
        />
        <homeStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <homeStack.Screen name="RegisterScreen" component={Register} />
        <homeStack.Screen
          name="LocationScreen"
          component={Location}
          options={{headerShown: false}}
        />
        <homeStack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{headerShown: false}}
        />
        <homeStack.Screen
          name="ForgetOtp"
          component={ForgetOtp}
          options={{headerShown: false}}
        />
        <homeStack.Screen
          name="changePassword"
          component={ChangePassword}
          options={{headerShown: false}}
        />
        <homeStack.Screen
          name="PinScreen"
          component={PinScreen}
          options={{headerShown: false}}
        />
        <homeStack.Screen
          name="PinForget"
          component={ForgetPin}
          options={{headerShown: false}}
        />
        <homeStack.Screen
          name="PinOtp"
          component={PinOtp}
          options={{headerShown: false}}
        />
        <homeStack.Screen
          name="createPin"
          component={CreatePin}
          options={{headerShown: false}}
        />
      </homeStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
