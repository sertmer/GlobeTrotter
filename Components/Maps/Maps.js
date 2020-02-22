import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';


export const Maps = ({ route }) => {
  const { destination } = route.params
  console.log('lat/long: ', destination);

  const [ marker, setMarker ] = useState({});

  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: parseInt(destination.lat),
          longitude: parseInt(destination.long),
          latitudeDelta: 0.5,
          longitudeDelta: 0.55
        }}
        showsUserLocation
      >
      <Marker 
        coordinate={{
          latitude: parseInt(destination.lat),
          longitude: parseInt(destination.long),
          latitudeDelta: 0.4,
          longitudeDelta: 0.41
        }}
      />
      </MapView>
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