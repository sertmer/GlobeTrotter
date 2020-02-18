import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const TripPreview = ({item}) => {
  const { name, startDate, endDate, originAbbrev, finalDestinationAbbrev} = item;

  return (
    <View style={styles.container}>
      <View>
        <Text style={{width: 80, textAlign: 'left'}}>
          {name}
        </Text>
      </View>
      <View>
        <View style={styles.destinations}>
          <Text>{originAbbrev}</Text>
          <Text>-</Text>
          <Text>{finalDestinationAbbrev}</Text>
        </View>
        <Text>{startDate}</Text>
        <Text>{endDate}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#eff6f7',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    flexDirection: 'row',
    marginBottom: 15,
    marginTop: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 13,
    width: 275,
  },
  destinations: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});


export default TripPreview;
