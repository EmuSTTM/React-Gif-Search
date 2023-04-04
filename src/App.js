import { useState } from 'react'
import './App.css';
import ListOfGifs from './components/ListOfGifs'; 

import { Route } from 'wouter'

function App() {
  const [ keyword, setKeyword] = useState('Leon Kennedy')

  return (
    
    <div className="App">
      <section className="App-content">
        <Route 
        component= {ListOfGifs} 
        path="/gif/:keyword"  
        />

        
      </section>
    </div>
  );
}

export default App;
