import React from "react";

export default function App(){

  //Criar a função assincrona para adicionar usuário
  const addUser = async () => {
    try{
      const response = await fetch("http://localhost:3000/users", 
      {
        method : "POST", // Método post para inserção
        headers: {"Content-Type":"Application/json"}, // corpo JSON
        body: JSON.stringify({name:"Antônio Silva", "email":"toni@gmail.com"})
      }
    );

    const data = await response.json(); // Recebe o usuário com ID
    console.log("Usuario Criado:", data); 

    }catch(error){
      console.error("Erro ao adicionar", error);
    }
  }
  <button onClick={addUser}>Inserrir</button>
}