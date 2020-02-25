import React, { useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Agenda } from 'react-native-calendars'
import { Marker } from 'react-native-maps';



export const Maps = ({ route }) => {
  const { dest, formattedMarkers } = route.params

  const [ region, setRegion ] = useState({
    latitude: parseFloat(dest.destination.lat),
    longitude: parseFloat(dest.destination.long),
    latitudeDelta: 0.222,
    longitudeDelta: 0.2421
  })

  const renderMarkers = formattedMarkers.map(marker => {
      return (
      <Marker
        coordinate={marker.coordinates}
        title={marker.title}
      // description={marker.description} 
      />
      )
  })

  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle}
        provider={PROVIDER_GOOGLE}
        region={region}
        zoomEnabled={true}
      >
      {renderMarkers}
      </MapView>
      <Agenda style={styles.agenda}
        items={{
          [dest.startDate]: { name: dest.name, location: dest.destination.location },
          [dest.endDate]: { name: dest.name, location: dest.destination.location }
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