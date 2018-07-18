import {FormHolder} from './index';
import { shallow } from 'enzyme';
import React from 'react';

describe('Login', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<FormHolder />);

    expect(wrapper).toMatchSnapshot();
  });
});