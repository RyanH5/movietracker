import React from 'react';
import { shallow } from 'enzyme';
import MovieCard from './index';

describe('MovieCard', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<MovieCard />);
    expect(wrapper).toMatchSnapshot();
  });
});