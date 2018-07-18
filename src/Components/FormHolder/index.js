import React from 'react';
import PropTypes from 'prop-types';

import Login from '../../Containers/Login';
import Signup from '../../Containers/Signup';
import './styles.css';
import { withRouter } from 'react-router';

export const FormHolder = (props) => {

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

FormHolder.propTypes = {
  history: PropTypes.object
};

export default withRouter(FormHolder);