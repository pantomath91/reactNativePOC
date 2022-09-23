import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={style.homeScreen}>
      <Text>HomeScreen</Text>
    </View>
  );
};

const style = StyleSheet.create({
  homeScreen: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default HomeScreen;
