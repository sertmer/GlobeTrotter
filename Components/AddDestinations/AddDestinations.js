import PropTypes from "prop-types";
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import { createNewDestination } from '../../apiCalls';
import DatePicker from '../DatePicker/DatePicker';

export const AddDestinations = ({ navigation, route }) => {
  const { tripId, handleTripsFetch } = route.params;
  let [destinationLocation, setDestinationLocation] = useState('');
  let [destinationStartDate, setDestinationStartDate] = useState('');
  let [destinationEndDate, setDestinationEndDate] = useState('');
  let [error, setError] = useState('');
  let [dateError, setDateError] = useState('');

  const handleDestinationSubmit = () => {
    if (destinationLocation !== '' && destinationStartDate !== ''  && destinationEndDate !== '') {
      createNewDestination(tripId, destinationLocation, destinationStartDate, destinationEndDate)
        .then(returnedTripData => {
          handleDateError(returnedTripData)
        })
        .catch(error => {
          console.log('date error', error)
        });
      resetInputs();
    } else {
      resetInputs();
      setError('All fields required');
      setDateError('')
    }
  }

  const handleDateError = (returnedTripData) => {
    if (returnedTripData.data.createDestination === null) {
      setDateError(returnedTripData.errors[0].message)
      setError('')
    } else {
      navigation.navigate('Trips')
      handleTripsFetch()
    }
  }

  const handleChange = (text) => {
    setError('');
    setDateError('');
    setDestinationLocation(text)
  }

  const resetInputs = () => {
    setDestinationLocation('');
    setDestinationStartDate('');
    setDestinationEndDate('');
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps='handled'
    >
      {error === '' && dateError === '' &&
        <Text style={styles.label}>
          Destination
        </Text>
      }
      {error !== '' &&
        <Text style={styles.error}>
          {error}
        </Text>
      }
      {dateError !== '' &&
        <Text style={styles.error2}>
          {dateError}
        </Text>
      }
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          name='destination'
          value={destinationLocation}
          placeholder='City, Country'
          onChangeText={(text) => handleChange(text)}
        />
      </View>
      <DatePicker
        setDestinationStartDate={setDestinationStartDate}
        setDestinationEndDate={setDestinationEndDate}
      />
      <TouchableOpacity
        activeOpacity={.8}
        style={styles.button}
        onPress={() => handleDestinationSubmit()}
      >
        <Text style={{ color: '#0D47A1', fontSize: 20, fontWeight: 'bold' }}>Add to Trip</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

AddDestinations.propTypes = {
  navigation: PropTypes.any,
  route: PropTypes.any
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E88E5',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15
  },
  label: {
    color: '#fff',
    fontSize: 20
  },
  error: {
    color: '#f7003d',
    fontSize: 25,
    fontWeight: 'bold'
  },
  error2: {
    color: '#f7003d',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  input: {
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    fontSize: 20,
    paddingHorizontal: 20
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
  button: {
    backgroundColor: '#2CCB70',
    width: '100%',
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  }
})
