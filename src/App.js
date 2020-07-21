import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <main>
        <h1>Gerador de CNPJ</h1>
        <form>
          <div className="content-left">
            <div className="input-block">
              <input name="cnpj" id="cnpj" placeholder="00.000.000/0001-01" contentEditable="false"></input>
            </div>
            <div className="recent-list">
              <ul>
                <li>00.000.000/0001-01</li>
                <li>00.000.000/0001-01</li>
                <li>00.000.000/0001-01</li>
                <li>00.000.000/0001-01</li>
              </ul>
            </div>
          </div>
          <div className="content-right">
            <button type="submit">Gerar</button>
          </div>
        </form>


      </main>
      <footer></footer>
    </>
  );
}

export default App;
