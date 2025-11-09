import React, { useState, useEffect } from "react";

function Contador() {
  const [contador, setContador] = useState(0);
  /* 
  useEffect com array de dependencias vazio
  Comportamento será parecido com o ComponentDidMount (montagem)
  useEffect(chamada de função, [] array de dependencias)
  */
  useEffect(() => {
    console.log("Componente Montado!");
  }, []);

  /*
 useEffect com dependencia -> da var de estado 'contador'
 Agirá similar ao componenteDidMount e componentDidUpdate
*/
  useEffect(() => {
    document.title = `Contagem ${contador}`;
    console.log(
      "Componente Atualizado ou montado. Novo valor do contador" + contador
    );

    /**
     * Retorno da função (função de limpeza), pois o return retorna vazio
     * Comportamento similar ao componentWillMount (desmontagem)
     */
    return () => {
      console.log("Função de limpeza executada. O contador será removido!");
    };
  }, [contador]);

  const incrementar = () => {
      setContador(contador + 1);
  };

  return(
   <div>
      <h2>Ciclo de Vida</h2>
      <p>O contador está em: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
   </div>
  );
}

export default Contador;