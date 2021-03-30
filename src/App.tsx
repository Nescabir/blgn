import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';
import Home from './components/home/Home';
import NoMatch from './components/noMatch/NoMatch';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
