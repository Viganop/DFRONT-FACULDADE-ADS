export default function App(){
  // Função assincrona fetch para atualizar usuário existente
  const updateUser = async () => {
    try{
      const response = await fetch("http:/localhost:3000/users/",
        {
          method : "PUT", // Método atualiza um registro existente
          headers: {"Content-Type":"application/json"},
          body: JSON.stringify({
            name:"Não tenho ideia",
            email:"eunaosei@gmail.com"
          })
        })
        const data = await response.json();
        console.log("Usuário atualizado: ", data);

    }catch(error){
      console.error("Erro de atualização", error)
    }
  }
  return <button onClick = {updateUser}>Update</button>
}