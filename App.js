/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {Button, SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {RNInternals} from './pages/RNInternals/RNInternals';

const Menu = ({setCurrentPage}) => {
  return (
    <>
      <Button
        title={'RNInternals'}
        onPress={() => setCurrentPage('RNInternals')}
      />
    </>
  );
};

const Navigation: () => Node = ({currentPage, setCurrentPage}) => {
  switch (currentPage) {
    case 'RNInternals':
      return <RNInternals />;
    default:
      return <Menu setCurrentPage={setCurrentPage} />;
  }
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [currentPage, setCurrentPage] = useState(null);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {!!currentPage && (
        <Button title="back to menu" onPress={() => setCurrentPage(null)} />
      )}
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </SafeAreaView>
  );
};

export default App;
