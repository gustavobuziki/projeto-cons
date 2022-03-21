import { useState } from "react";
import React from "react";
import { FiSearch } from 'react-icons/fi';
import './style.css';


function App() {

  const [input, setImput]= useState('')
  function addClick (){

    alert(" " +input)
  }

  return(
    <div className="container">
      <h1 className="tittle">Buscador CEP</h1>

      <div className="containerInput">
        <input type="number" 
        placeholder="Digite seu CEP..."
        value={input}
        onChange={(e) => setImput(e.target.value)}
        />

        <button className="buttonSearch" onClick={addClick}>
        <FiSearch size={20} color="black"/>
        </button>
      </div>

      <div className="dados">
        <h1>CEP: 8554565</h1>
        <p>Nova Hartz - Rio Grande do Sul</p>
      </div>

    </div>
  )
}

export default App;
