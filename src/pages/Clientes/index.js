import './clientesModules.css';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import TabelaDetalhes from '../../components/TabelaDetalhes'; // Importar o componente TabelaDetalhes

function Clientes() {
  const data = [
    { codigo: 1, nome: 'Cliente 1', telefone: '(11) 1234-5678', email: 'cliente1@example.com' },
    { codigo: 2, nome: 'Cliente 2', telefone: '(22) 9876-5432', email: 'cliente2@example.com' },
    // ... adicione mais dados conforme necessário
  ];

  // Funções para lidar com as ações de 'ver detalhes', 'editar' e 'excluir'
  const handleVerDetalhes = (codigo) => {
    // Lógica para ver detalhes do cliente com o código 'codigo'
    console.log(`Ver detalhes do cliente com código ${codigo}`);
  };

  const handleEditar = (codigo) => {
    // Lógica para editar o cliente com o código 'codigo'
    console.log(`Editar cliente com código ${codigo}`);
  };

  const handleExcluir = (codigo) => {
    // Lógica para excluir o cliente com o código 'codigo'
    console.log(`Excluir cliente com código ${codigo}`);
  };
    return (
      <div className="layout-clientes-container">
        <div className="sessao-lado-esquerdo">
          <Sidebar />
        </div>
        <div className="sessao-lado-direito">
          <div className="header-home">
            <Header />
          </div>
          <div className="container-clientes">
            <TabelaDetalhes 
              data={data} 
              handleVerDetalhes={handleVerDetalhes} 
              handleEditar={handleEditar} 
              handleExcluir={handleExcluir} 
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default Clientes;