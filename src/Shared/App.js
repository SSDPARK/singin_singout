import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configStore';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

function App() {
  return (
    <>
      <ConnectedRouter history={history}>
        {/* <Switch> */}
        <Route path="/signup" component={Signup} exact />
        <Route path="/login" component={Login} exact />
        {/* </Switch> */}
      </ConnectedRouter>
    </>
  );
}

export default App;
