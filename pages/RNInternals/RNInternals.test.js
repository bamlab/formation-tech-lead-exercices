import React from 'react';

import {render, fireEvent} from '@testing-library/react-native';
import {RNInternals} from './RNInternals';

it('renders correctly', () => {
  const {getByText} = render(<RNInternals />);

  const goodButton = getByText('Click to preload https://google.com/toto.png');
  fireEvent.press(goodButton);
});
