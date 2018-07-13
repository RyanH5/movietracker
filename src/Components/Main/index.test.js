import React from 'react';
import { shallow } from 'enzyme';
import Main from './index';

describe('Main', () => {
  it('should match the snapshot', () => {
    let wrapper = shallow(<Main />);
    
    expect(wrapper).toMatchSnapshot();
  });
});