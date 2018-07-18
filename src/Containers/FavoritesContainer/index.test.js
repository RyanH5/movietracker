import {FavoritesContainer} from './index';
import { shallow } from 'enzyme';
import React from 'react';
import { mapStateToProps } from '../FavoritesContainer';

describe('FavoritesContainer', () => {
  it.skip('should match snapshot', () => {
    let wrapper = shallow(<FavoritesContainer />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should create a props object with the correct keys', () => {
      const mockState = {
        user: {
          favorites: []
        }
      };
      const expected = {
        favorites: []
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });
});

