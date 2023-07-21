import React, { useState } from 'react';
import './tabelaParceirosModules.css';
import { IoIosCreate, IoIosTrash } from 'react-icons/io';

function TabelaParceiros({ data, handleEditar, handleExcluir }) {

  return (
    <table className="tabela-servicos-detalhes">
        <thead>
          <tr>
            <th colSpan="10" className="titulo-tabela">
              Detalhes dos serviços
            </th>
          </tr>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>RG</th>
            <th>Telefone</th>
            <th>E-mail</th>
            <th>Nível Acesso</th>
            <th>Edição</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((item) => filtroOperacoes === 'Todos' || item.operacao === filtroOperacoes)
            .map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.cpf}</td>
                <td>{item.rg}</td>
                <td>{item.email}</td>
                <td>{item.idademin}</td>
                <td>{item.maxate}</td>
                <td>{item.ltv}</td>
                <td>{item.valormin}</td>
                <td>
                  <span className="icone" onClick={() => handleEditar(item.codigo)}>
                    <IoIosCreate style={{ color: 'green' }} />
                  </span>
                  <span className="icone" onClick={() => handleExcluir(item.codigo)}>
                    <IoIosTrash style={{ color: 'red' }} />
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
    </table>
  );
}

export default TabelaParceiros;
