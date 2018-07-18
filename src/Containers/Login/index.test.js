import { Login, mapStateToProps, mapDispatchToProps } from './';
import { shallow, mount } from 'enzyme';
import React from 'react';
import { toggleUserLogin, userIsFalse, addAllFavs } from '../../Actions';


describe('Login', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<Login />);

    expect(wrapper).toMatchSnapshot();
  });
  
  
  describe('handleChange', () => {
    let spy;
    let wrapper;

    beforeEach(() => {
      wrapper = mount(<Login />);
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
          loginStatus: true,
          id: 3
        }
      };
      const expected = {
        loginStatus: true,
        userId: 3
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

    it('should call dispatch when using addAllFavs from MDTP', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = addAllFavs([{id: 3, name: 'jaws'}]);
      const mappedToProps = mapDispatchToProps(mockDispatch);
      mappedToProps.addAllFavs([{id: 3, name: 'jaws'}]);
      
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});

