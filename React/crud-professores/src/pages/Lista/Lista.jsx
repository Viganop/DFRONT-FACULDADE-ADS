import React, { useState } from "react";
import "./Lista.css";
import PopUp from "../../components/PopUp/PopUp";

function Lista({ professores, setProfessores }) {
  const [editingProfessor, setEditingProfessor] = useState(null); 

   const opcoesSelect = [
    { value: "", label: "Selecione a Formação" },
    { value: "Ciência da Computação", label: "Ciência da Computação" },
    { value: "Mecatrônica", label: "Mecatrônica" },
    { value: "Engenharia de Software", label: "Engenharia de Software" },
  ];

  const opcoesUf = [
    { value: "", label: "Selecione o Estado" },
    { value: "AC", label: "Acre" },
    { value: "AL", label: "Alagoas" },
    { value: "AP", label: "Amapá" },
    { value: "AM", label: "Amazonas" },
    { value: "BA", label: "Bahia" },
    { value: "CE", label: "Ceará" },
    { value: "DF", label: "Distrito Federal" },
    { value: "ES", label: "Espírito Santo" },
    { value: "GO", label: "Goiás" },
    { value: "MA", label: "Maranhão" },
    { value: "MT", label: "Mato Grosso" },
    { value: "MS", label: "Mato Grosso do Sul" },
    { value: "MG", label: "Minas Gerais" },
    { value: "PA", label: "Pará" },
    { value: "PB", label: "Paraíba" },
    { value: "PR", label: "Paraná" },
    { value: "PE", label: "Pernambuco" },
    { value: "PI", label: "Piauí" },
    { value: "RJ", label: "Rio de Janeiro" },
    { value: "RN", label: "Rio Grande do Norte" },
    { value: "RS", label: "Rio Grande do Sul" },
    { value: "RO", label: "Rondônia" },
    { value: "RR", label: "Roraima" },
    { value: "SC", label: "Santa Catarina" },
    { value: "SP", label: "São Paulo" },
    { value: "SE", label: "Sergipe" },
    { value: "TO", label: "Tocantins" },
  ];
  const abrirPopUp = (professor) => {
    setEditingProfessor(professor);
  };

  const fecharPopUp = () => {
    setEditingProfessor(null);
  };
  
  const handleDelete = (id) => {
        setProfessores(professores.filter((p) => p.id !== id));

  };

  const handlePopUpSave = (dadosAtualizados) => {
    setProfessores(
      professores.map((p) =>
        p.id === dadosAtualizados.id 
          ? dadosAtualizados 
          : p
      )
    );
    fecharPopUp(); 
  };

  return (
    <div className="lista-container">
      <h1 className="lista-title">Lista de Professores</h1>
      
      {professores.length === 0 ? (
        <p className="no-data">Nenhum professor cadastrado.</p>
      ) : (
        <table className="professores-table">
          <thead>
          </thead>
          <tbody>
            {professores.map((professor) => (
              <tr key={professor.id}>
                <td>{professor.nome}</td>
                <td>{professor.cpf}</td>
                <td>{professor.formacao}</td>
                <td className="actions-cell">
                  <button 
                    onClick={() => abrirPopUp(professor)} 
                    className="edit-button"
                  >
                    Editar
                  </button>
                  <button 
                    onClick={() => handleDelete(professor.id)} 
                    className="delete-button"
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {editingProfessor && (
        <PopUp
          professor={editingProfessor}
          onClose={fecharPopUp}
          onSave={handlePopUpSave}
          opcoesFormacao={opcoesSelect}
          opcoesUf={opcoesUf}
        />
      )}
    </div>
  );
}

export default Lista;