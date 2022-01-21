/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  Text,
} from 'react-native';
import {Provider, useSelector} from 'react-redux';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {RNInternals} from './pages/RNInternals/RNInternals';
import {EventLoop} from './pages/EventLoop/EventLoop';
import {SingleResponsibility} from './pages/SingleResponsibility/SingleResponsibility';
import {DDD} from './pages/DDD/DDD';
import {Debug} from './pages/Debug/Debug';
import {createAppStore} from './pages/Debug/redux/store';
import {counterSelector} from './pages/Debug/redux/reducer';

const Menu = ({setCurrentPage}) => {
  const counter = useSelector(counterSelector);

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
      <Button title={'Debug'} onPress={() => setCurrentPage('Debug')} />
      <Text>Debug counter: {counter}</Text>
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
    case 'Debug':
      return <Debug />;

    default:
      return <Menu setCurrentPage={setCurrentPage} />;
  }
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [store, setStore] = useState(null);

  useEffect(() => {
    setStore(createAppStore());
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [currentPage, setCurrentPage] = useState(null);

  return (
    store && (
      <Provider store={store}>
        <SafeAreaView style={backgroundStyle}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          {!!currentPage && (
            <Button title="back to menu" onPress={() => setCurrentPage(null)} />
          )}
          <Navigation
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </SafeAreaView>
      </Provider>
    )
  );
};

export default App;
