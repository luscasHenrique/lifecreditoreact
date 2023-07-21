import './tabelaDetalhesModules.css';
import { IoIosCreate, IoMdPaper, IoIosTrash } from 'react-icons/io';

function TabelaDetalhes({ data, handleVerDetalhes, handleEditar, handleExcluir }) {
  return (
    
        <div className="tabela-detalhe">
            <table className="tabela-detalhes">
                <thead>
                <tr>
                    <th colSpan="5" className="titulo-tabela">Detalhes dos serviços</th>
                </tr>
                <tr>
                    <th>Código</th>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>E-mail</th>
                    <th>Edição</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item) => (
                    <tr key={item.codigo}>
                    <td>{item.codigo}</td>
                    <td>{item.nome}</td>
                    <td>{item.telefone}</td>
                    <td className="coluna-email">{item.email}</td>
                    <td>
                        <span className="icone-editar" onClick={() => handleVerDetalhes(item.codigo)}>
                        <IoMdPaper style={{ color: '#007BFF' }} />
                        </span>
                        <span className="icone-editar" onClick={() => handleEditar(item.codigo)}>
                        <IoIosCreate style={{ color: 'green' }} />
                        </span>
                        <span className="icone-editar" onClick={() => handleExcluir(item.codigo)}>
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

export default TabelaDetalhes;
