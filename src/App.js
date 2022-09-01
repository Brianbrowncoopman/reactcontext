
import './App.css';
import React from 'react';
import { useState } from 'react';
import userContext from './context/UserContext';
import GastoMes from './components/GastosMes';
import AgregarGasto from './components/AgregarGasto';
import Contador from './components/Contador';

function App() {

  const [ gastos , setGastos] =useState ([1500, 300, 400])

  const userData = {
    user: [gastos, setGastos]
  }

  return (
    <div className="App">
      <header className="App-header">
      <userContext.Provider value={userData}>
        <GastoMes/>
        <AgregarGasto/>
        <Contador/>  
      </userContext.Provider>  

      </header>
    </div>
  );
}

export default App;
