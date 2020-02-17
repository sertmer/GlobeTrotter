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
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
});


export default TripPreview;
