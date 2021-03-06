import PropTypes from "prop-types";
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { deleteTrip, getActivities } from '../../apiCalls';

export const TripPreview = ({ route, navigation }) => {
  const {name, id, startDate, endDate, originAbbrev, finalDestinationAbbrev, tripdestinationSet } = route.params.item;
  const { handleTripsFetch } = route.params;

  const handleClick = () => {
    navigation.navigate('Add Destinations', {tripId: id, handleTripsFetch})
  };

  const handleDelete = () => {
    deleteTrip(id);
    handleTripsFetch();
    navigation.navigate('Trips');
  };

  const handleActivities = (dest) => {
    getActivities(dest.destination.lat, dest.destination.long)
      .then(data => {
        let formattedMarkers = data.activities.map(act => {
          return {
            title: act.name,
            description: act.category,
            address: act.address,
            image: act.image,
            rating: act.rating,
            coordinates: {
              latitude: parseFloat(act.lat),
              longitude: parseFloat(act.long)
            }
          }
        })
      navigation.navigate('Maps', {dest, formattedMarkers, endDate, handleTripsFetch})
    })
  }

  let displayDestinations = tripdestinationSet.map((destination, index) => {

    return (
     <TouchableOpacity onPress={() => handleActivities(destination)}
        activeOpacity={.8}
        key={index}
        style={styles.destination}
        >
        <View style={styles.destinationText}>
          <Text style={styles.destinationName}>{destination.destination.location}</Text>
          <View style={styles.destinationDates}>
            <Text style={{color: '#fff'}}>{destination.startDate}</Text>
            <Text style={{color: '#fff'}}>-</Text>
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
            <Text>-</Text>
          </View>
          <View style={styles.cityContainer}>
            <Text style={{ fontSize: 40 }}>{finalDestinationAbbrev}</Text>
            <Text>{endDate}</Text>
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {
            tripdestinationSet.length ?
              displayDestinations :
              <Text>No Other Destinations</Text>
          }
          <TouchableOpacity
            activeOpacity={.8}
            style={styles.addDestination}
            onPress={() => handleClick()}
          >
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Add A Destination</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={.8}
            style={styles.deleteDestination}
            onPress={() => handleDelete()}
          >
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Delete Trip</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  )
}

TripPreview.propTypes = {
  navigation: PropTypes.any,
  route: PropTypes.any
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
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: .5,
  },
  addDestination: {
    alignItems: 'center',
    backgroundColor: '#1F87E5',
    borderRadius: 5,
    justifyContent: 'center',
    marginVertical: 10,
    padding: 10,
    width: '65%',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: .5,
  },
  deleteDestination: {
    alignItems: 'center',
    backgroundColor: '#FF5733',
    borderRadius: 5,
    justifyContent: 'center',
    marginVertical: 10,
    padding: 10,
    width: '65%',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: .5,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  destinationName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  destinationDates: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    color: '#fff'
  },
  destinationText: {
    alignItems: 'center'
  }
})

export default TripPreview;