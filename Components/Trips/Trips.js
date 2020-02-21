import React from 'react';
import plus from '../../assets/plus.svg'

import { Text, View, FlatList, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import TripPreview from '../TripPreview/TripPreview';

import { globalStyles } from '../../styles/global';

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

const Trips = ({ navigation }) => {
  return (
    <View style={styles.trips}>
      <ScrollView>
        {mockPreviews.map(item => {
          return (
            <View key={item.id}>
              <TouchableOpacity activeOpacity={.8} onPress={() => navigation.navigate('Trip Preview', item)}>
                <View style={styles.container}>
                  <Text style={styles.name}>{item.name}</Text>
                  <View style={styles.cities}>
                    <Text style={styles.origin}>{item.originAbbrev}</Text>
                    <Text style={styles.destination}>{item.finalDestinationAbbrev}</Text>
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
      <TouchableOpacity activeOpacity={.9} style={styles.addTrip} onPress={() => navigation.navigate('Create Trip')}>
        <View style={styles.plusContainer}>
          <Image
            style={styles.image}
            source={plus}
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
    width: '100%'
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
  }
});

export default Trips;
