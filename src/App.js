import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/"></Route>
      </Switch>
    </Router>
  );

}

export default App;