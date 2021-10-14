/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{top: 40}}>
        <View
          style={{
            backgroundColor: 'blue',
            zIndex: 2,
            top: 10,
            position: 'absolute',
          }}>
          <Text>This view should be above</Text>
        </View>
        <View
          style={{
            backgroundColor: 'green',
            zIndex: 1,
            elevation: 1,
          }}>
          <Text>This view should be below</Text>
        </View>
      </View>

      <View
        style={{
          marginTop: 50,
        }}>
        <Button title="Click to preload ./toto.png" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

export default App;
