import './tabelaTiposModules.css';
import { IoIosCreate, IoIosTrash } from 'react-icons/io';

function TabelaTipos({ data, handleEditar, handleExcluir }) {
  return (
    <table className="tabela-tipos-detalhes">
        <thead>
        <tr>
            <th colSpan="2" className="titulo-tabela">Detalhes dos Tipos</th>
        </tr>
        <tr>
            <th>ID</th>
            <th>Tipo</th>
            <th>Edição</th>
        </tr>
        </thead>
        <tbody>
        {data.map((item) => (
            <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.tipo}</td>
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

export default TabelaTipos;
