import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Login from './pages/login/login';
import Home from './pages/home/home';

const App: React.FC = () => {
  return (
    <Router>
      <Redirect from="/" to="/home"></Redirect>
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/login" component={Login}/>
      </Switch>
    </Router>
  );
};

export default App;
