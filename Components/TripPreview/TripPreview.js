import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const TripPreview = ({item}) => {
  const { name, startDate, endDate, originAbbrev, finalDestinationAbbrev} = item;

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{originAbbrev}</Text>
      <Text>{finalDestinationAbbrev}</Text>
      <Text>{startDate}</Text>
      <Text>{endDate}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c0cfdb',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    marginBottom: 15,
    marginTop: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    width: 195,
  },
});


export default TripPreview;
