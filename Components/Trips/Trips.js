import React from 'react';
import { Text, View, FlatList, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import TripPreview from '../TripPreview/TripPreview';
import { globalStyles } from '../../styles/global';

const mockPreviews = [
  {
    id: '1',
    name: 'spring break',
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
    startDate: '11-05-2020',
    endDate: '12-05-2020',
    origin: 'denver, co, usa',
    finalDestination: 'Tokyo, Japan',
    originAbbrev: 'DEN',
    finalDestinationAbbrev: 'TOK',
    description: 'Lorem Ipsum something de lor'
  }
];

const Trips = () => {
  return (
    <View style={globalStyles.container}>
      <ScrollView>
        {mockPreviews.map(item => {
          return (
            <View key={item.id}>
              <TouchableOpacity>
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

      {/* struggling to make FL work using ScrollVIew for now, not aware of the nuiances right now but it works */}
      {/* <FlatList 
        data={mockPreviews}
        renderItem={(item) => (
          <TouchableOpacity>
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
        )}
      /> */}
    </View>
  )
}

export default Trips;

const styles = StyleSheet.create({
  container: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    padding: 10
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
})