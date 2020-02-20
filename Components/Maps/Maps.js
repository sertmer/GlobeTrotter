import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

export const Maps = () => {
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