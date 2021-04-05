import React from 'react';
import { SafeArea } from '../../components/utility/safearea';
import { RestaurantsNavigator } from './RestaurantsNavigator';
import { Ionicons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MapScreen } from '../../features/map/screens/MapScreen';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: 'md-restaurant',
  Map: 'md-map',
  Settings: 'md-settings',
};

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={createScreenOptions}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}>
    <Tab.Screen name='Restaurants' component={RestaurantsNavigator} />
    <Tab.Screen name='Map' component={MapScreen} />
    <Tab.Screen name='Settings' component={Settings} />
  </Tab.Navigator>
);
