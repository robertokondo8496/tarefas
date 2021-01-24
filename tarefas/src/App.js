import { useState } from 'react';
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

  const [ ultimoId, setUltimoId ] = useState(3);
  const [ tarefas, setTarefas ] = useState([
    { id: 1, completada: true, texto: 'Tarefa A' },
    { id: 2, completada: false, texto: 'Tarefa B' },
    { id: 3, completada: false, texto: 'Tarefa C' }
  ]);

  const setTarefa = (tarefa, completada) => {
    setTarefas(
      tarefas.map(_tarefa => {
        if (_tarefa.id === tarefa.id) {
          return {
            id: tarefa.id,
            completada,
            texto: tarefa.texto
          };
        } else {
          return _tarefa;
        }
      }),
    );
  };

  const adicTarefa = (texto) => {
    const novoId = ultimoId + 1;
    setTarefas([
      ...tarefas,
      {
        id: novoId,
        completada: false,
        texto
      }
    ]);
    setUltimoId(novoId);
  };

  const deleteTarefa = (tarefa) => {
    setTarefas(tarefas.filter((_tarefa) => _tarefa !== tarefa));
  };

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/To-Do-List">
          <Home tarefas={tarefas} setTarefa={setTarefa} deleteTarefa={deleteTarefa}/>        
        </Route>
        <Route exact path="/">
          <Redirect to="/To-Do-List" />
        </Route>
        <Route path="/Nova-Tarefa">
          <AddTarefa adicTarefa={adicTarefa}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
