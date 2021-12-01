import React from 'react';
import {Text} from 'react-native';

const FakeIcon = ({style, letter}) => {
  return <Text style={style}>{letter}</Text>;
};

/**
 * Mock Icon component. Returns a Letter just as if it were an icon.
 * @param props style and name (graph, bolt, plus, minus)
 * @returns Element
 */
export const Icon = ({name, style}) => {
  switch (name) {
    case 'arrow':
      return <FakeIcon style={style} letter="A" />;
    case 'graph':
      return <FakeIcon style={style} letter="G" />;
    case 'bolt':
      return <FakeIcon style={style} letter="B" />;
    case 'plus':
      return <FakeIcon style={style} letter="P" />;
    default:
      throw new Error(`Icon ${name} does not exist`);
  }
};
