
import './App.css';
import SearchResults from './pages/SearchResults';
import Home from './pages/Home'
import Detail from './pages/Detail';
import ErrorPage from './pages/Error';
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifContext'

import { Route, Switch } from 'wouter'

function App() {
  return (
    <StaticContext.Provider value={
      {
        name: 'nperdomodev',
        estudiando: true,
      }
    }>
    <div className="App">
      
      <section className="App-content">
      <GifsContextProvider>
        <Switch>
      <Route 
        component= {Home} 
        path="/"  
        />
      
        <Route 
        component= {SearchResults} 
        path="/search/:keyword/:rating?"  
        />
        <Route 
        component= {Detail} 
        path="/gif/:id"  
        />
        <Route component={ErrorPage} path="/:rest*" />
        </Switch>
      </GifsContextProvider>
      </section>
      
    </div>
    </StaticContext.Provider>
  );
}

export default App;
