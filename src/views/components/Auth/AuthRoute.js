import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useUserContext } from '../../../contexts/user';

function AuthRoute({ children, ...rest }) {
  let { user } = useUserContext();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user
          ? children
          : <Redirect to={{pathname: "/login", state: { from: location }}} />
      }
    />
  );
}

export default AuthRoute;
