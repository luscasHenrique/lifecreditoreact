import './tabelaIndicadosModules.css';
import { IoMdPaper } from 'react-icons/io';

function TabelaIndicados({ data, handleVerDetalhes }) {
  return ( 
      <table className="tabela-indicados">
        <thead>
          <tr>
            <th colSpan="5" className="titulo-tabela">
              Clientes indicados
            </th>
          </tr>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>E-mail</th>
            <th>Indicado</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.codigo}>
              <td>{item.nome}</td>
              <td>{item.telefone}</td>
              <td className="coluna-email">{item.email}</td>
              <td>
                <span className="icone-detalhes" onClick={() => handleVerDetalhes(item.codigo)}>
                  <IoMdPaper style={{ color: '#007BFF' }} />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  );
}

export default TabelaIndicados;
