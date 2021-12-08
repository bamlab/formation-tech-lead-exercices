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
import {EventLoop} from './pages/EventLoop/EventLoop';
import {SingleResponsibility} from './pages/SingleResponsibility/SingleResponsibility';
import {DDD} from './pages/DDD/DDD';

const Menu = ({setCurrentPage}) => {
  return (
    <>
      <Button
        title={'RNInternals'}
        onPress={() => setCurrentPage('RNInternals')}
      />
      <Button title={'EventLoop'} onPress={() => setCurrentPage('EventLoop')} />
      <Button
        title={'SingleResponsibility'}
        onPress={() => setCurrentPage('SingleResponsibility')}
      />
      <Button title={'DDD'} onPress={() => setCurrentPage('DDD')} />
    </>
  );
};

const Navigation: () => Node = ({currentPage, setCurrentPage}) => {
  switch (currentPage) {
    case 'RNInternals':
      return <RNInternals />;
    case 'EventLoop':
      return <EventLoop />;
    case 'SingleResponsibility':
      return <SingleResponsibility />;
    case 'DDD':
      return <DDD />;

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
