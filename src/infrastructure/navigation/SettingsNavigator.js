import React, { useEffect } from 'react';
import { SettingsScreen } from '../../features/settings/screens/SettingsScreen';

import { FavouritesScreen } from '../../features/settings/screens/FavouritesScreen';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      headerMode='screen'
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name='Settings'
        component={SettingsScreen}
      />
      <SettingsStack.Screen name='Favourites' component={FavouritesScreen} />
    </SettingsStack.Navigator>
  );
};
