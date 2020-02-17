import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Trips from './Components/Trips/Trips';
import CreateTrip from './Components/CreateTrip/CreateTrip';

export const App = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Trips />
      <CreateTrip />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
