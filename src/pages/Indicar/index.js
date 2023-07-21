import './indicarModules.css';

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import IndicadosView from '../../components/IndicadosView';

function Indicar() {

  const data = [
    { codigo: 1, nome: 'Cliente 1', telefone: '(11) 1234-5678', email: 'cliente1@example.com', indicado: true },
    { codigo: 2, nome: 'Cliente 2', telefone: '(22) 9876-5432', email: 'cliente2@example.com', indicado: false },
    // Adicione mais dados conforme necessário
  ];

  // Função para lidar com a ação de indicar
  const handleIndicar = (codigo) => {
    // Lógica para indicar o cliente com o código 'codigo'
    console.log(`Indicar cliente com código ${codigo}`);
  };
    return (
      <div className="layout-indicar-container">
      <div className="sessao-lado-esquerdo">
        <Sidebar />
      </div>
      <div className="sessao-lado-direito">
        <div className="header-home">
          <Header />
        </div>
        <div className="container-indicado">
          <IndicadosView data={data} handleIndicar={handleIndicar} />
        </div>
      </div>
    </div>
    );
  }
  
  export default Indicar;