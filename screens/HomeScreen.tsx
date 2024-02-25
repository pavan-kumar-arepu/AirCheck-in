// HomeScreen.tsx
import React from 'react';
import { View, Image, StyleSheet, Text, ImageBackground } from 'react-native';

const HomeScreen: React.FC = () => {
  return (
    <ImageBackground
    source={require('../assets/hotel.png')}
    style={styles.backgroundImage}
  >
    <View style={styles.container}>
      <Text style={styles.headerText}>My Home Screen</Text>
    </View>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 500,
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

export default HomeScreen;
