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

import './App.scss';

function App() {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/logout" component={Logout}></Route>
          <AuthRoute path="/">
            <TodoList />
          </AuthRoute>
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
