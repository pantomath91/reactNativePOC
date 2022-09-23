import {HomeScreen} from '@aph/homescreen';
import {LabTests} from '@aph/labtests';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Medicines} from 'medicine';
import React from 'react';

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
