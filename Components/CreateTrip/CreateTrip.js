import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export const CreateTrip = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Trip name:</Text>
        <TextInput style={styles.input}
          placeholder='e.g. Spring break'
        />
      </View>
      <View>
        <Text>Starting Location:</Text>
        <TextInput style={styles.input}
          placeholder='e.g. trip origin'
        />
      </View>
      <View>
        <Text>Destination:</Text>
        <TextInput style={styles.input}
          placeholder='e.g. trip destination'
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text>Add destination</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CreateTrip;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 300,
    justifyContent: 'space-around',
  },
  input: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    height: 30,
    paddingVertical: 0,
    textIndent: 5,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#96CDEC',
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#d6d7da',
    height: 30,
    justifyContent: 'center',
  }
})
