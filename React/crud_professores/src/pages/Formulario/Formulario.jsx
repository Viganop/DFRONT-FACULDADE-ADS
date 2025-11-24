import React, { useState } from "react";
import "./Formulario.css";


function Formulario({ professores, setProfessores }) {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [matricula, setMatricula] = useState("");
  const [selectFormacoes, setSelectFormacoes] = useState("");
  const [emailInsitucional, setEmailInstitucional] = useState("");
  const [celular, setCelular] = useState("");
  const [rua, setRua] = useState("");
  const [numeroCasa, setNumeroCasa] = useState("");
  const [complemento, setComplemento] = useState("");
  const [cidade, setCidade] = useState("");
  const [cep, setCep] = useState("");
  const [selectUf, setSelectUf] = useState("");


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

 
  const handleSubmit = (e) => {
    e.preventDefault();

    const novoProfessor = {
      id: Date.now(), 
      nome,
      cpf,
      matricula,
      formacao: selectFormacoes,
      email: emailInsitucional,
      celular,
      rua,
      numero: numeroCasa,
      complemento,
      cidade,
      cep,
      uf: selectUf,
    };
    console.log(professores);
    setProfessores(prevProfessores => [...prevProfessores, novoProfessor]);
    
    console.log("Novo Professor Adicionado:", novoProfessor);
     setNome("");
    setCpf("");
    setMatricula("");
    setSelectFormacoes("");
    setEmailInstitucional("");
    setCelular("");
    setRua("");
    setNumeroCasa("");
    setComplemento("");
    setCidade("");
    setCep("");
    setSelectUf("");
  };

  return (
    <div className="container-form">
      <h1 className="title">Formulário de Cadastro</h1>
      <form onSubmit={handleSubmit}>
        {/* DADOS PESSOAIS */}
        <h2 className="titulo-secundario">Dados Pessoais e Formação</h2>

        <label htmlFor="nome" className="label-form">
          Nome Completo
        </label>
        <input
          id="nome"
          type="text"
          placeholder="Digite seu nome completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label htmlFor="cpf" className="label-form">
          CPF
        </label>
        <input
          id="cpf"
          type="text"
          placeholder="Ex: 123.456.789-10"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />

        <label htmlFor="matricula" className="label-form">
          Número de Matrícula
        </label>
        <input
          id="matricula"
          type="text"
          placeholder="Ex: 12345678-90"
          value={matricula}
          onChange={(e) => setMatricula(e.target.value)}
        />

        <label htmlFor="formacao" className="label-form">
          Formação
        </label>
        <select
          id="formacao"
          value={selectFormacoes}
          onChange={(e) => setSelectFormacoes(e.target.value)}
        >
          {opcoesSelect.map((opcao) => (
            <option
              key={opcao.value}
              value={opcao.value}
              disabled={opcao.value === ""}
            >
              {opcao.label}
            </option>
          ))}
        </select>

        {/* CONTATOS */}
        <h2 className="titulo-secundario">Contatos</h2>

        <label htmlFor="email" className="label-form">
          Email Institucional
        </label>
        <input
          id="email"
          type="email"
          placeholder="henrique@escola.com"
          value={emailInsitucional}
          onChange={(e) => setEmailInstitucional(e.target.value)}
        />

        <label htmlFor="celular" className="label-form">
          Telefone Celular
        </label>
        <input
          id="celular"
          type="number"
          placeholder="(11) 98765-4321"
          value={celular}
          onChange={(e) => setCelular(e.target.value)}
        />

        {/* ENDEREÇO */}
        <h2 className="titulo-secundario">Endereço Residencial</h2>

        <label htmlFor="rua" className="label-form">
          Logradouro (Rua, Av.)
        </label>
        <input
          id="rua"
          type="text"
          placeholder="Ex: Rua Candido Padim"
          value={rua}
          onChange={(e) => setRua(e.target.value)}
        />

        <div className="input-group">
          <div>
            <label htmlFor="numeroCasa" className="label-form">
              Número
            </label>
            <input
              id="numeroCasa"
              type="text"
              placeholder="123"
              value={numeroCasa}
              onChange={(e) => setNumeroCasa(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="complemento" className="label-form">
              Complemento (Opcional)
            </label>
            <input
              id="complemento"
              type="text"
              placeholder="(Opcional)"
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
            />
          </div>
        </div>

        <label htmlFor="cidade" className="label-form">
          Cidade
        </label>
        <input
          id="cidade"
          type="text"
          placeholder="São Carlos"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />

        <div className="input-group">
          <div>
            <label htmlFor="cep" className="label-form">
              CEP
            </label>
            <input
              id="cep"
              type="text"
              placeholder="12345-681"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="uf" className="label-form">
              UF
            </label>
            <select
              id="uf"
              value={selectUf}
              onChange={(e) => setSelectUf(e.target.value)}
            >
              {opcoesUf.map((opcao) => (
                <option
                  key={opcao.value}
                  value={opcao.value}
                  disabled={opcao.value === ""}
                >
                  {opcao.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button type="submit" className="botao-enviar">Cadastrar Professor</button>
      </form>
    </div>
  );
}

export default Formulario;