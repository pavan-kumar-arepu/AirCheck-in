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
        <Tab.Screen name="HomeTab">
          {() => (
            <Stack.Navigator>
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
            </Stack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="MyTripsTab">
          {() => (
            <Stack.Navigator>
              <Stack.Screen name="MyTripsScreen" component={MyTripsScreen} />
            </Stack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="MyAvoisTab">
          {() => (
            <Stack.Navigator>
              <Stack.Screen name="MyAvoisScreen" component={MyAvoisScreen} />
            </Stack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="ProfileTab">
          {() => (
            <Stack.Navigator>
              <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            </Stack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
