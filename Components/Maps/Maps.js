import React, { useState } from 'react';
import { StyleSheet, Image, View, Dimensions, Text, ScrollView, TouchableOpacity } from 'react-native';
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

  }

  const handleNoClick = () => {
    setClickedActivity({})
  }

  const handleTest = () => {
    console.log('CLICKED ACTIVITY', clickedActivity)
    console.log('SAVEDACTIVITIES', savedActivities);
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
      {!clickedActivity.description  ?
        <ScrollView style={{width: '100%'}} contentContainerStyle={styles.activitiesContainer}>
          <Text>Saved Activities</Text>
          {savedActivities.map((activity, index) => {
            return (
              <View style={styles.activity} key={index}>
                <Text>{activity.title}</Text>
                <Text>{activity.address}</Text>
                <Text>Yelp Score: {activity.rating}</Text>
                <Image
                  source={{ uri: activity.image }}
                  style={styles.globe}
                />
              </View>
            )
          })
        }
        </ScrollView>
      :
        <View style={styles.yesOrNoContainer}>
          <Text>
            Save activity to Trip?
          </Text>
          <TouchableOpacity style={{fontSize: 40}} onPress={() => handleYesClick()}>
            <Text>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{fontSize: 40}} onPress={() => handleNoClick()}>
            <Text>No</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{fontSize: 40}} onPress={() => handleTest()}>
            <Text>TEST TEST TEST</Text>
          </TouchableOpacity>
        </View>
      }
    </View>
  )
}

export default Maps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/2.5,
  },
  yesOrNoContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'yellow',
    flex: 1,
    width: '100%',
    borderTopColor: 'black',
    borderTopWidth: 1,
  },
  activitiesContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'orange',
    borderTopColor: 'black',
    borderTopWidth: 1,
    height: '100%',
  },
  activity: {
    alignItems: 'center',
    backgroundColor: 'red',
    justifyContent: 'center',
    width: '95%',
    backgroundColor: '#eff6f7',
    borderRadius: 5,
    marginTop: 20,
    padding: 10,
    shadowColor: '#0D47A1',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: .9,
    shadowRadius: 3
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
