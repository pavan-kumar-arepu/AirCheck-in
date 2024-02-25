import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const MyTripsScreen: React.FC = () => {
  return (
    <ImageBackground
    source={require('../assets/myTrips.png')}
    style={styles.backgroundImage}
  >
  <View style={styles.container}>
      <Text style={styles.headerText}>My Trips Screen</Text>
    </View>
    </ImageBackground>
  );
};

export default MyTripsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
      color: 'white'
    },
  });

