import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Gallery } from './pages/Gallery';
import { Home } from './pages/Home';
import { Posts } from './pages/Posts';

function App() {

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/Love-to-dog-blog/">
            <Home />
          </Route>
          <Route path="/Love-to-dog-blog/posts/:id?">
            <Posts />
          </Route>
          <Route path="/Love-to-dog-blog/gallery">
            <Gallery />
          </Route>
          <Route path="*">

          </Route>
        </Switch>
      </div>
    </Router>
  );

}

export default App;