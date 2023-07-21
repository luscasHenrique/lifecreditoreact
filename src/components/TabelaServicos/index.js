import React, { useState } from 'react';
import './tabelaServicosModules.css';
import { IoIosCreate, IoIosTrash } from 'react-icons/io';
import Select from '../Select';

function TabelaServicos({ data, handleEditar, handleExcluir }) {
  const [filtroOperacoes, setFiltroOperacoes] = useState('Todos');

  const opcoesFiltro = [
    { value: 'Todos', label:'Sel. Operação'},
    { value: 'Aquisição', label: 'Aquisição' },
    { value: 'Refinanciamento', label: 'Refinanciamento' },
    { value: 'Crédito empresarial', label: 'Crédito empresarial' },
    { value: 'Construção', label: 'Construção' },
  ];

  const handleFiltroOperacoes = (selectedOption) => {
    setFiltroOperacoes(selectedOption.value);
  };

  return (
    <div>
      <table className="tabela-servicos-detalhes">
        <thead>
          <tr>
            <th colSpan="10" className="titulo-tabela">
              Detalhes dos serviços
            </th>
          </tr>
          <tr>
            <th>ID</th>
            <th>
              <Select
                value={opcoesFiltro.find((option) => option.value === filtroOperacoes)}
                onChange={handleFiltroOperacoes}
                options={opcoesFiltro}
              />
            </th>
            <th>Nome</th>
            <th>Taxa%</th>
            <th>Prazo Máximo</th>
            <th>Idade Máxima</th>
            <th>Prazo Máximo até</th>
            <th>LTV</th>
            <th>Valor Mínimo</th>
            <th>Edição</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((item) => filtroOperacoes === 'Todos' || item.operacao === filtroOperacoes)
            .map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.operacao}</td>
                <td>{item.nome}</td>
                <td>{item.taxa}</td>
                <td>{item.prazomax}</td>
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
    </div>
  );
}

export default TabelaServicos;
