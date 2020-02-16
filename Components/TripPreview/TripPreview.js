import React from 'react';
import { Text, View } from 'react-native';

const TripPreview = ({item}) => {
  const { name, startDate, endDate, originAbbrev, finalDestinationAbbrev} = item;

  return (
    <View>
      <Text>{name}</Text>
      <Text>{originAbbrev}</Text>
      <Text>{finalDestinationAbbrev}</Text>
      <Text>{startDate}</Text>
      <Text>{endDate}</Text>
    </View>
  )
}

export default TripPreview;