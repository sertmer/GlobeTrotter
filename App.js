import React from 'react';


import Trips from './Components/Trips/Trips';
import CreateTrip from './Components/CreateTrip/CreateTrip';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TripPreview from './Components/TripPreview/TripPreview';
import DatePicker from './Components/DatePicker/DatePicker';
import Maps from './Components/Maps/Maps';
import AddDestinations from './Components/AddDestinations/AddDestinations'
import LandingPage from './Components/LandingPage/LandingPage'

export const App = ({ navigation }) => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Globe Trotter'
        screenOptions={{ gestureEnabled: false }}
        headerMode={'float'}
        mode={'card'}
      >
        <Stack.Screen
          name='Globe Trotter'
          component={LandingPage}
          options={{title: 'Welcome!'}}
        />
        <Stack.Screen
          name='Trips'
          component={Trips}
          options={{ title: 'Trips' }}
        />
        <Stack.Screen
          name='Trip Preview'
          component={TripPreview}
        />
        <Stack.Screen
          name='Create Trip'
          component={CreateTrip}
          options={{title: 'Add A New Trip'}}
        />
        <Stack.Screen
          name='Calendar'
          component={DatePicker}
        />
        <Stack.Screen
          name='Maps'
          component={Maps}
        />
        <Stack.Screen
          name='Add Destinations'
          component={AddDestinations}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;