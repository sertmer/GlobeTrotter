import React from 'react';
import Maps from './Maps';

import renderer from 'react-test-renderer';

test.skip('renders correctly', () => {
  const tree = renderer.create(<Maps />).toJSON();
  expect(tree).toMatchSnapshot();
});