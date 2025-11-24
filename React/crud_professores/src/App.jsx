import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar/Sidebar.jsx'; 
import Home from "./pages/Home/Home.jsx";
import Formulario from './pages/Formulario/Formulario.jsx';
import Lista from './pages/Lista/Lista.jsx';

function App() {
  const [professores, setProfessores] = useState([]); 

  return (
    <BrowserRouter>
      <div className="layout-container">
        
        <Sidebar /> 
        
        <main className="content-section">
          <Routes>
            
            <Route 
              path="/" 
              element={<Home />} 
            />
            
            <Route 
              path="/formulario" 
              element={
                <Formulario 
                  professores={professores} 
                  setProfessores={setProfessores} 
                />
              } 
            />
            
            <Route 
              path="/lista" 
              element={
                <Lista 
                  professores={professores} 
                  setProfessores={setProfessores} 
                />
              } 
            />
            
            <Route 
              path="*" 
              element={
                <div className="page-content">
                  <h1>Página não encontrada</h1>
                </div>
              } 
            />
            
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;