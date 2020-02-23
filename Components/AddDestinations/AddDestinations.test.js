import React from 'react';
import AddDestinations from './AddDestinations';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<AddDestinations />).toJSON();
  expect(tree).toMatchSnapshot();
});