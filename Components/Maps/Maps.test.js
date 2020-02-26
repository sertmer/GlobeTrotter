import React from 'react';
import Maps from './Maps';

import renderer from 'react-test-renderer';

test.skip('renders correctly', () => {
  const mockNavigation = {
    navigate: jest.fn()
  };
  const mockRoute = {
    params: jest.fn()
  }
  const tree = renderer.create(<Maps navigation={mockNavigation} route={mockRoute}/>).toJSON();
  expect(tree).toMatchSnapshot();
});