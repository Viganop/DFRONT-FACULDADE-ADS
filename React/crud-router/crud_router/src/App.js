import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";

function App(){
  const [IsAuthenticated setIsAuthenticated] = useState(false);
  const [contacts, setContacts] = useState([]);

  return(
    <Router>
      <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/cadastro" element={<Cadastro/>}/>
      <Route path="/lista" element={<Lista/>}/>
      <Route path="*" element={<Login/>}></Route>

      </Routes>
    </Router>
  )
}

export default App;