import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import './App.css';
import Routes from './routes';


function App() {
  return (
    <BrowserRouter>
      <main>
        <nav>
          <ul>
            <li>
              <Link to="/">CNPJ</Link>
            </li>
            <li>
              <Link to="/rut">RUT</Link>
            </li>
            <li>
              <Link to="/nick">Nick</Link>
            </li>
            <li>
              <Link to="/hash">Hash</Link>
            </li>
          </ul>
        </nav>
        <Routes></Routes>
      </main>
      <footer></footer>
    </BrowserRouter>
  )
};

export default App;