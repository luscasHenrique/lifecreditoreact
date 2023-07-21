import React, { useState } from 'react';
import './parceirosModules.css';
import TabelaParceiros from '../../components/TabelaParceiros';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { Link } from 'react-router-dom';

function Parceiros() {
  const [data, setData] = useState([
    {
      id: 1,
      nome: 'Fulano de Tal',
      cpf: '123.456.789-00',
      rg: '9876543',
      telefone:'1299276533',
      email: 'fulano@example.com',
      nivelacesso: 'Administrador',
    },
    {
      id: 2,
      nome: 'Ciclano da Silva',
      cpf: '987.654.321-00',
      rg: '1234567',
      telefone:'3499675429',
      email: 'ciclano@example.com',
      nivelacesso: 'Usuário Comum',
    },
  ]);

  const handleEditar = (codigo) => {
    // Implemente a lógica para editar o item com o código fornecido
    console.log('Editar item:', codigo);
  };

  const handlePassword = (codigo) => {
    // Implemente a lógica para gerenciar a senha do item com o código fornecido
    console.log('Gerenciar senha do item:', codigo);
  };

  const handleExcluir = (codigo) => {
    // Implemente a lógica para excluir o item com o código fornecido
    console.log('Excluir item:', codigo);
  };

  return (
    <div className="layout-parceiros-container">
      <div className="sessao-lado-esquerdo">
        <Sidebar/>
      </div>
      <div className="sessao-lado-direito">
        <div className="header-home">
          <Header/>
        </div>
        <div className="container-parceiros">
          <TabelaParceiros
            data={data}
            handleEditar={handleEditar}
            handlePassword={handlePassword}
            handleExcluir={handleExcluir}
          />
        </div>
      </div>
    </div>
  );
}

export default Parceiros;
