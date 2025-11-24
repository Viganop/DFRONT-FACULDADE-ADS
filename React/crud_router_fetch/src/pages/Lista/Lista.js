import React, { useState } from "react";
import "./Lista.css";

// Recebe as props de API: deleteContact e updateContact
function Lista({ contacts, setContacts, deleteContact, updateContact }) {
  const [editingId, setEditingId] = useState(null); // Use null para melhor clareza
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  // Função de Salvar (PUT) - Torna as alterações persistentes
  const handleSave = async (id) => {
    // 1. Objeto com os dados atualizados
    const updatedContactData = { name: newName, phone: newPhone };

    try {
      // 2. Chama a função de API (PUT)
      const updated = await updateContact(id, updatedContactData); 

      // 3. Se o PUT for bem-sucedido e retornou o objeto, atualiza o estado local
      if (updated) {
        setContacts(
          contacts.map((c) =>
            // Atualiza o contato editado com os dados retornados pela API
            c.id === id ? { ...c, ...updated } : c 
          )
        );
        console.log(`Contato ${id} salvo com sucesso.`);
        setEditingId(null);
      }
    } catch (error) {
      console.error("Erro ao salvar contato:", error);
      // Substituindo alert por console.log, mantendo a mensagem para o usuário no console
      console.log("Falha ao salvar a edição no servidor. Verifique o console.");
    }
  };

  // Função para carregar os dados no formulário de edição
  const handleEdit = (contact) => {
    setEditingId(contact.id);
    setNewName(contact.name);
    setNewPhone(contact.phone);
  };

  // Função de Deletar (DELETE) - Torna a exclusão persistente
  const handleDelete = async (id) => {
    try {
      // 1. Chama a função de API (DELETE)
      const isDeleted = await deleteContact(id);

      // 2. Se o DELETE for bem-sucedido (retorna true), atualiza o estado local
      if (isDeleted) {
        setContacts(contacts.filter((c) => c.id !== id));
        console.log(`Contato ${id} deletado com sucesso.`);
      }
      
    } catch (error) {
      console.error("Erro ao deletar contato:", error);
      console.log("Falha ao deletar o contato no servidor. Verifique o console.");
    }
  };

  // Função para cancelar a edição e resetar o estado
  const handleCancelEdit = () => {
    setEditingId(null);
    setNewName("");
    setNewPhone("");
  };

  return (
    <div className="lista-container">
      <h2>Lista de Contatos</h2>
      {contacts.length === 0 ? (
        <p>Nenhum contato cadastrado.</p>
      ) : (
        <ul>
          {contacts.map((contact) => (
            // Adicionado "contact-item" para melhor estilização, caso necessário
            <li key={contact.id} className="contact-item"> 
              {editingId === contact.id ? (
                // MODO EDIÇÃO
                <>
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                  />
                  <input
                    type="text"
                    value={newPhone}
                    onChange={(e) => setNewPhone(e.target.value)}
                  />
                  <div className="actions">
                    <button onClick={() => handleSave(contact.id)}>Salvar</button>
                    <button onClick={handleCancelEdit} className="cancel-btn">Cancelar</button>
                  </div>
                </>
              ) : (
                // MODO VISUALIZAÇÃO
                <>
                  <span>
                    {contact.name} - {contact.phone}
                  </span>
                  <div className="actions">
                    <button onClick={() => handleEdit(contact)}>Editar</button>
                    <button onClick={() => handleDelete(contact.id)}>
                      Deletar
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Lista;