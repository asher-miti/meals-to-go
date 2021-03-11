import React from 'react';
import { View, Text } from 'react-native';

const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = [
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80',
    ],
    address = '100 random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemp,
  } = restaurant;

  return (
    <View>
      <Text>info</Text>
    </View>
  );
};

export default RestaurantInfo;
