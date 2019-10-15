import React, { useState, useEffect } from 'react';
import { request } from './api';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    async function fetch() {
      const response = await request();
      console.log(response);
      setUsuario(response);
    }
    fetch();
  }, []);

  useEffect(() => {
    console.log("mudou");
  }, [count]);

  function aumentar() {
    setCount(count + 1);
  }

  function diminuir() {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={() => diminuir()}>-</button>
      <button onClick={() => aumentar()}>+</button>
      {usuario ? (
        <p>{usuario.title}</p>
      ) : null}
    </div>
  );
}

export default App;
