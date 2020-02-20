import React from 'react';
import DatePicker from './DatePicker';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<DatePicker />).toJSON();
  expect(tree).toMatchSnapshot();
});