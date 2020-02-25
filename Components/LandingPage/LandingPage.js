import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

export const LandingPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.globeContainer}>
        <Image 
          source={{ uri: 'https://i.imgur.com/ixGj1Nf.png' }} 
          style={styles.globe}
        />
      </View>
      <Text style={styles.title}>GlobeTrotter</Text>
      <TouchableOpacity
        activeOpacity={.8}
        style={styles.getStarted}
        onPress={() => navigation.navigate('Trips')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E88E5',
    height: '100%',
    alignItems: 'center',
    padding: 15,
    justifyContent: 'space-around'
  },
  getStarted: {
    backgroundColor: '#2CCB70',
    width: '100%',
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  },
  title: {
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold'
  },
  buttonText: {
    color: '#0D47A1',
    fontWeight: 'bold',
    fontSize: 20
  },
  globe: {
    width: 300,
    height: 300,
    marginLeft: 20
  }
})
export default LandingPage;