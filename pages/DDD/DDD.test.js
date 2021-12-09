import React from 'react';

import {render, waitFor} from '@testing-library/react-native';
import {DDD} from './DDD';

it('renders correctly', async () => {
  const {toJSON, getByText} = render(<DDD />);

  await waitFor(() => getByText('Products'));

  expect(toJSON()).toMatchSnapshot();
});
