// AppContainer.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MyTripsScreen from '../screens/MyTripsScreen';
import MyAvoisScreen from '../screens/MyAvoisScreen';
import ProfileScreen from '../screens/MyProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const AppContainer: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="MyTrips" component={MyTripsScreen} options={{ headerShown: false }} />
        <Tab.Screen name="MyAvois" component={MyAvoisScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;