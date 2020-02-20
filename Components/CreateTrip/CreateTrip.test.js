import React from 'react';
import CreateTrip from './CreateTrip';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<CreateTrip />).toJSON();
  expect(tree).toMatchSnapshot();
});