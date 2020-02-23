import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export const TripPreview = ({ route, navigation }) => {
  const { name, originLat, originLong, startDate, endDate, originAbbrev, finalDestinationAbbrev, description, tripdestinationSet } = route.params;

  let displayDestinations = tripdestinationSet.map(destination => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Maps', destination, startDate, endDate, name )}>
        <View style={styles.abbrevStyling}>
          <Text style={styles.abbrevStyling}>{destination.destination.location}</Text>
          <View style={styles.destinationDates}>
            <Text>{destination.startDate}</Text>
            <Text>{destination.endDate}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  })

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.tripOverview}>
        <View style={styles.cityContainer}>
          <Text style={{ fontSize: 40 }}>{originAbbrev}</Text>
          <Text>{startDate}</Text>
        </View>
        <Text style={{ fontSize: 20 }}>to</Text>
        <View style={styles.cityContainer}>
          <Text style={{ fontSize: 40 }}>{finalDestinationAbbrev}</Text>
          <Text>{endDate}</Text>
        </View>
      </View>
      <View style={styles.description}>
        <Text>Notes: {description}</Text>
      </View>
      <View style={styles.destinationsContainer}>
        {
          tripdestinationSet.length ?
            displayDestinations :
            <Text>No Other Destinations</Text>
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    paddingBottom: 40,
    backgroundColor: '#c9e2ef',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  tripOverview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%'
  },
  name: {
    alignItems: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    margin: 'auto',
    marginBottom: 20
  },
  citiesContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  description: {
    margin: 'auto',
    justifyContent: 'center',
    fontSize: 10
  },
  dates: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  destinationDates: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  destinationContainer: {
    height: '100%',
    justifyContent: 'space-around'
  },
  abbrevStyling: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40
  }
})

export default TripPreview;
