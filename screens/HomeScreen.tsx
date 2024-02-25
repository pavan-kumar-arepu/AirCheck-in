// HomeScreen.tsx

import React from 'react';
import { View, Text, ImageBackground, Button, StyleSheet } from 'react-native';

const HomeScreen: React.FC = () => {
  return (
    <ImageBackground
      source={require('./assets/hotel.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Your Text Here</Text>
        <Button
          title="Your Button"
          onPress={() => {
            // Add your button functionality here
          }}
        />
      </View>
    </ImageBackground>
  );
};

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

export default HomeScreen;
