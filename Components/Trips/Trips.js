import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import TripPreview from '../TripPreview/TripPreview';
import { globalStyles } from '../../styles/global';
import { getAllTrips } from '../../apiCalls';


const mockPreviews = [
  {
    id: '1',
    name: 'Spring break',
    startDate: '03-05-2020',
    endDate: '04-05-2020',
    origin: 'denver, co, usa',
    finalDestination: 'paris, france',
    originAbbrev: 'DEN',
    finalDestinationAbbrev: 'PAR',
    description: 'Spring Break Lorem Ipsum something de lor',
    destinations: [
      {
        location: 'New York, NY',
        startDate: '03-02-10',
        endDate: '05-05-50'
      },
      {
        location: 'pittsburgh, PA ',
        startDate: '06-02-10',
        endDate: '07-05-50'
      }
    ]
  },
  {
    id: '2',
    name: 'Summer Roadtrip',
    startDate: '06-05-2020',
    endDate: '07-05-2020',
    origin: 'denver, co, usa',
    finalDestination: 'Barcelona, spain',
    originAbbrev: 'DEN',
    finalDestinationAbbrev: 'BRC',
    description: 'Summer Roadtrip Lorem Ipsum something de lor',
    destinations: [
      {
        location: 'New York, NY',
        startDate: '03-02-10',
        endDate: '05-05-50'
      },
      {
        location: 'pittsburgh, PA ',
        startDate: '06-02-10',
        endDate: '07-05-50'
      }
    ]
  },
  {
    id: '3',
    name: 'Winter Trip',
    startDate: '11-05-2020',
    endDate: '12-05-2020',
    origin: 'denver, co, usa',
    finalDestination: 'Tokyo, Japan',
    originAbbrev: 'DEN',
    finalDestinationAbbrev: 'TOK',
    description: ' Winter Lorem Ipsum something de lor',
    destinations: [
      {
        location: 'New York, NY',
        startDate: '03-02-10',
        endDate: '05-05-50'
      },
      {
        location: 'pittsburgh, PA ',
        startDate: '06-02-10',
        endDate: '07-05-50'
      }
    ]
  },
  {
    id: '4',
    name: 'Winter Trip',
    startDate: '11-05-2020',
    endDate: '12-05-2020',
    origin: 'denver, co, usa',
    finalDestination: 'Tokyo, Japan',
    originAbbrev: 'DEN',
    finalDestinationAbbrev: 'TOK',
    description: 'Lorem Ipsum something de lor',
    destinations: [
      {
        location: 'New York, NY',
        startDate: '03-02-10',
        endDate: '05-05-50'
      },
      {
        location: 'pittsburgh, PA ',
        startDate: '06-02-10',
        endDate: '07-05-50'
      }
    ]
  },
  {
    id: '5',
    name: 'Winter Trip',
    startDate: '11-05-2020',
    endDate: '12-05-2020',
    origin: 'denver, co, usa',
    finalDestination: 'Tokyo, Japan',
    originAbbrev: 'DEN',
    finalDestinationAbbrev: 'TOK',
    description: 'Lorem Ipsum something de lor',
    destinations: [
      {
        location: 'New York, NY',
        startDate: '03-02-10',
        endDate: '05-05-50'
      },
      {
        location: 'pittsburgh, PA ',
        startDate: '06-02-10',
        endDate: '07-05-50'
      }
    ]
  },
  {
    id: '6',
    name: 'Winter Trip',
    startDate: '11-05-2020',
    endDate: '12-05-2020',
    origin: 'denver, co, usa',
    finalDestination: 'Tokyo, Japan',
    originAbbrev: 'DEN',
    finalDestinationAbbrev: 'TOK',
    description: 'Lorem Ipsum something de lor',
    destinations: []
  },
  {
    id: '7',
    name: 'Winter Trip',
    startDate: '11-05-2020',
    endDate: '12-05-2020',
    origin: 'denver, co, usa',
    finalDestination: 'Tokyo, Japan',
    originAbbrev: 'DEN',
    finalDestinationAbbrev: 'TOK',
    description: 'Lorem Ipsum something de lor',
    destinations: []
  },
  {
    id: '8',
    name: 'Winter Trip',
    startDate: '11-05-2020',
    endDate: '12-05-2020',
    origin: 'denver, co, usa',
    finalDestination: 'Tokyo, Japan',
    originAbbrev: 'DEN',
    finalDestinationAbbrev: 'TOK',
    description: 'Lorem Ipsum something de lor',
    destinations: []
  },
  {
    id: '9',
    name: 'Winter Trip',
    startDate: '11-05-2020',
    endDate: '12-05-2020',
    origin: 'denver, co, usa',
    finalDestination: 'Tokyo, Japan',
    originAbbrev: 'DEN',
    finalDestinationAbbrev: 'TOK',
    description: 'Lorem Ipsum something de lor',
    destinations: []
  },
  {
    id: '10',
    name: 'Winter Trip',
    startDate: '11-05-2025',
    endDate: '12-05-2025',
    origin: 'denver, co, usa',
    finalDestination: 'Tokyo, Japan',
    originAbbrev: 'DEN',
    finalDestinationAbbrev: 'TOK',
    description: 'Lorem Ipsum something de lor',
    destinations: []
  }
];

const Trips = ({navigation}) => {

  let [reformattedTrips, setReformattedTrips] = useState([]);

  const handleTripsFetch = () => {
    getAllTrips()
      .then(fetchedData => {
        console.log(fetchedData);
        reformatTripsData(fetchedData.data.allTrips);
      })
      .catch(error => {
        console.log(error)
      })
  }

  const findFinalDestination = (destinationSet) => {
    let copiedData = [...destinationSet];
    copiedData.reverse();
    console.log(copiedData[0].destination.abbrev);
    return copiedData[0].destination.abbrev
  }

  const findEndDate = (destinationSet) => {
    let copiedData = [...destinationSet];
    copiedData.reverse();
    console.log(copiedData[0].endDate);
    return copiedData[0].endDate
  }

  const findStartDate = (destinationSet) => {
    let copiedData = [...destinationSet];
    console.log(copiedData[0].startDate);
    return copiedData[0].startDate
  }

  const reformatTripsData = (fetchedData) => {
    let copiedTrips = [...fetchedData];
    console.log(copiedTrips);
      copiedTrips.forEach(trip => {
        trip.finalDestinationAbbrev = findFinalDestination(trip.tripdestinationSet);
        trip.startDate = findStartDate(trip.tripdestinationSet);
        trip.endDate = findEndDate(trip.tripdestinationSet);
        trip.description = 'Placeholder text'
      })
      console.log(copiedTrips);
      setReformattedTrips(copiedTrips)
  };

  useEffect(() => handleTripsFetch(), []);

  // const generateDestinations = (tripObject) => {
  //   tripObject.tripdestinationSet.map(place => {
  //     return (
  //       <View style={styles.cities}>
  //         <Text style={styles.destination}>{place.destination.abbrev}</Text>
  //       </View>
  //       <View style={styles.cities}>
  //         <Text style={styles.startDate}>{place.destination}</Text>
  //         <Text style={styles.endDate}></Text>
  //       </View>
  //     )
  //   })
  // }


  return (
    <View style={styles.trips}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={{uri: 'https://img.icons8.com/officel/40/000000/globe.png'}}
        />
        <Text style={{fontSize: 30, marginLeft: 33}}>
          Trips
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Create Trip')}>
          <View style={styles.addTrip}>
            <Text style={{fontSize: 12}}>Add Trip: </Text>
            <Image
              style={styles.image}
              source={{uri: 'https://img.icons8.com/office/80/000000/plus.png'}}
            />
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {reformattedTrips.map(item => {
          return (
            <View key={item.id}>
              <TouchableOpacity onPress={() => navigation.navigate('Trip Preview', item)}>
                <View style={styles.container}>
                  <Text style={styles.name}>{item.name}</Text>
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
    </View>
  )
}

const styles = StyleSheet.create({
  trips: {
    backgroundColor: '#96CDEC',
    borderWidth: 1.5,
    borderColor: 'black',
    flex: 1,
    height: 3000,
    justifyContent: 'center',
    padding: 20,
    width: '100%'
  },
  header: {
    borderBottomWidth: 3.5,
    borderBottomColor: 'black',
    fontSize: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 3,
    paddingBottom: 10,
    width: '100%'
  },
  image: {
    height: 36,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    width: 36,
  },
  container: {
    backgroundColor: '#eff6f7',
    borderColor: '#d6d7da',
    borderWidth: 3,
    borderRadius: 5,
    marginTop: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  addTrip: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  name: {
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 'auto',
    marginBottom: 5
  },
  cities: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default Trips;
