import { useState } from "react";
import "./Login.css";


function Login( {onLogin} ) {

    // Variáveis de estado
    const [ userName, setUserName ] = useState("");
    const [ password, setPassword ] = useState("");


    function handleSubmit(e) {
        e.preventDefault();
        onLogin(userName, password);
    }


    return (
        <div className="loginContainer">
            <form className="loginForm" onSubmit={(e) => handleSubmit(e)}>
                
                <h2>Agenda de Contatos</h2>

                <p>Faça Login para continuar</p>

                <input 
                    type="text"
                    placeholder="Usuário (Admin)"
                    value={userName}
                    onChange={ (e) => setUserName( e.target.value ) }
                />

                <input 
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={ (e) => setPassword( e.target.value ) }
                />

                <button type="submit">
                    Entrar
                </button>

            </form>
        </div>
    )
}

export default Login;