import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// Importação das páginas
import Login from "./pages/Login/Login.js";
import Lista from "./pages/Lista/Lista.js";
import Home from "./pages/Home/Home.js";
import Cadastro from "./pages/Cadastro/Cadastro.js";
import NavBar from "./components/NavBar/NavBar.js";

const API_URL = 'http://localhost:3000/users'; 

// GET - Buscar contatos
const fetchContacts = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Falha ao buscar contatos');
    return await response.json();
  } catch (error) {
    console.error("Erro no GET:", error);
    return [];
  }
};

// POST - Adicionar contato
const addContact = async (newContact) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newContact),
    });
    if (!response.ok) throw new Error('Falha ao adicionar contato');
    return await response.json(); // Retorna o objeto criado com ID
  } catch (error) {
    console.error("Erro no POST:", error);
  }
};

// PUT - Atualizar contato
const updateContact = async (contactId, updatedContact) => {
  try {
    // Note que usamos `contactId` na URL para o PUT
    const response = await fetch(`${API_URL}/${contactId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedContact),
    });
    if (!response.ok) throw new Error('Falha ao atualizar contato');
    return await response.json();
  } catch (error) {
    console.error("Erro no PUT:", error);
  }
};

// DELETE - Remover contato
const deleteContact = async (contactId) => {
  try {
    // Note que usamos `contactId` na URL para o DELETE
    const response = await fetch(`${API_URL}/${contactId}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Falha ao deletar contato');
    return true; // Retorna true se a operação foi bem-sucedida
  } catch (error) {
    console.error("Erro no DELETE:", error);
  }
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [contacts, setContacts] = useState([]);
  
  // REMOVIDOS: as definições de useState incorretas para as funções de API.

  // 1. Efeito para carregar os contatos do backend no login
  useEffect(() => {
    // Só carrega os dados se o usuário estiver autenticado
    if (isAuthenticated) {
      const loadContacts = async () => {
        const data = await fetchContacts();
        if (data) {
            setContacts(data);
        }
      };
      loadContacts();
    } else {
        // Limpa os contatos ao deslogar
        setContacts([]);
    }
  }, [isAuthenticated]);

  // Função de login
  const handleLogin = (username, password) => {
    if (username === "admin" && password === "123") {
      setIsAuthenticated(true);
      // O useEffect acima irá carregar os contatos após esta mudança de estado
    } else {
      console.log("Usuário ou Senha Inválidos!"); // Substituindo alert
    }
  };

  // Função de Logout
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      {/* Renderização Condicional do Menu */}
      {isAuthenticated && <NavBar onLogout={handleLogout} />}
      <Routes>
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/" />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />

        <Route
          path="/"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
        />
        
        {/* Rota de Cadastro: passando contacts, setContacts e a função de API addContact */}
        <Route
          path="/cadastro"
          element={
            isAuthenticated ? (
              <Cadastro 
                contacts={contacts} 
                setContacts={setContacts}
                addContact={addContact} 
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Rota de Lista: passando contacts, setContacts e as funções de API deleteContact e updateContact */}
        <Route
          path="/lista"
          element={
            isAuthenticated ? (
              <Lista
                contacts={contacts}
                setContacts={setContacts}
                deleteContact={deleteContact} 
                updateContact={updateContact}
               />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}
export default App;