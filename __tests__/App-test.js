/**
 * @format
 */

import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import {render, fireEvent} from '@testing-library/react-native';

it('renders correctly', () => {
  const {getByText} = render(<App />);

  const goodButton = getByText('Click to preload https://google.com/toto.png');
  fireEvent.press(goodButton);
});
