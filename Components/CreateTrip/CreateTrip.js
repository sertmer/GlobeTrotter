import React from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export const CreateTrip = ({ route }) => {
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
        <Text style={{color: '#96CDEC', marginRight: 1}}>
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



const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#96cdec',
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: 'black',
    flex: 1,
    height: '100%',
    justifyContent: 'space-around',
    padding: 20,
    width: '100%'
  },
  header: {
    backgroundColor: '#96cdec',
    borderBottomWidth: 1.5,
    borderBottomColor: 'black',
    fontSize: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    width: '100%'
  },
  image: {
    height: 36,
    width: 36,
  },
  input: {
    backgroundColor: '#EEF6F7',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    height: 30,
    paddingVertical: 0,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  legContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
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
    backgroundColor: '#96CDEC',
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
    backgroundColor: '#BAE0BD',
    borderRadius: 4,
    borderWidth: .5,
    borderColor: 'black',
    height: 30,
    justifyContent: 'center',
    padding: 5,
  }
})


export default CreateTrip;
