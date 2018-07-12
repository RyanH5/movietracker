import Login from './index';
import { shallow, mount } from 'enzyme';
import React from 'react';

describe('Login', () => {
  
  
  describe('handleChange', () => {
    let wrapper;
    let handleChange;
    let spy;

    beforeEach(() => {
      wrapper = mount(<Login />)
      spy = jest.spyOn(wrapper.instance(), 'handleChange')
    });
    it('should update state of email', () => {
      const mockEvent = {
        target: {
          value: 'h',
          name: 'email'
        }
      }
      const expectedState = {
        email: 'h',
        password: ''
      }
      wrapper.instance().handleChange(mockEvent)

      wrapper.find('input').first().simulate('change') 

      expect(spy).toHaveBeenCalled()
    });

    it('should update state of password', () => {
      const mockEvent = {
        target: {
          value: 'h',
          name: 'password'
        }
      }
      const expectedState = {
        password: 'h',
        email: ''
      }
      wrapper.instance().handleChange(mockEvent)

      wrapper.find('input').last().simulate('change') 

      expect(spy).toHaveBeenCalled()
    });

  })
});