import {CardContainer, mapStateToProps} from './index';
import { shallow } from 'enzyme';
import React from 'react';

describe('CardContainer', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<CardContainer />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return a props object with the correct keys', () => {
      const mockState = {
        moviesData: [],
        user: {
          favorites: [],
          loginStatus: true
        }
      };
      const expected = {
        movies: [],
        favorites: [],
        loginStatus: true
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });
});
