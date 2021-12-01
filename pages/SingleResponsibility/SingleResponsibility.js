/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {Button} from './Button/Button';
import {ImageButton} from './Button/ImageButton';

const ImageIcon = () => {
  return (
    <View
      style={{
        height: 15,
        width: 15,
        backgroundColor: 'salmon',
      }}
    />
  );
};

export const SingleResponsibility = () => {
  return (
    <View
      style={{
        height: 400,
        justifyContent: 'space-around',
        padding: 30,
      }}>
      {/* basic button */}
      <Button
        icon="arrow"
        colorVariant="primary"
        onPress={() => console.log(1)}
      />
      {/* disabled button */}
      <Button
        icon="graph"
        colorVariant="primary"
        onPress={() => console.log(2)}
        isDisabled={true}
      />
      {/* button with an image as icon */}
      <ImageButton icon={<ImageIcon />} onPress={() => console.log(3)} />
      {/* button with a different color scheme */}
      <Button
        icon="plus"
        colorVariant="secondary"
        onPress={() => console.log(4)}
      />
    </View>
  );
};
