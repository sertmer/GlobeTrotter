import React from 'react';
import { Text, Image, View, ScrollView, StyleSheet } from 'react-native';
import TripPreview from '../TripPreview/TripPreview';

const mockPreviews = [
  {
    id: 1,
    name: 'Spring break',
    startDate: '03-05-2020',
    endDate: '04-05-2020',
    origin: 'denver, co, usa',
    finalDestination: 'paris, france',
    originAbbrev: 'DEN',
    finalDestinationAbbrev: 'PAR'
  },
  {
    id: 2,
    name: 'Summer Roadtrip',
    startDate: '06-05-2020',
    endDate: '07-05-2020',
    origin: 'denver, co, usa',
    finalDestination: 'Barcelona, spain',
    originAbbrev: 'DEN',
    finalDestinationAbbrev: 'BRC'
  },
  {
    id: 3,
    name: 'Winter Trip',
    startDate: '11-05-2020',
    endDate: '12-05-2020',
    origin: 'denver, co, usa',
    finalDestination: 'Tokyo, Japan',
    originAbbrev: 'DEN',
    finalDestinationAbbrev: 'TOK'
  },
  {
    id: 3,
    name: 'Winter Trip',
    startDate: '11-05-2020',
    endDate: '12-05-2020',
    origin: 'denver, co, usa',
    finalDestination: 'Tokyo, Japan',
    originAbbrev: 'DEN',
    finalDestinationAbbrev: 'TOK'
  },
  {
    id: 3,
    name: 'Winter Trip',
    startDate: '11-05-2020',
    endDate: '12-05-2020',
    origin: 'denver, co, usa',
    finalDestination: 'Tokyo, Japan',
    originAbbrev: 'DEN',
    finalDestinationAbbrev: 'TOK'
  },
  {
    id: 3,
    name: 'Winter Trip',
    startDate: '11-05-2020',
    endDate: '12-05-2020',
    origin: 'denver, co, usa',
    finalDestination: 'Tokyo, Japan',
    originAbbrev: 'DEN',
    finalDestinationAbbrev: 'TOK'
  },
  {
    id: 3,
    name: 'Winter Trip',
    startDate: '11-05-2020',
    endDate: '12-05-2020',
    origin: 'denver, co, usa',
    finalDestination: 'Tokyo, Japan',
    originAbbrev: 'DEN',
    finalDestinationAbbrev: 'TOK'
  },
  {
    id: 3,
    name: 'Winter Trip',
    startDate: '11-05-2020',
    endDate: '12-05-2020',
    origin: 'denver, co, usa',
    finalDestination: 'Tokyo, Japan',
    originAbbrev: 'DEN',
    finalDestinationAbbrev: 'TOK'
  },
  {
    id: 3,
    name: 'Winter Trip',
    startDate: '11-05-2020',
    endDate: '12-05-2020',
    origin: 'denver, co, usa',
    finalDestination: 'Tokyo, Japan',
    originAbbrev: 'DEN',
    finalDestinationAbbrev: 'TOK'
  },
  {
    id: 3,
    name: 'Winter Trip',
    startDate: '11-05-2020',
    endDate: '12-05-2020',
    origin: 'denver, co, usa',
    finalDestination: 'Tokyo, Japan',
    originAbbrev: 'DEN',
    finalDestinationAbbrev: 'TOK'
  }
];

const Trips = () => {
  return (
    <View style={styles.scrollView}>
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
        {
          mockPreviews.map((preview, index) =>
            <TripPreview
              item={preview}
              key={preview.id}
            />
          )
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    alignItems: 'center',
    backgroundColor: '#96CDEC',
    borderWidth: 1.5,
    borderColor: 'black',
    height: 500,
    marginTop: 30,
    textAlign: 'center',
    width: 300
  },
  header: {
    borderBottomWidth: 1.5,
    borderBottomColor: 'black',
    fontSize: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 3,
    paddingBottom: 10,
    shadowColor: 'white',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    width: 290
  },
  image: {
    height: 36,
    width: 36,
  }
});

export default Trips;
