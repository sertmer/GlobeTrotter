import React from 'react';
import TripPreview from './TripPreview';

import renderer from 'react-test-renderer';

test.skip('renders correctly', () => {
  const tree = renderer.create(<TripPreview />).toJSON();
  expect(tree).toMatchSnapshot();
});