import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Login from '../../Containers/Login';
import CardContainer from '../../Containers/CardContainer';

const Main = (props) => {
  return (
    <div>
      <Route
        exact path="/"
        component={CardContainer} 
      />
      <Route
        exact path="/login"
        component={Login} 
      />
    </div>
  );
};

export default withRouter(Main);

// export const mapStateToProps = (state)=>({
//   loginStatus: state.loginStatus
// })
