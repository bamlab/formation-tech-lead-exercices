import React from 'react';

import {render} from '@testing-library/react-native';
import {SingleResponsibility} from './SingleResponsibility';

it('renders correctly', () => {
  const {toJSON} = render(<SingleResponsibility />);

  expect(toJSON()).toMatchSnapshot();
});
