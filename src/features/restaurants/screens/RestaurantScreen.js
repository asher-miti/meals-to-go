import React from 'react';
import { Searchbar } from 'react-native-paper';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
} from 'react-native';
import RestaurantInfo from '../components/RestaurantInfo';

const RestaurantScreen = () => {
  return (
    <SafeAreaView style={styles.search}>
      <View style={styles.search}>
        <Searchbar />
      </View>
      <View style={styles.list}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RestaurantScreen;
