// App.tsx

import React from 'react';
import { View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import AppContainer from './navigation/AppContainer';

const App: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <HomeScreen /> */}
      <AppContainer />
    </View>
  );
};

export default App;
