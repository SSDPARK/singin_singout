import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

function App() {
  return (
    <>
      <Switch>
        <Route path="/signup" component={Signup} exact />
        <Route path="/login" component={Login} exact />
      </Switch>
    </>
  );
}

export default App;
