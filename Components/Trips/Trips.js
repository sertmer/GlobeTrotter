import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { getAllTrips } from '../../apiCalls';

const Trips = ({ navigation }) => {

  let [reformattedTrips, setReformattedTrips] = useState([]);

  const handleTripsFetch = () => {
    getAllTrips()
      .then(fetchedData => {
        reformatTripsData(fetchedData.data.allTrips);
      })
      .catch(error => {
        console.log(error)
      })
  }
  const findFinalDestination = (destinationSet) => {
    if (destinationSet.length) {
      let copiedData = [...destinationSet];
      copiedData.reverse();
      return copiedData[0].destination.abbrev
    } else {
      return '???'
    }
  }

  const findEndDate = (destinationSet) => {
    if (destinationSet.length) {
      let copiedData = [...destinationSet];
      copiedData.reverse();
      return copiedData[0].endDate
    } else {
      return '???'
    }
  }

  const findStartDate = (destinationSet) => {
    if (destinationSet.length) {
      let copiedData = [...destinationSet];
      return copiedData[0].startDate
    } else {
      return '???'
    }
  }

  const reformatTripsData = (fetchedData) => {
    let copiedTrips = [...fetchedData];
    copiedTrips.forEach(trip => {
      trip.finalDestinationAbbrev = findFinalDestination(trip.tripdestinationSet);
      trip.startDate = findStartDate(trip.tripdestinationSet);
      trip.endDate = findEndDate(trip.tripdestinationSet);
      trip.description = 'Placeholder text'
    })
    setReformattedTrips(copiedTrips)
  };

  useEffect(() => handleTripsFetch(), []);

  return (
    <View style={styles.trips}>
      {!reformattedTrips.length &&
        <View style={styles.noTripsContainer}>
          <Text style={styles.noTrips}>You need a vacation!</Text>
          <Text style={styles.noTrips}>Hit + to add a trip!</Text>
        </View>
      }

      <ScrollView style={{ width: '95%' }} showsVerticalScrollIndicator={false}>
        {reformattedTrips.map(item => {
          return (
            <View key={item.id}>
              <TouchableOpacity activeOpacity={.8} onPress={() => navigation.navigate('Trip Preview', {item, handleTripsFetch})}>
                <View style={styles.container}>
                  <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={styles.name}>{item.name}</Text>
                  </View>
                  <View style={styles.cities}>
                    <Text style={styles.origin}>{item.originAbbrev}</Text>
                    <Text style={styles.origin}>{item.finalDestinationAbbrev}</Text>
                  </View>
                  <View style={styles.cities}>
                    <Text style={styles.startDate}>{item.startDate}</Text>
                    <Text style={styles.endDate}>{item.endDate}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )
        })}
      </ScrollView>
      <TouchableOpacity activeOpacity={.9} style={styles.addTrip} onPress={() => navigation.navigate('Create Trip', {handleTripsFetch})}>
        <View style={styles.plusContainer}>
          <Image
            style={styles.image}
            source={{ uri: 'https://freeiconshop.com/wp-content/uploads/edd/plus-flat.png' }}
            accessibilityLabel='Add Trip'
          />
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  trips: {
    backgroundColor: '#1E88E5',
    flex: 1,
    height: 3000,
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    width: '100%',
    alignItems: 'center'
  },
  header: {
    borderBottomColor: 'black',
    fontSize: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 3,
    paddingBottom: 10,
    width: '100%'
  },
  image: {
    height: 80,
    shadowColor: '#0D47A1',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: .5,
    width: 80,
  },
  container: {
    backgroundColor: '#eff6f7',
    borderRadius: 5,
    marginTop: 20,
    padding: 10,
    shadowColor: '#0D47A1',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: .9,
    shadowRadius: 10
  },
  addTrip: {
    position: 'absolute',
    width: 10,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    right: 100,
    bottom: 50,
  },
  name: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 'auto',
    marginBottom: 5
  },
  cities: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  plusContainer: {
    padding: 100
  },
  noTrips: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  noTripsContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 200
  }
});

export default Trips;