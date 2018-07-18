import {FavoritesContainer} from './index';
import { shallow } from 'enzyme';
import React from 'react';

describe('FavoritesContainer', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<FavoritesContainer />);

    expect(wrapper).toMatchSnapshot();
  });
});