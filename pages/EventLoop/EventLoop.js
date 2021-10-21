import React, {useState} from 'react';
import {Alert, Button, View, Text} from 'react-native';

const AnimatableCube = ({position}) => {
  return (
    <View
      style={{
        backgroundColor: 'red',
        height: 50,
        width: 50,
        left: position % 300,
      }}
    />
  );
};

const Race = () => {
  const [positionA, setPositionA] = useState(0);
  const [positionB, setPositionB] = useState(0);

  const updateTimeout = () => {
    setTimeout(() => {
      setPositionA(position => position + 1);
      updateTimeout();
    }, 0);
  };
  const updateFrame = () => {
    requestAnimationFrame(() => {
      setPositionB(position => position + 1);
      updateFrame();
    });
  };

  const start = () => {
    updateTimeout();
    updateFrame();
  };

  return (
    <>
      <AnimatableCube position={positionA} />
      <AnimatableCube position={positionB} />
      <Button title="start" onPress={start} />
    </>
  );
};

const WaitForUpdate = () => {
  const incrementWithAlert = () => {
    let toto = 0;

    new Promise(resolve => {
      resolve();
    }).then(() => {
      toto++;
    });

    setTimeout(() => {
      Alert.alert('count pressed', `total: ${toto}`);
    }, 0);
  };

  return (
    <>
      <Button title="increment with alert" onPress={incrementWithAlert} />
    </>
  );
};

export const EventLoop = () => {
  return (
    <>
      <Race />
      <WaitForUpdate />
    </>
  );
};
