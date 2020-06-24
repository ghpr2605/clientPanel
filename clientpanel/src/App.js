import React from 'react';
import {BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import AppNavbar from './components/layouts/AppNavbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <AppNavbar></AppNavbar>
        <div className="container">
          <h1>HELLO</h1>
        </div>
    </div>
    </Router>
  );
}

export default App;
