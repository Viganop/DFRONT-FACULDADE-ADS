import { useState, useEffect } from "react";

function TituloDinamico(){
    const [texto, setTexto] = useState("");

    useEffect(() => {
        document.title = texto || "Título dinâmico";
    }, [texto]);

    return(
        <div>
            <p>Digite um texto:  
            <input
                type="text"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                placeholder="Escreva aqui..."/>
            </p>
            <h2>Título: {texto}</h2>
        </div>

    )
}

export default TituloDinamico;