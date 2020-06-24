import React from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import AppNavbar from './components/layouts/AppNavbar';
import Dashboard from './components/layouts/Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <AppNavbar></AppNavbar>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Dashboard}></Route>
          </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
