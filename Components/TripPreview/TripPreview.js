import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const TripPreview = ({ route }) => {
  const { name, startDate, endDate, originAbbrev, finalDestinationAbbrev, description, destinations } = route.params;

  let displayDestinations = destinations.map(destination => {
    return (
      <View styles={styles.destination}>
        <Text style={{ fontSize: 40 }}>{destination.location}</Text>
        <Text>{destination.startDate}</Text>
        <Text>{destination.endDate}</Text>
      </View>
    )
  })

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.description}>
        <Text>Notes: {description}</Text>
      </View>
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
      <View styles={styles.destinationsContainer}>
        {
          destinations.length ?
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
    justifyContent: 'flex-start'
  },
  tripOverview: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
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
  destination: {
    alignItems: 'center'
  }
})

export default TripPreview;
