import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const TripPreview = ({ route }) => {
  const { name, startDate, endDate, originAbbrev, finalDestinationAbbrev, description } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.cities}>
        <Text style={{fontSize: 40}}>{originAbbrev}</Text>
        <Text style={{fontSize: 40}}>{finalDestinationAbbrev}</Text>
      </View>
      <View style={styles.dates} >
        <Text style={styles.startDate}>{startDate}</Text>
        <Text style={styles.endDate}>{endDate}</Text>
      </View>
      <View style={styles.description}>
        <Text>Notes: {description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    paddingBottom: 40,
    backgroundColor: '#c9e2ef'
  },
  name: {
    alignItems: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    margin: 'auto',
    marginBottom: 20
  },
  cities: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: -200
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
  }
})

export default TripPreview;
