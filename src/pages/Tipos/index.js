import './tiposModules.css';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import TabelaTipos from '../../components/TabelaTipos'; // Importar o componente TabelaDetalhes

function Tipos() {
  const data = [
    { id: 1, tipo: 'Tipo A' },
    { id: 2, tipo: 'Tipo B' },
    { id: 3, tipo: 'Tipo C' },
  ];

  const handleEditar = (id) => {
    // Lógica para editar o cliente com o código 'codigo'
    console.log(`Editar cliente com ID ${id}`);
  };

  const handleExcluir = (id) => {
    // Lógica para excluir o cliente com o código 'codigo'
    console.log(`Excluir cliente com ID ${id}`);
  };
    return (
      <div className="layout-tipos-container">
        <div className="sessao-lado-esquerdo">
          <Sidebar />
        </div>
        <div className="sessao-lado-direito">
          <div className="header-home">
            <Header />
          </div>
          <div className="container-detalhes-tipos">
            <TabelaTipos 
              data={data} 
              handleEditar={handleEditar} 
              handleExcluir={handleExcluir} 
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default Tipos;