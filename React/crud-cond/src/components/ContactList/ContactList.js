import React from 'react';
import "./ContactList.css";

function ContactList({ contacts, onEdit, onDelete }) {
  return (
    <div className='list-container'>
      <h2>Lista de Contatos</h2>
      {/* CORRECTION 1: 'lenght' is misspelled. 
      */}
      {contacts.length > 0 ? 
      (
        <ul>
          {/*
          */}
          {contacts.map((contact) => (
            <li key={contact.id}>
              <div>
                {
                }
                <span>{contact.name}</span>
                <span>{contact.phone}</span>
              </div>
              <div>
                <button onClick={() => onEdit(contact)}>Alterar</button>
                {
                }
                <button onClick={() => onDelete(contact.id)}>Deletar</button>
              </div>
            </li>
          ))}
        </ul> 
      ) : (
        <p>Nenhum contato cadastrado</p>
      )}

    </div>
  )
}

export default ContactList;