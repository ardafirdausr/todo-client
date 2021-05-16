import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useUserContext } from '../../../contexts/user';

function AuthRoute(props) {
  let { user } = useUserContext();
	return !user
		? <Route {...props} />
		: <Redirect to={{pathname: "/", state: { from: props.location }}} />
}

export default AuthRoute;
