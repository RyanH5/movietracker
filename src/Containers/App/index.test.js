import React from 'react';
import { shallow } from 'enzyme';
import { addMovies } from '../../Actions';
import App, { mapDispatchToProps } from './index';


describe('App', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch when using addFavorite from MDTP', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = addMovies([{id: 3, name: 'jaws'}]);
      const mappedToProps = mapDispatchToProps(mockDispatch);
      mappedToProps.addMovies([{id: 3, name: 'jaws'}]);
      
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});