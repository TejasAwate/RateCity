import React from 'react';
import { shallow } from 'enzyme';
import ItemDetails from './ItemDetails';
describe('MyComponent', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ItemDetails />);
  
    expect(component).toMatchSnapshot();
  });
});
