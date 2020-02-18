import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Trips from './Components/Trips/Trips';
import CreateTrip from './Components/CreateTrip/CreateTrip';

export const App = () => {
  return (
    <View style={styles.container}>
      <Trips />
      <CreateTrip />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default App;
