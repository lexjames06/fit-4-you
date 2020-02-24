import React, { useState, useEffect } from 'react';
import GetMyWorkout from './frontend/components/GetMyWorkout/GetMyWorkout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './frontend/components/HomePage/HomePage'
import Login from './frontend/components/Login/Login'
import Register from './frontend/components/Register/Register'
import Dashboard from './frontend/components/Dashboard/Dashboard'
import firebase from './frontend/components/firebase'
import './App.css';

function App() {

  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    firebase.isInitialized().then(val => {
      setFirebaseInitialized(val);
    })
  })

  return firebaseInitialized !== false ? (
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
  ) : <div id='loader'>Loading...</div>
}

export default App;
