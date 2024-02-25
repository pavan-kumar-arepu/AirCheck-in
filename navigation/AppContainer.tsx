// AppContainer.tsx
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
        <Tab.Screen name="Home">
          {() => (
            <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="MyTrips">
          {() => (
            <Stack.Navigator>
              <Stack.Screen name="MyTrips" component={MyTripsScreen} />
            </Stack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="MyAvois">
          {() => (
            <Stack.Navigator>
              <Stack.Screen name="MyAvois" component={MyAvoisScreen} />
            </Stack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Profile">
          {() => (
            <Stack.Navigator>
              <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
