import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useUserContext } from '../../../contexts/user';

function AuthRoute(props) {
  let { user } = useUserContext();
  return !user
    ? <Redirect to={{pathname: "/login", state: { from: props.location }}} />
    : <Route {...props} />
}

export default AuthRoute;
