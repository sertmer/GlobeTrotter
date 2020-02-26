import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { createNewTrip } from '../../apiCalls';

export const CreateTrip = ({ navigation, route }) => {
  const { handleTripsFetch } = route.params;

  let [origin, setOrigin] = useState('');
  let [name, setName] = useState('');

  const handleClick = () => {
    createNewTrip(name, origin)
      .then(returnedTripData => {
        handleTripsFetch();
        navigation.navigate('Add Destinations', {tripId: returnedTripData.data.createTrip.trip.id, handleTripsFetch})
      })
      .catch(error => {
        console.log(error)
      });
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps='handled'
    >
      <Text style={styles.label}>Name</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={name}
          placeholder='Trip Name'
          onChangeText={(text) => setName(text)}
        />
      </View>
      <Text style={styles.label}>Starting Location</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={origin}
          placeholder='City, Country'
          onChangeText={(text) => setOrigin(text)}
        />
      </View>
      <TouchableOpacity
        activeOpacity={.8}
        style={styles.addDestination}
        onPress={() => handleClick()}
      >
        <Text style={{ color: '#0D47A1', fontSize: 20, fontWeight: 'bold' }}>Add A Destination</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E88E5',
    height: '100%',
    alignItems: 'center',
    padding: 15
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 20,
    marginTop: 5,
    borderRadius: 5,
    height: 70
  },
  label: {
    color: '#fff',
    fontSize: 20
  },
  input: {
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    fontSize: 20,
    paddingHorizontal: 20
  },
  addDestination: {
    backgroundColor: '#2CCB70',
    width: '100%',
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  },
  submitDestination: {
    backgroundColor: '#FDD835',
    width: '100%',
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  }
})


export default CreateTrip;