
import './App.css';
import SearchResults from './pages/SearchResults';
import Home from './pages/Home'
import Detail from './pages/Detail';
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifContext'

import { Route } from 'wouter'

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

      </GifsContextProvider>
      </section>
      
    </div>
    </StaticContext.Provider>
  );
}

export default App;
