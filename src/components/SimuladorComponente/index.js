import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './simuldadorComponenteModules.css';
import Inputs from '../../components/Inputs';
import Select from '../../components/Select';

const SimuladorComponente = () => {
  const [cliente, setCliente] = useState({
    nome: '',
    dataNascimento: '',
    telefone: '',
    email: '',
    tipoEmprestimo: '',
    tipoOperacao: '',
    valorImovel: '',
    valorFinanciamento: '',
    prazo: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCliente((prevCliente) => ({ ...prevCliente, [name]: value }));
  };

  const handleSimular = (event) => {
    event.preventDefault();
    // Lógica para simular o empréstimo
    console.log('Simulando empréstimo:', cliente);
  };

  const handleResetar = () => {
    setCliente({
      nome: '',
      dataNascimento: '',
      telefone: '',
      email: '',
      tipoEmprestimo: '',
      valorImovel: '',
      valorFinanciamento: '',
      prazo: ''
    });
  };

  return (
    <div className="layout-simulador container">
      <div className="justify-content-center layout-form">
        <h3 className="titulo-simulador mb-4">Simulador</h3>
        <form className="simulador-form">
          <h5 className="subtitulo-simulador mb-3">Preencha as informações abaixo para realizar a simulação:</h5>
          <div className="row mb-4">
            <div className="col-md-6">
              <Inputs
                type="text"
                label="Nome do Cliente"
                name="nome"
                value={cliente.nome}
                onChange={handleChange}
                placeholder="Digite o nome.."
                required
              />
            </div>
            <div className="col-md-6">
              <Inputs
                type="date"
                label="Data de Nascimento"
                name="dataNascimento"
                value={cliente.dataNascimento}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-6">
              <Inputs
                label="Telefone"
                type="number"
                name="telefone"
                value={cliente.telefone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <Inputs
                type="text"
                label="E-mail"
                name="email"
                value={cliente.email}
                onChange={handleChange}
                placeholder="Digite o email.."
                required
              />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-6">
              <Select
                label="Operação"
                name="tipoOperacao"
                value={cliente.tipoOperacao}
                options={[
                  { value: 'Aquisicao', label: 'Aquisição' },
                  { value: 'Refinanciamento', label: 'Refinanciamento' },
                  { value: 'CreditoEmpresarial', label: 'Crédito Empresarial' },
                  { value: 'Construcao', label: 'Construção' },
                ]}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <Select
                label="Tipo de empréstimo"
                name="tipoEmprestimo"
                value={cliente.tipoEmprestimo}
                options={[]}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-4">
              <Inputs
                type="number"
                label="Valor do Imóvel"
                name="valorImovel"
                value={cliente.valorImovel}
                onChange={handleChange}
                placeholder="Digite valor do imóvel.."
                required
              />
            </div>
            <div className="col-md-4">
              <Inputs
                type="number"
                label="Valor do Financiamento"
                name="valorFinanciamento"
                value={cliente.valorFinanciamento}
                onChange={handleChange}
                placeholder="Digite valor do financiamento.."
                required
              />
            </div>
            <div className="col-md-4">
              <Inputs
                type="number"
                label="Prazo"
                name="prazo"
                value={cliente.prazo}
                onChange={handleChange}
                placeholder="Digite o prazo.."
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 botoes-action d-flex justify-content-between">
              <button type="submit" onClick={handleSimular} className="submit-button">Simular</button>
              <button type="button" onClick={handleResetar} className="reset-button">Resetar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SimuladorComponente;
