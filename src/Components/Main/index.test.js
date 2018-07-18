import React from 'react';
import { shallow } from 'enzyme';
import { Main, mapStateToProps } from './';

describe('Main', () => {
  it('should match the snapshot', () => {
    let wrapper = shallow(<Main />);
    
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return a props object with loginStatus key', () => {
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
});
