import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { Menu } from "./components/Menu";
import { Contato } from "./pages/Contato/Contato";
import { Home } from "./pages/Home/Home";

import { Servicos } from "./pages/Servicos/Servicos";

function App() {
  return (
    <>
      <BrowserRouter>
      <Menu/>
        <Routes> 
          <Route path='/home' element={<Home />}></Route>
          
          <Route path='/contato' element={<Contato />}></Route>
          <Route path='/servicos' element={<Servicos />}></Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
