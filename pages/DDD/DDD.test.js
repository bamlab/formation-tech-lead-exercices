import React from 'react';

import {fireEvent, render, waitFor} from '@testing-library/react-native';
import {DDD} from './DDD';

it('renders correctly', async () => {
  const {toJSON, getByText} = render(<DDD />);

  await waitFor(() => getByText('Products'));
  expect(toJSON()).toMatchSnapshot();

  // Check the order is reversed with the price
  const orderByPriceButton = getByText('tri par prix');
  fireEvent.press(orderByPriceButton);

  expect(toJSON()).toMatchSnapshot();
});
