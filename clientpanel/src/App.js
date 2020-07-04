import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './store'

import AppNavbar from './components/layouts/AppNavbar';
import Dashboard from './components/layouts/Dashboard';
import AddClient from './components/client/AddClient';
import ClientDetails from './components/client/ClientDetails';
import Login from './components/auth/Login';
import EditClient from './components/client/EditClient';
import Settings from './components/settings/Settings';
import Register from './components/auth/Register';
import WelcomePage from './components/pages/WelcomePage';
import About from './components/pages/About';
import {UserIsAuthenticated, UserIsNotAuthenticated} from './helper/auth'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
         <AppNavbar></AppNavbar>
          <div className="container">
            <Switch>
              <Route exact path="/dashboard" component={UserIsAuthenticated(Dashboard)}></Route>
              <Route exact path="/client/add" component={UserIsAuthenticated(AddClient)}></Route>
              <Route exact path="/client/:id" component={UserIsAuthenticated(ClientDetails)}></Route>
              <Route exact path="/login" component={UserIsNotAuthenticated(Login)}></Route>
              <Route exact path="/client/edit/:id" component={UserIsAuthenticated(EditClient)}></Route>
              <Route exact path="/" component={UserIsAuthenticated(WelcomePage)}></Route>
              <Route exact path="/settings" component={UserIsAuthenticated(Settings)}></Route>
              <Route exact path="/about" component={UserIsNotAuthenticated(About)}></Route>
              <Route exact path="/register" component={UserIsNotAuthenticated(Register)}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
