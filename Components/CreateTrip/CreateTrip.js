import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { postNewTrip } from '../../apiCalls';


export const CreateTrip = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
      </View>
      <Text style={styles.label}>Starting Location</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
      </View>
      <Text style={styles.label}>Final Location</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
      </View>
      <TouchableOpacity style={styles.addDestination}>
        <Text style={{color: '#fff', fontSize: 20}}>Add A Destination</Text>
      </TouchableOpacity>
    </View>
  )
}

{/* <TouchableOpacity onPress={() => navigation.navigate('Calendar')}>
  <Image
    style={{ height: 60, width: 60 }}
    source={{ uri: 'https://img.icons8.com/plasticine/200/000000/calendar.png' }}
  />
  <Text>how long with you stay?</Text>
</TouchableOpacity> */}

{/* <Text style={styles.label}>Destination</Text>
  <View style={styles.inputContainer}>
    <TextInput style={styles.input} />
  </View> */}


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
      fontSize: 20
    },
    addDestination: {
      backgroundColor: '#2CCB70',
      width: '100%',
      height: 50,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 15
    }
  })


export default CreateTrip;

// container: {
//   alignItems: 'center',
//   backgroundColor: '#96cdec',
//   borderRadius: 4,
//   borderWidth: 1.5,
//   borderColor: 'black',
//   flex: 1,
//   height: '100%',
//   justifyContent: 'space-around',
//   padding: 20,
//   width: '100%'
// },
// header: {
//   backgroundColor: '#96cdec',
//   borderBottomWidth: 1.5,
//   borderBottomColor: 'black',
//   fontSize: 30,
//   flexDirection: 'row',
//   justifyContent: 'space-between',
//   paddingBottom: 10,
//   width: '100%'
// },
// image: {
//   height: 36,
//   width: 36,
// },
// input: {
//   backgroundColor: '#EEF6F7',
//   borderRadius: 4,
//   borderWidth: 0.5,
//   borderColor: '#d6d7da',
//   height: 30,
//   paddingVertical: 0,
//   shadowColor: '#000',
//   shadowOffset: { width: 1, height: 2 },
//   shadowOpacity: 0.8,
//   shadowRadius: 4,
// },
// legContainer: {
//   alignItems: 'center',
//   backgroundColor: 'white',
//   borderRadius: 4,
//   borderWidth: 1.5,
//   borderColor: 'black',
//   justifyContent: 'center',
//   width: 180,
// },
// calendars: {
//   flexDirection: 'row',
//   justifyContent: 'center'
// },
// buttonLeg: {
//   alignItems: 'center',
//   backgroundColor: '#96CDEC',
//   borderRadius: 4,
//   borderWidth: .5,
//   borderColor: 'black',
//   height: 23,
//   justifyContent: 'center',
//   marginBottom: 4,
//   padding: 5,
//   width: 150,
// },
// buttonDestination: {
//   alignItems: 'center',
//   backgroundColor: '#BAE0BD',
//   borderRadius: 4,
//   borderWidth: .5,
//   borderColor: 'black',
//   height: 30,
//   justifyContent: 'center',
//   padding: 5,
// }