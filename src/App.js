import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { UserProvider } from './contexts/user';
import AuthRoute from './views/components/Auth/AuthRoute';
import TodoList from './views/pages/TodoList';
import Login from './views/pages/Login';
import Logout from './views/pages/Logout';
import NotFound from './views/pages/NotFound';

import './App.scss';

function App() {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <AuthRoute exact path="/logout" component={Logout} />
          <AuthRoute exact path="/" component={TodoList} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
