import React from 'react';
import { shallow } from 'enzyme';
import {Header} from './index';

// jest.mock('./index.js');

describe('Header', () => {
  let wrapper;
  let mockUserLogout;
  let mockUser;

  beforeEach(() => {
    mockUserLogout = jest.fn();
    mockUser = {name: 'Bill', id: 4, loginStatus: true}
    wrapper = shallow(<Header userLogout={mockUserLogout}/>);
  });

  it('should match the snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should call userLogout on click', ()=> {
    wrapper.find('.logout').last().simulate('click');

    expect(mockUserLogout).toHaveBeenCalledWith(mockUser)
  });
});