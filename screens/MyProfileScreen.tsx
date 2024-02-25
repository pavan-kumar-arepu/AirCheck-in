// MyProfileScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const MyProfileScreen: React.FC = () => {
  return (
    <ImageBackground
    source={require('../assets/myProfile.png')}
    style={styles.backgroundImage}
  >
  <View style={styles.container}>
      <Text style={styles.headerText}>My Profile Screen</Text>
    </View>
    </ImageBackground>
  );
};
export default MyProfileScreen;

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

