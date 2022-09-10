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

// function Feed() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Feed!</Text>
//     </View>
//   );
// }

// function Profile() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Profile!</Text>
//     </View>
//   );
// }

// function Notifications() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Notifications!</Text>
//     </View>
//   );
// }
