/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {Button, Text, View} from 'react-native';

import FastImage from 'react-native-fast-image';

export const RNInternals: () => Node = () => {
  return (
    <>
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
        <Button
          title="Click to preload /toto.png"
          onPress={() => {
            FastImage.preload([{uri: '/toto.png'}]);
          }}
        />
        <Button
          title="Click to preload https://google.com/toto.png"
          onPress={() => {
            FastImage.preload([{uri: 'https://google.com/toto.png'}]);
          }}
        />
      </View>
    </>
  );
};
