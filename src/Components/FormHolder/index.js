import React from 'react';

import Login from '../../Containers/Login';
import Signup from '../../Containers/Signup'
import './styles.css';
import { withRouter } from 'react-router';

const FormHolder = (props) => {

  return (
    <div className="form-holder">
      <div className="close-form-holder"
        onClick={() => props.history.push('/')}
      >Ⓧ</div>
      <Login />
      <Signup />
    </div>
  );
};

export default withRouter(FormHolder);