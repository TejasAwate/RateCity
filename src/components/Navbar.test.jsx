import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Navbar from './Navbar';

describe('MyComponent', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Navbar obj='1' dispatchFunc='' />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});


