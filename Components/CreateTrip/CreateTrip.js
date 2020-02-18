import React from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export const CreateTrip = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={{uri: 'https://img.icons8.com/officel/40/000000/globe.png'}}
        />
        <Text style={{fontSize: 20, marginLeft: 33}}>
          New Trip
        </Text>
        <Text style={{color: 'white', marginRight: 1}}>
          placehold
        </Text>
      </View>
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
      <View style={styles.legContainer}>
        <View style={styles.calendars}>
          <View style={{textAlign: 'center'}}>
            <Text>Start:</Text>
            <Image
              style={{height: 60, width: 60}}
              source={{uri: 'https://img.icons8.com/plasticine/200/000000/calendar.png'}}
            />
          </View>
          <View style={{textAlign: 'center'}}>
            <Text>End:</Text>
            <Image
              style={{height: 60, width: 60}}
              source={{uri: 'https://img.icons8.com/plasticine/200/000000/calendar.png'}}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.buttonLeg}>
          <Text>Add Trip Leg</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.buttonDestination}>
        <Text>Add destination</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CreateTrip;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: 'black',
    height: 500,
    justifyContent: 'space-around',
    width: 220,
  },
  header: {
    borderBottomWidth: 1.5,
    borderBottomColor: 'black',
    fontSize: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 3,
    paddingBottom: 10,
    shadowColor: 'white',
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  image: {
    height: 36,
    width: 36,
  },
  input: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    height: 30,
    paddingVertical: 0,
    textIndent: 5,
  },
  legContainer: {
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: 'black',
    justifyContent: 'center',
    width: 180,
  },
  calendars: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonLeg: {
    alignItems: 'center',
    backgroundColor: '#BAE0BD',
    borderRadius: 4,
    borderWidth: .5,
    borderColor: 'black',
    height: 23,
    justifyContent: 'center',
    marginBottom: 4,
    padding: 5,
    width: 150,
  },
  buttonDestination: {
    alignItems: 'center',
    backgroundColor: '#96CDEC',
    borderRadius: 4,
    borderWidth: .5,
    borderColor: 'black',
    height: 30,
    justifyContent: 'center',
    padding: 5,
  }
})
