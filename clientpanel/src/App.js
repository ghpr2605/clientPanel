import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './store'

import AppNavbar from './components/layouts/AppNavbar';
import Dashboard from './components/layouts/Dashboard';
import AddClient from './components/client/AddClient'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
         <AppNavbar></AppNavbar>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard}></Route>
              <Route exact path="/client/add" component={AddClient}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
