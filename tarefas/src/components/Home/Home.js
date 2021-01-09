import {
    NavLink,
    Redirect,
    Route,
    Switch,
    useRouteMatch
  } from 'react-router-dom';
  
  import './Home.css';
  import TarefaList from '../TarefaList/TarefaList';
  
  function Home() {
  
    const routeMatch = useRouteMatch();
  
    return (
      <>
        <div className="container row sm-vertical">
          <div className="col sm-full">
            <main>
              <Switch>
                <Route path={`${routeMatch.path}/To-Do-List`}>
                  <TarefaList />
                </Route>
                <Route path={`${routeMatch.path}/Nova-Tarefa`}>
                  <TarefaList />
                </Route>
                <Route path={`${routeMatch.path}/`}>
                  <Redirect to={`${routeMatch.path}/To-Do-List`} />
                </Route>
              </Switch>
            </main>
          </div>
        </div>
      </>
    );
  }
  
  export default Home;