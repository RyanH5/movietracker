import {Login} from './index';
import { shallow, mount } from 'enzyme';
import React from 'react';

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
});