import React from 'react';
import { shallow } from 'enzyme';
import {Header} from './index';
import { mapStateToProps, mapDispatchToProps } from '../../Components/Header';
import { userLogout } from '../../Actions';


describe('Header', () => {
  let wrapper;
  let mockUserLogout;
  let mockUser;

  beforeEach(() => {
    mockUserLogout = jest.fn();
    mockUser = {name: 'Bill', id: 4, loginStatus: true};
    wrapper = shallow(<Header userLogout={mockUserLogout}/>);
  });

  it('should match the snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should call userLogout on click', ()=> {
    wrapper.find('.logout').last().simulate('click');

    expect(mockUserLogout).toHaveBeenCalledWith(mockUser);
  });

  describe('mapStateToProps', () => {
    it('should return a props object with loginStatus key', () => {
      const mockState = {
        user: {
          loginStatus: true,
          id: 3,
          name: 'billy'
        }
      };
      const expected = {
        loginStatus: true,
        user: {
          loginStatus: true,
          id: 3,
          name: 'billy'
        }
      };
      const mappedProps = mapStateToProps(mockState);
      
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch when using a fn from MDTP', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = userLogout({user: {id: 3, loginStatus: false}})
      const mappedToProps = mapDispatchToProps(mockDispatch);
      mappedToProps.userLogout({user: {id: 3, loginStatus: false}})
      
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});