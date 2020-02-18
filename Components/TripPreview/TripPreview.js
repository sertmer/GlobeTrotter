import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const TripPreview = ({ route }) => {
  const { name, startDate, endDate, originAbbrev, finalDestinationAbbrev, description } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.cities}>
        <Text style={styles.origin}>{originAbbrev}</Text>
        <Text style={styles.destination}>{finalDestinationAbbrev}</Text>
      </View>
      <View style={styles.cities}>
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
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 10,
    padding: 10
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
  description: {
    margin: 'auto',
  }
})

export default TripPreview;
