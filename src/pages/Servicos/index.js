import './servicosModules.css';

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import TabelaServicos  from '../../components/TabelaServicos';

function Servicos() {
  const data = [
    {
      id: 1,
      operacao: 'Aquisição',
      nome: 'Serviço 1',
      taxa: 2.5,
      prazomax: 24,
      idademin: 18,
      maxate: 65,
      ltv: 80,
      valormin: 5000,
    },
    {
      id: 2,
      operacao: 'Refinanciamento',
      nome: 'Serviço 2',
      taxa: 3.2,
      prazomax: 36,
      idademin: 21,
      maxate: 70,
      ltv: 75,
      valormin: 10000,
    },
    {
      id: 52,
      operacao: 'Refinanciamento',
      nome: 'Serviço 2',
      taxa: 3.2,
      prazomax: 36,
      idademin: 21,
      maxate: 70,
      ltv: 75,
      valormin: 10000,
    },
    {
      id: 22,
      operacao: 'Refinanciamento',
      nome: 'Serviço 2',
      taxa: 3.2,
      prazomax: 36,
      idademin: 21,
      maxate: 70,
      ltv: 75,
      valormin: 10000,
    },
    // Adicione mais dados conforme necessário
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
      <div className="layout-servicos-container">
      <div className="sessao-lado-esquerdo">
        <Sidebar />
      </div>
      <div className="sessao-lado-direito">
        <div className="header-home">
          <Header />
        </div>
        <div className="container-servicos">
          <TabelaServicos 
            data={data} 
            handleEditar={handleEditar} 
            handleExcluir={handleExcluir} 
          />
        </div>
      </div>
    </div>
    );
  }
  
  export default Servicos;