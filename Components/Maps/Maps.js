import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Agenda } from 'react-native-calendars'
import { Marker } from 'react-native-maps';


export const Maps = ({ route }) => {
  const { destination, startDate, endDate, name } = route.params
  console.log('lat/long: ', destination);
  console.log('dates: ', startDate, endDate);

  const [ marker, setMarker ] = useState({});

  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: parseFloat(destination.lat),
          longitude: parseFloat(destination.long),
          latitudeDelta: 0.5,
          longitudeDelta: 0.55
        }}
        showsUserLocation
      >
      <Marker 
        coordinate={{
          latitude: parseFloat(destination.lat),
          longitude: parseFloat(destination.long),
          latitudeDelta: 0.4,
          longitudeDelta: 0.41
        }}
      />
      </MapView>
      <Agenda style={styles.agenda}
        items={{
          [startDate]: { name: name, location: destination.location },
          [endDate]: { name: name, location: destination.location }
        }}
        renderEmptyDate={() => { return <View /> }}
      />
    </View>
  )
}

export default Maps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/3,
  },
  agenda: {
    width: Dimensions.get('window').width,
  }
})