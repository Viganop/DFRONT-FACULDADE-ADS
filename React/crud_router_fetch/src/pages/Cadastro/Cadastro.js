import React, { useState } from "react";
import "./Cadastro.css";

// Recebe 'addContact' como prop
function Cadastro({ contacts, setContacts, addContact }) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    // Torna a função assíncrona para comunicação com a API
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!name.trim() || !phone.trim()) {
            console.log("Por favor, preencha todos os campos.");
            return; 
        }

        const newContact = { name, phone };

        try {
            // 1. Envia o POST para a API
            const addedContact = await addContact(newContact);
            
            // 2. Se for bem-sucedido, atualiza o estado em App.js
            if (addedContact) {
                setContacts([...contacts, addedContact]);
                // 3. Limpa os campos do formulário
                setName("");
                setPhone("");
                console.log("Contato cadastrado com sucesso!");
            }

        } catch (error) {
            console.error("Falha ao salvar o contato:", error);
        }
    }

    return (
        <div className="cadastro-container">
            <h2>Cadastrar Contato</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Nome:"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <input 
                    type="text"
                    placeholder="Telefone:"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />

                {/* O submit é tratado pelo `onSubmit` do form, o onClick no button não é mais necessário */}
                <button type="submit">Salvar</button>
            </form>
        </div>
    );
}

export default Cadastro;