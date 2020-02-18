import React from 'react';
import { Text, Image, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
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
    description: 'Spring Break Lorem Ipsum something de lor'
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
    description: 'Summer Roadtrip Lorem Ipsum something de lor'
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
    description: ' Winter Lorem Ipsum something de lor'
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
    description: 'Lorem Ipsum something de lor'
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
    description: 'Lorem Ipsum something de lor'
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
    description: 'Lorem Ipsum something de lor'
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
    description: 'Lorem Ipsum something de lor'
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
    description: 'Lorem Ipsum something de lor'
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
    description: 'Lorem Ipsum something de lor'
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
    description: 'Lorem Ipsum something de lor'
  }
];

const Trips = ({navigation}) => {
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
        <Text style={{color: '#96CDEC', marginRight: 1}}>
          placehold
        </Text>
      </View>
      <ScrollView>
        {mockPreviews.map(item => {
          return (
            <View key={item.id}>
              <TouchableOpacity onPress={() => navigation.navigate('Trip Preview', item)}>
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
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
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
