import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export const CreateTrip = () => {
  return (
    <View style={styles.container}>
      <Text>Trip name:</Text>
      <TextInput style={styles.input}
        placeholder='e.g. Spring break'
      />
      <Text>Starting Location:</Text>
      <TextInput style={styles.input}
        placeholder='e.g. trip origin'
      />
      <Text>Destination:</Text>
      <TextInput style={styles.input}
        placeholder='e.g. trip destination'
      />
      <TouchableOpacity>
        <Text>Add destination</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CreateTrip;

const styles = StyleSheet.create({
  container: {

  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ddd',
    paddingVertical: 0,
    
  }
})