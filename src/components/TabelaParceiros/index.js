import './tabelaParceirosModules.css';
import { IoIosCreate, IoIosTrash, IoIosKey } from 'react-icons/io';

function TabelaParceiros({ data, handleEditar, handleExcluir, handlePassword }) {

  return (
    <table className="tabela-parceiros-detalhes">
        <thead>
          <tr>
            <th colSpan="8" className="titulo-tabela">
            Usuarios Cadastrados
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
          {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.cpf}</td>
                <td>{item.rg}</td>
                <td>{item.telefone}</td>
                <td>{item.email}</td>
                <td>{item.nivelacesso}</td>
                <td>
                  <span className="icone" onClick={() => handleEditar(item.id)}>
                    <IoIosCreate style={{ color: 'green' }} />
                  </span>
                  <span className="icone" onClick={() => handlePassword(item.id)}>
                    <IoIosKey style={{ color: 'blue' }} />
                  </span>
                  <span className="icone" onClick={() => handleExcluir(item.id)}>
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
