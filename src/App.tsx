import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Navigation from './components/Navigation'

import Search from './pages/search/Search';
import Library from './pages/library/Library';

function App() {
  return (
    <Router>
      <div className="bg-black h-screen text-white flex flex-col justify-between">
        <div className="container mx-auto p-4">
          <Switch>
            <Route exact path="/">
              <Redirect to="/library" />
            </Route>
            <Route path="/library">
              <Library />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
          </Switch>
        </div>

        <Navigation />
      </div>
    </Router>
  );
}

export default App;
