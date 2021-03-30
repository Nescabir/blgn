import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import NoMatch from './components/noMatch/NoMatch';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
