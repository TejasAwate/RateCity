import React from 'react';
import App from './container/App';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('App', () => {
  it('should render correctly', () => {
    const component = shallow(<App/>);
  
    expect(component).toMatchSnapshot();
  });
});
