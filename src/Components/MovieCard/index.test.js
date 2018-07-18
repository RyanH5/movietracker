import React from 'react';
import { shallow } from 'enzyme';
import {MovieCard, mapStateToProps, mapDispatchToProps} from './index';
import { addFavorite, removeFromFavorites } from '../../Actions';

describe('MovieCard', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<MovieCard />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return a props object with correct keys', () => {
      const mockState = {
        user: {
          loginStatus: true,
          id: 3,
          favorites: []
        }
      };
      const expected = {
        user: {
          loginStatus: true,
          id: 3,
          favorites: []
        },
        isLoggedIn: true,
        userId: 3,
        favorites: []
      };
      const mappedProps = mapStateToProps(mockState);
      
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch when using addFavorite from MDTP', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = addFavorite({id: 3, name: 'jaws'});
      const mappedToProps = mapDispatchToProps(mockDispatch);
      mappedToProps.addFavorite({id: 3, name: 'jaws'});
      
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch when using a removeFavorite from MDTP', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = removeFromFavorites({id: 3});
      const mappedToProps = mapDispatchToProps(mockDispatch);
      mappedToProps.removeFromFavorites({id: 3});
      
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});

