import React from 'react';
import GetMyWorkout from './frontend/components/GetMyWorkout/GetMyWorkout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './frontend/components/HomePage/HomePage'
import Login from './frontend/components/Login/Login'
import Register from './frontend/components/Register/Register'
import Dashboard from './frontend/components/Dashboard/Dashboard'
import './App.css';

function App() {
  return (
    <div>
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/get-my-workout' component={GetMyWorkout} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
