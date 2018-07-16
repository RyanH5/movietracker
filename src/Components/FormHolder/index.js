import React from 'react';

import Login from '../../Containers/Login';
import Signup from '../../Containers/Signup'
import './styles.css'

const FormHolder = ()=> {

  return (
    <div className="form-holder">
      <div className="close-form-holder">Ⓧ</div>
      <Login />
      <Signup />
    </div>
  );
};

export default FormHolder;