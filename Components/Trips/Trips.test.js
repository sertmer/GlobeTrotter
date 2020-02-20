import React from 'react';
import Trips from './Trips';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Trips />).toJSON();
  expect(tree).toMatchSnapshot();
});