import { useState } from "react";
import React from "react";
import { FiSearch } from 'react-icons/fi';
import './style.css';
import api from "./services/api";


function App(){

  const [input, setImput]= useState('')
  const [cep, setCep] = useState({});
  
  async function addClick (){

    //01001000/json/

    if (input === ''){
      alert("Preencha um cep!")
      setImput("")
      return;
    }

    try{
      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setImput("")
    
    }catch{
      alert("Cep invalido!");
      setImput("")
    }

  }

  return(
    <div className="container">
      <h1 className="tittle">Buscador CEP</h1>

      <div className="containerInput">
        <input type="text" 
        placeholder="Digite seu CEP..."
        value={input}
        onChange={(e) => setImput(e.target.value)}
      /> 

        <button className="buttonSearch" onClick={addClick}>
        <FiSearch size={20} color="black"/>
        </button>
      </div>

      
      {Object.keys(cep).length > 0 &&( 
        <div className="dados">
        <h1> CEP: {cep.cep}</h1>

        <span>{cep.logradouro}</span>
        <span>Complemento {cep.complemento}</span>
        <span>{cep.bairro}</span>
        <span>{cep.localidade} - {cep.uf}</span>
      </div>

      )}

    </div>
  )
}

export default App;
