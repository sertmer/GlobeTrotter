import React from 'react';
import AddDestinations from './AddDestinations';

import renderer from 'react-test-renderer';

test.skip('renders correctly', () => {
  const tree = renderer.create(<AddDestinations />).toJSON();
  expect(tree).toMatchSnapshot();
});
