import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Routes from './routes';
import TopMenu from './components/TopMenu';


function App() {
  return (
    <BrowserRouter>
      <TopMenu></TopMenu>
      <main>
        <Routes></Routes>
      </main>
      <footer></footer>
    </BrowserRouter>
  )
};

export default App;