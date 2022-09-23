import {default as React} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const LabTests = () => {
  return (
    <View style={style.homeScreen}>
      <Text>LabTests</Text>
    </View>
  );
};

export default LabTests;

const style = StyleSheet.create({
  homeScreen: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
