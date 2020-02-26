import PropTypes from "prop-types";
import React, { useState } from 'react';
import { StyleSheet, Image, View, Dimensions, Text, ScrollView, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { addActivity, deleteActivity } from '../../apiCalls';

export const Maps = ({ route }) => {
  const { dest, formattedMarkers, endDate, handleTripsFetch } = route.params
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

  const handleDeleteActivity = (actId) => {
    deleteActivity(actId)
      .then(data => {
        setSavedActivities(savedActivities.filter(activity => activity.id !== actId ))
      })
    handleTripsFetch();
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle}
        region={region}
        zoomEnabled={true}
      >
      {renderMarkers}
      </MapView>
      {clickedActivity === '' ?
        <View style={styles.activitiesContainer}>
          <Text style={{fontSize: 30, color: '#fff', fontWeight: 'bold'}}>Saved Activities</Text>
          <ScrollView style={{width: '100%'}} contentContainerStyle={styles.scrollView}>
            {savedActivities.length
              ?
                savedActivities.map((activity, index) => {
                return (
                  <View style={styles.activity} key={index}>
                    <Text style={{fontWeight: 'bold', margin: 5, textAlign: 'center'}}>{activity.name}</Text>
                    <Text style={{textAlign: 'center', margin: 5}}>{activity.address}</Text>
                    <Text style={{margin: 5}}>Yelp Score: {activity.rating}</Text>
                    <Image
                      source={{uri: activity.image}}
                      style={{height: 100, width: 150}}
                      resizeMode='cover'
                    />
                    <TouchableOpacity 
                      activeOpacity={.8}
                      style={styles.delete}
                      onPress={() => handleDeleteActivity(activity.id)}
                    >
                      <Text style={styles.btnText}>Delete</Text>
                    </TouchableOpacity>
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
          <Text style={{
            fontSize: 30,
            color: '#fff',
            fontWeight: 'bold'
          }}>
            Save activity to Trip?
          </Text>
          <TouchableOpacity 
            style={styles.button}
            activeOpacity={.9} 
            onPress={() => handleYesClick()}>
            <Text style={styles.btnText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.button} 
          activeOpacity={.9} 
          onPress={() => handleNoClick()}
          >
            <Text style={styles.btnText}>No</Text>
          </TouchableOpacity>
        </View>
      }
    </View>
  )
}

Maps.propTypes = {
  route: PropTypes.any
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
    backgroundColor: '#1E88E5',
    flex: 1,
    width: '100%',
  },
  activitiesContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#1E88E5',
    height: '100%',
    width: '100%'
  },
  scrollView: {
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
    width: '100%',
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
    backgroundColor: '#2CCB70',
    width: '100%',
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: .2,
    shadowRadius: 3,
    width: '90%'
  },
  btnText: {
    fontSize: 20,
    color: 'white'
  },
  delete: {
    backgroundColor: '#FF5733',
    padding: 10,
    borderRadius: 5,
    marginTop: 5
  }
})