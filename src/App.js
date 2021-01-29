import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './pages/Home';

function App() {

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>


          <Route path="*">

          </Route>
        </Switch>
      </div>
    </Router>
  );

}

export default App;