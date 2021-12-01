/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {Button} from './Button/Button';

const ImageIcon = () => {
  return (
    <View
      style={{
        height: 15,
        width: 15,
        backgroundColor: 'white',
      }}
    />
  );
};

export const SingleResponsibility = () => {
  return (
    <>
      <Button
        icon="arrow"
        color="blue"
        backgroundColor="white"
        onPress={() => console.log(1)}
      />
      <Button
        icon="graph"
        color="white"
        backgroundColor="grey"
        onPress={() => console.log(2)}
        isDisabled={true}
      />
      <Button
        icon={<ImageIcon />}
        color="red"
        backgroundColor="salmon"
        onPress={() => console.log(3)}
      />
      <Button
        icon="plus"
        color="red"
        backgroundColor="salmon"
        onPress={() => console.log(4)}
      />
    </>
  );
};
