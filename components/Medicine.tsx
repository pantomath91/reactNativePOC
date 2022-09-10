import {default as React} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Medicines = () => {
  return (
    <View style={style.homeScreen}>
      <Text>Medicines</Text>
    </View>
  );
};

export default Medicines;

const style = StyleSheet.create({
  homeScreen: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
