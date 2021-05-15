import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useUserContext } from '../../../contexts/user';

function AuthRoute(props) {
  let { user } = useUserContext();
  if (!user) {
    return <Redirect to={{pathname: "/login", state: { from: props.location }}} />
  }

  return <Route {...props} />
}

export default AuthRoute;
