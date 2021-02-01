import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './pages/Home';
import { Posts } from './pages/Posts';

function App() {

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>

          <Route path="*">

          </Route>
        </Switch>
      </div>
    </Router>
  );

}

export default App;