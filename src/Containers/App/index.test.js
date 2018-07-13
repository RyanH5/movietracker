import React from 'react';
import { shallow } from 'enzyme';
import App from './index';

describe('App', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});