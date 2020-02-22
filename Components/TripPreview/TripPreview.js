import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import arrow from '../../assets/right.svg';

export const TripPreview = ({ route }) => {
  const { name, startDate, endDate, originAbbrev, finalDestinationAbbrev, tripdestinationSet } = route.params;

  let displayDestinations = tripdestinationSet.map(destination => {
    return (
      <TouchableOpacity
        activeOpacity={.8}
        style={styles.destination}
        onPress={() => console.log('hi')}>
        <View>
          <Text style={styles.destinationName}>{destination.destination.location}</Text>
          <View style={styles.destinationDates}>
            <Text style={{color: '#fff'}}>{destination.startDate}</Text>
            <Text>-</Text>
            <Text style={{color: '#fff'}}>{destination.endDate}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  })

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.tripCard}>
        <View style={styles.tripOverview}>
          <View style={styles.cityContainer}>
            <Text style={{ fontSize: 40 }}>{originAbbrev}</Text>
            <Text>{startDate}</Text>
          </View>
          <View style={styles.arrowContainer}>
            <Image
              source={arrow}
              style={styles.arrow}
            />
          </View>
          <View style={styles.cityContainer}>
            <Text style={{ fontSize: 40 }}>{finalDestinationAbbrev}</Text>
            <Text>{endDate}</Text>
          </View>
        </View>
        <ScrollView style={styles.destinationsConatainer}>
          {
            tripdestinationSet.length ?
              displayDestinations :
              <Text>No Other Destinations</Text>
          }
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#1E88E5',
    height: '100%',
    paddingTop: 5,
    paddingBottom: 80,
    paddingHorizontal: 15,
  },
  tripOverview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    alignItems: 'center',
    marginBottom: 10
  },
  name: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15
  },
  tripCard: {
    backgroundColor: '#ffffff',
    width: '100%',
    borderRadius: 5,
    shadowColor: '#0D47A1',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: .9,
    shadowRadius: 10,
    padding: 10,
    height: '100%'
  },
  arrow: {
    width: 50,
    height: 50
  },
  arrowContainer: {
    width: 'auto'
  },
  destination: {
    backgroundColor: '#00C853',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    width: '100%',
    borderRadius: 5,
    shadowColor: '#A6ACAF',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: .9,
    shadowRadius: 8,
  },
  destinationsContainer: {
    height: '100%'
  },
  destinationName: {
    fontSize: 30,
    color: '#fff'
  },
  destinationDates: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    color: '#fff'
  }
})

export default TripPreview;