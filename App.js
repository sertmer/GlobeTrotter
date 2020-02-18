import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Trips from './Components/Trips/Trips';
import CreateTrip from './Components/CreateTrip/CreateTrip';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TripPreview from './Components/TripPreview/TripPreview';

export const App = ({ navigation }) => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Trips'
        screenOptions={{ gestureEnabled: false }}
      >
        <Stack.Screen
          name='Trips'
          component={Trips}
          options={{ title: 'Globe Trotter' }}
        />
        <Stack.Screen
          name='Trip Preview'
          component={TripPreview}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;