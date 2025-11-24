import React, { useState } from "react";
import "./PopUp.css";


function PopUp({ professor, onClose, onSave, opcoesFormacao, opcoesUf }) {
    const [dados, setDados] = useState(professor);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setDados(prev => ({
            ...prev,
            [id]: value
        }));
    };
    const handleSave = (e) => {
        e.preventDefault();
        onSave(dados);
    };

    return (
        <div className="pop-up-container" onClick={onClose}>
            <div className="popup-content" onClick={e => e.stopPropagation()}>
                <button className="popup-close" onClick={onClose}>&times;</button>
                <h2 className="popup-title">Editar Professor: {professor.nome}</h2>
                
                <form onSubmit={handleSave} className="modal-form">
                    
                    <label htmlFor="nome">Nome Completo</label>
                    <input id="nome" type="text" value={dados.nome} onChange={handleChange} />
                    
                    <label htmlFor="cpf">CPF</label>
                    <input id="cpf" type="text" value={dados.cpf} onChange={handleChange} />

                    <label htmlFor="matricula">Matrícula</label>
                    <input id="matricula" type="text" value={dados.matricula} onChange={handleChange} />

                    <label htmlFor="formacao">Formação</label>
                    <select id="formacao" value={dados.formacao} onChange={handleChange}>
                        {opcoesFormacao.map(opcao => (
                            <option key={opcao.value} value={opcao.value}>{opcao.label}</option>
                        ))}
                    </select>

                    <h3 className="popup-section-title">Contatos</h3>
                    <label htmlFor="email">Email Institucional</label>
                    <input id="emailInsitucional" type="email" value={dados.email} onChange={handleChange} /> 
                    
                    <label htmlFor="celular">Celular</label>
                    <input id="celular" type="tel" value={dados.celular} onChange={handleChange} />

                    <h3 className="popup-section-title">Endereço</h3>
                    <label htmlFor="rua">Rua</label>
                    <input id="rua" type="text" value={dados.rua} onChange={handleChange} />
                    
                    <div className="input-group">
                        <div>
                            <label htmlFor="numeroCasa">Número</label>
                            <input id="numeroCasa" type="text" value={dados.numeroCasa} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="complemento">Complemento</label>
                            <input id="complemento" type="text" value={dados.complemento} onChange={handleChange} />
                        </div>
                    </div>

                    <label htmlFor="cidade">Cidade</label>
                    <input id="cidade" type="text" value={dados.cidade} onChange={handleChange} />

                    <div className="input-group">
                        <div>
                            <label htmlFor="cep">CEP</label>
                            <input id="cep" type="text" value={dados.cep} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="uf">UF</label>
                            <select id="uf" value={dados.uf} onChange={handleChange}>
                                {opcoesUf.map(opcao => (
                                    <option key={opcao.value} value={opcao.value}>{opcao.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="popup-actions">
                        <button type="button" onClick={onClose} className="cancel-button">Cancelar</button>
                        <button type="submit" className="save-button-modal">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default PopUp;