import {CardContainer} from './index';
import { shallow } from 'enzyme';
import React from 'react';

describe('CardContainer', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<CardContainer />);

    expect(wrapper).toMatchSnapshot();
  });
});