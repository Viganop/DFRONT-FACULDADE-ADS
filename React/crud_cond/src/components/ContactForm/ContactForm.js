import React, {useEffect, useState} from 'react'
import "./ContactForm.css";

 

function ContactForm({contactToEdit, onSave}){
  const [nome, setNome] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    if(contactToEdit) {
      setNome(contactToEdit.name);
      setPhone(contactToEdit.phone)
    } else {
      setNome('')
      setPhone('')
    }

 const handleSubmit = (e) => { 
    e.preventDefault();
    if (!nome || !phone) {
      alert('Por favor, prencha o telefone'); 
    }
    onmouseleave({id:contactToEdit ? contactToEdit.id: null, nome, phone})
  }; 
    
  }, [contactToEdit])
  return (
    <div className='form-container'>
      <h2>{contactToEdit? 'Cadastrar contato': 'Akterar Contato'}</h2>
      <form>
        <input type='text'
          placeholder='nome'
          value={nome}
          onChange={(e) => setNome(e.target.value)}
 />

        <buttom type='submit'>Salvar</buttom>
      </form>
    </div>
  )
}

export default ContactForm;
