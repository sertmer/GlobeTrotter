import React, { useState } from 'react';
import { StyleSheet, Image, View, Dimensions, Text, ScrollView, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { addActivity } from '../../apiCalls';


export const Maps = ({ route }) => {
  const { dest, formattedMarkers, startDate, endDate, handleTripsFetch } = route.params
  let [ activities, setActivities ] = useState(formattedMarkers)
  let [ savedActivities, setSavedActivities ] = useState(dest.activitySet)
  let [ clickedActivity, setClickedActivity ] = useState('')

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

  // saved Object {
  //   "data": Object {
  //     "createActivity": Object {
  //       "activity": Object {
  //         "address": "3800 Homer St, Los Angeles, CA 90031",
  //           "category": "Museums",
  //             "date": "2020-03-10",
  //               "image": "https://s3-media1.fl.yelpcdn.com/bphoto/kI-d5wKeYwye1NdQP32d4A/o.jpg",
  //                 "lat": "34.0887136",
  //                   "long": "-118.2076662",
  //                     "name": "Heritage Square Museum",
  //                       "rating": 4,
  //                         "tripDestination": Object {
  //           "destination": Object {
  //             "abbrev": "LAX",
  //               "location": "Los Angeles, CA, USA",
  //         },
  //           "trip": Object {
  //             "name": "Hunting bugs",
  //         },
  //         },
  //       },
  //     },
  //   },
  // }

  const handleActivity = (act) => {
    setClickedActivity(matchActivities(act))
  }

  const renderMarkers = formattedMarkers.map((marker, index) => {
    return (
      <Marker
      key={index}
      coordinate={marker.coordinates}
      title={marker.title}
      description={marker.description}
      onPress={(marker) => handleActivity(marker.nativeEvent.coordinate)}
      />
    )
  })

  // addActivity(dest.id, name, date, address, category, rating, image, lat, long)
    // setSavedActivities([...savedActivities, clickedActivity])


  const handleYesClick = async () => {
    await addActivity(dest.id, clickedActivity.title, endDate, clickedActivity.address, clickedActivity.description, clickedActivity.rating, clickedActivity.image, clickedActivity.coordinates.latitude, clickedActivity.coordinates.longitude)
      .then(data => {
        setSavedActivities([...savedActivities, data.data.createActivity.activity])
        setClickedActivity('')
        handleTripsFetch()
      })
      .catch(err => console.log(err))
  }


  const handleNoClick = () => {
    setClickedActivity('')
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
      {clickedActivity === '' ?
        <View style={styles.activitiesContainer}>
          <Text style={{fontSize: 30, textDecorationLine: 'underline'}}>Saved Activities</Text>
          <ScrollView style={{width: '100%'}} contentContainerStyle={styles.scrollView}>
            {savedActivities.length
              ?
                savedActivities.map((activity, index) => {
                return (
                  <View style={styles.activity} key={index}>
                    <Text style={{fontWeight: 'bold'}}>{activity.name}</Text>
                    <Text style={{textAlign: 'center'}}>{activity.address}</Text>
                    <Text>Yelp Score: {activity.rating}</Text>
                    <Image
                      source={{uri: activity.image}}
                      style={{height: 100, width: 150}}
                      resizeMode='cover'
                    />
                  </View>
                  )
                })
              :
              <View style={styles.activity2}>
                <Text style={{fontWeight: 'bold'}}>Add activities by clicking map markers!</Text>
              </View>
            }
          </ScrollView>
        </View>
      :
        <View style={styles.yesOrNoContainer}>
          <Text style={{fontSize: 30}}>
            Save activity to Trip?
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => handleYesClick()}>
            <Text style={styles.btnText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}  onPress={() => handleNoClick()}>
            <Text style={styles.btnText}>No</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}  onPress={() => handleTest()}>
            <Text style={styles.btnText}>TEST TEST TEST</Text>
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
    backgroundColor: '#bae0bd',
    flex: 1,
    width: '100%',
    borderTopColor: 'black',
    borderTopWidth: 1,
  },
  activitiesContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#96cdec',
    borderTopColor: 'black',
    borderTopWidth: 1,
    height: '100%',
    width: '100%'
  },
  scrollView: {
    alignItems: 'center',
    marginTop: 15,
    width: '100%',
    height: Dimensions.get('window').height
  },
  activity: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    backgroundColor: '#eff6f7',
    borderRadius: 5,
    marginBottom: 20,
    padding: 10,
    shadowColor: '#0D47A1',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: .9,
    shadowRadius: 3
  },
  activity2: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    backgroundColor: '#eff6f7',
    borderRadius: 5,
    marginTop: 80,
    padding: 10,
    shadowColor: '#0D47A1',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: .9,
    shadowRadius: 3
  },
  button: {
    backgroundColor: '#1E88E5',
    width: '100%',
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: .9,
    shadowRadius: 3,
    width: '90%'
  },
  btnText: {
    fontSize: 20,
    color: 'white'
  }
})
