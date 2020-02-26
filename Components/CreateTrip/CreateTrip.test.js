import React from 'react';
import CreateTrip from './CreateTrip';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const mockNavigation = {
    navigate: jest.fn()
  };
  const mockRoute = {
    params: jest.fn()
  }
  const tree = renderer.create(<CreateTrip navigation={mockNavigation} route={mockRoute} />).toJSON();
  expect(tree).toMatchSnapshot();
});
