import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { ProvideAuth } from './views/components/Auth/Auth';
import AuthRoute from './views/components/Auth/AuthRoute';
import TodoList from './views/pages/TodoList';
import Login from './views/pages/Login';

import './App.scss';

function App() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <AuthRoute path="/">
            <TodoList />
          </AuthRoute>
        </Switch>
      </Router>
    </ProvideAuth>
  );
}

export default App;
