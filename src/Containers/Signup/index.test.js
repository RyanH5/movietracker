import {Signup, mapStateToProps, mapDispatchToProps} from './index';
import { shallow, mount } from 'enzyme';
import React from 'react';
import { toggleUserLogin, userIsFalse, userSignup } from '../../Actions';

describe('Login', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<Signup />);

    expect(wrapper).toMatchSnapshot();
  });
  
  describe('handleChange', () => {
    let spy;
    let wrapper;

    beforeEach(() => {
      wrapper = mount(<Signup />);
      spy = jest.spyOn(wrapper.instance(), 'handleChange');
    });

    it('should update state of email', () => {
      const mockEvent = {
        target: {
          value: 'h',
          name: 'email'
        }
      };
      wrapper.instance().handleChange(mockEvent);
      wrapper.find('input').first().simulate('change'); 

      expect(spy).toHaveBeenCalled();
    });

    it('should update state of password', () => {
      const mockEvent = {
        target: {
          value: 'h',
          name: 'password'
        }
      };
      wrapper.instance().handleChange(mockEvent);
      wrapper.find('input').last().simulate('change'); 

      expect(spy).toHaveBeenCalled();
    });
  });

  describe('mapStateToProps', () => {
    it('should create a props object with the correct keys', () => {
      const mockState = {
        user: {
          loginStatus: true
        }
      };
      const expected = {
        loginStatus: true
      };
      const mappedProps = mapStateToProps(mockState);
  
      expect(mappedProps).toEqual(expected);
  
    });
  }); 

  describe('mapDispatchToProps', () => {
    it('should call dispatch when using toggleUserLogin from MDTP', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = toggleUserLogin({id: 3, loginStatus: true});
      const mappedToProps = mapDispatchToProps(mockDispatch);
      mappedToProps.toggleUserLogin({id: 3, loginStatus: true});
      
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  
    it('should call dispatch when using userIsFalse from MDTP', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = userIsFalse({id: 3, loginStatus: true});
      const mappedToProps = mapDispatchToProps(mockDispatch);
      mappedToProps.userIsFalse({id: 3, loginStatus: true});
      
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  
    it('should call dispatch when using userSignup from MDTP', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = userSignup([{id: 3, name: 'Jill', loginStatus: false}]);
      const mappedToProps = mapDispatchToProps(mockDispatch);
      mappedToProps.userSignup([{id: 3, name: 'Jill', loginStatus: false}]);
      
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

  
});

