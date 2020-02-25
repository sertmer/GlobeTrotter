import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Text, ScrollView, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { addActivity } from '../../apiCalls';


export const Maps = ({ route }) => {
  const { dest, formattedMarkers } = route.params
  let [ activities, setActivities ] = useState(formattedMarkers)
  let [ startDate, setStartDate ] = useState(dest.destination.startDate)
  let [ endDate, setEndDate ] = useState(dest.destination.endDate)
  let [ savedActivities, setSavedActivities ] = useState([])
  let [ clickedActivity, setClickedActivity ] = useState({})

  const [ region, setRegion ] = useState({
    latitude: parseFloat(dest.destination.lat),
    longitude: parseFloat(dest.destination.long),
    latitudeDelta: 0.109,
    longitudeDelta: 0.224
  })

  const displaySavedActivities = () => {
    console.log(savedActivities)
    let reformattedData = savedActivities.map((activity, index) => {
      return (
        <View key={index}>
          <Text>hi</Text>
        </View>
      )
    })
  }

  const matchActivities = (act) => {
    let saved = activities.find(activity => {
      return activity.coordinates.latitude === act.latitude
    })

    return saved
  }

  const addActivity = (act) => {
    setClickedActivity(matchActivities(act))
    console.log('addActivity clickedActivity', clickedActivity)
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

  const handleYesClick = () => {
    setSavedActivities([...savedActivities, clickedActivity])
    setClickedActivity({})
    console.log('savedActivity on yes click', savedActivities);
    console.log('yes click Clickedactivity', clickedActivity);
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle}
        // provider={PROVIDER_GOOGLE}
        region={region}
        zoomEnabled={true}
      >
      {renderMarkers}
      </MapView>
        <View>
          <Text>
            Save activity to Trip?
          </Text>
          <TouchableOpacity onPress={() => handleYesClick()}>
            <Text>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setClickedActivity({})}>
            <Text>No</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={{width: '95%'}}>
          {displaySavedActivities}
        </ScrollView>
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






//
// {clickedActivity !== {} ?
//   <ScrollView style={{width: '95%'}}>
//     {displaySavedActivities}
//   </ScrollView>
//   :
//   <View>
//     <Text>
//       Save activity to Trip?
//     </Text>
//     <TouchableOpacity onPress={() => handleYesClick()}>
//       Yes
//     </TouchableOpacity>
//     <TouchableOpacity onPress={() => setClickedActivity({})}>
//       No
//     </TouchableOpacity>
//   </View>
// }
