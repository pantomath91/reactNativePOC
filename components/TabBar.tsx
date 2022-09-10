import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from './HomeScreen';
import LabTests from './LabTests';
import Medicines from './Medicine';

const Tab = createBottomTabNavigator();

export const TabBar = () => {
  return (
    <Tab.Navigator
      // initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'Home',
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="LabTests"
        options={{
          tabBarLabel: 'LabTests',
        }}
        component={LabTests}
      />
      <Tab.Screen
        name="Medicine"
        options={{
          tabBarLabel: 'Medicine',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="home" color={color} size={size} />
          // ),
        }}
        component={Medicines}
      />
    </Tab.Navigator>
  );
};
