import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Cadastre-se ou faça Login!</h1>

      <div>
        <label>email</label>
        <input type="text" name="email"></input>
        <label>senha</label>
        <input type="text" name="senha"></input>
      </div>

    </div>
  );
}

export default App;
