import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from 'react-router-dom';

import './App.css';
import AddTarefa from './components/AddTarefa/AddTarefa';
import Header from './components/Header/Header'
import Home from './components/Home/Home'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/To-Do-List">
          <Home />        
        </Route>
        <Route exact path="/">
          <Redirect to="/To-Do-List" />
        </Route>
        <Route path="/Nova-Tarefa">
          <AddTarefa />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
