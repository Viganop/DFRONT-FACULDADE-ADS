 import React from 'react'
import "./Menu.css"

function Menu ({onNavigate, onCreate}){
  return (
   <nav className='menu'>
    <h3 className='menu-title'>Agenda</h3>
    <ul className='menu-list'>
        <li>
            <button className='menu-button' onClick={() => {onCreate()}}>Cadastrar Contato</button>
        </li>
        <li>
            <a href='#' onClick={(e) =>{
                e.preventDefault();
                onNavigate('list');
            }}>Lista de Contatos
            </a>
        </li>
        <li>
            <a href='#' onClick={(e) => {
                e.preventDefault();
                onNavigate("welcome");
            }}>
                Página Inicial
            </a>
        </li>
    </ul>
   </nav>
  )
}

export default Menu;