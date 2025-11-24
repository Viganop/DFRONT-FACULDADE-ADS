import React, {useState} from 'react';
import "./Login.css"

function Login({onLogin}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit - (e) => {
        e.preventDefault
        onLogin(username, password)
    };

    return(
        <div className="login-Container">
            <form onSubmit={handleSubmit} className="login-forn"> 
            <h2> Agenda de Contatos</h2>
            <p>Faça login para continuar!</p>
            <input
                type="password"
                placeholder="Senha (123)"
                value={password}
                onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit"></button>
            </form>
        </div>
    )
}