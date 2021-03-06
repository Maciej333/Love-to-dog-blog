import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Gallery } from './pages/Gallery';
import { Home } from './pages/Home';
import { Posts } from './pages/Posts';
import { NotFound } from './pages/NotFound';
import { GlobalStyle } from './GlobalStyle';

function App() {

  return (
    <Router>
      <GlobalStyle />
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
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );

}

export default App;