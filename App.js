import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Trips from './Components/Trips/Trips';
import CreateTrip from './Components/CreateTrip/CreateTrip';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TripPreview from './Components/TripPreview/TripPreview';
import { getAllTrips } from './apiCalls';

export const App = ({ navigation }) => {

  let [allTrips, setAllTrips] = useState([]);

  const handleTripsFetch = async () => {
    await getAllTrips()
      .then(data => {
        setAllTrips(data)
      })
      .catch(error => {
        return `error: ${error}`
      })
  }

  useEffect(() => handleTripsFetch(), []);

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
        <Stack.Screen
          name='Create Trip'
          component={CreateTrip}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#c9e2ef',
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
