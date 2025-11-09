import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUserTie, FaUsers } from "react-icons/fa"; // Ícones
import "./Sidebar.css"; // Importa o CSS

function Sidebar() {
  // Lista de itens do menu
  const rotas = [
    {
      path: "/",
      name: "Home",
      icon: <FaHome />,
    },
    {
      path: "/formulario",
      name: "Formulario",
      icon: <FaUsers />,
    },
    {
      path: "/lista",
      name: "Lista",
      icon: <FaUserTie />,
    },
  ];

  return (
    <div className="sidebar">
      <div className="top_section">
        <h1 className="logo">CRUD</h1>
      </div>
      <div className="menu-items">
        {rotas.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            <div className="icon">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
