import React from 'react';
import './App.css';
import {  useState } from 'react';
import UserContext from './Context/UserContext';
import GastoMes from './Components/GastosMes';
import AgregarGasto from './Components/AgregarGasto';
import Contador from './Components/Contador';

function App() {

  const [ gastos , setGastos ] = useState ([1500,300,400])

  const userData = {
    user: [gastos, setGastos]
  }
  return (
    <div className="App">
      <header className="App-header">
        <UserContext.Provider value= {userData}>
          <GastoMes />
          <AgregarGasto />
          <Contador />
      </UserContext.Provider>
      </header>
      
    </div>
  );
}

export default App;