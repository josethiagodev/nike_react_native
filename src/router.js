import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Details from './pages/Details';
import ListProducts from './pages/ListProducts';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen 
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen 
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />

        <Stack.Screen 
          name="ListProducts"
          component={ListProducts}
          options={{ headerShown: false }}
        />

        <Stack.Screen 
          name="Details"
          component={Details}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}