import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../../features/account/screen/LoginScreen';
import { AccountScreen } from '../../features/account/screen/AccountScreen';
import { RegisterScreen } from '../../features/account/screen/RegisterScreen';

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Main' component={AccountScreen} />
    <Stack.Screen name='Login' component={LoginScreen} />
    <Stack.Screen name='Register' component={RegisterScreen} />
  </Stack.Navigator>
);
