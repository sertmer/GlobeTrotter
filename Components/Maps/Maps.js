import React, { useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';


export const Maps = ({ route }) => {
  const { dest, formattedMarkers } = route.params
  const [ activities, setActivities ] = useState(formattedMarkers)
  const [ startDate, setStartDate ] = useState(dest.destination.startDate)
  const [ endDate, setEndDate ] = useState(dest.destination.endDate)
  const [ savedActivities, setSavedActivities ] = useState([])
  const [ region, setRegion ] = useState({
    latitude: parseFloat(dest.destination.lat),
    longitude: parseFloat(dest.destination.long),
    latitudeDelta: 0.109,
    longitudeDelta: 0.224
  })

  const matchActivities = (act) => {
    let saved = activities.find(activity => {
      return activity.coordinates.latitude === act.latitude
    })
    return saved
  }

  const addActivity = (act) => {
    setSavedActivities([...savedActivities, matchActivities(act)])
  }

  const renderMarkers = formattedMarkers.map((marker, index) => {
    return (
      <Marker
      key={index}
      coordinate={marker.coordinates}
      title={marker.title}
      description={marker.description}
      onPress={(marker) => addActivity(marker.nativeEvent.coordinate)}
      />
    )
  })
    
  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle}
        // provider={PROVIDER_GOOGLE}
        region={region}
        zoomEnabled={true}
      >
      {renderMarkers}
      </MapView>
    </View>
  )
}

export default Maps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/2.5,
  }
})