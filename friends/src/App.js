import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import Friends from './components/Friends'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Router>
    <div className="App">
      <header>
            <Link to='/login'>Login</Link>
      </header>
      <h1>Friends!!!</h1>
      <Switch>
        <PrivateRoute exact path='/protected' component={Friends} />
      <Route path='/login' component={Login} />
      <Route component={Login} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
