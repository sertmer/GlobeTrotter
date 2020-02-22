import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';


export const Maps = ({ route }) => {
  const { destination } = route.params
  console.log('lat/long: ', destination);

  const [ markers, setMarkers ] = useState([])

  

  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} />
      
    </View>
  )
}

export default Maps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})