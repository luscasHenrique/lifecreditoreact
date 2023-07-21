import './IndicadosViewModules.css';

function IndicadosView({ data, handleIndicar }) {

  return (
    <table className="tabela-indicados">
      <thead>
        <tr>
          <th colSpan="5" className="titulo-tabela">
            Clientes
          </th>
        </tr>
        <tr>
          <th>Código</th>
          <th>Nome</th>
          <th>Telefone</th>
          <th>E-mail</th>
          <th>Indicado</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.codigo}>
            <td>{item.codigo}</td>
            <td>{item.nome}</td>
            <td>{item.telefone}</td>
            <td className="coluna-email">{item.email}</td>
            <td>{item.indicado ? 'Sim' : 'Não'}</td> {/* Condição para exibir "Sim" ou "Não" */}
            <td>
              <button className="button-indicar" onClick={() => handleIndicar(item.codigo)}>Indicar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default IndicadosView;
