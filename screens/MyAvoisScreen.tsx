// MyAvoisScreen.tsx

import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const MyAvoisScreen: React.FC = () => {
  return (
    <ImageBackground
    source={require('../assets/myAvois.png')}
    style={styles.backgroundImage}
  >
    <View>
      <Text>My Avois Screen</Text>
    </View>
    </ImageBackground>
  );
};

export default MyAvoisScreen;


const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    color: 'white', // Adjust text color as needed
  },
});
