import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/To-Do-List">
        
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
