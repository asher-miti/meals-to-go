import React from 'react';
import styled from 'styled-components/native';
import { CompactRestaurantInfo } from '../../../components/restaurant/CompactRestaurantInfo';

export const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfo restaurant={restaurant} />
);
