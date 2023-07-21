import 'bootstrap/dist/css/bootstrap.min.css';
import './simuladorModules.css';
import SimuladorComponente from '../../components/SimuladorComponente';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

function Simulador(){
  return (
    <div className="layout-simulador-container">
      <div className="sessao-lado-esquerdo">
        <Sidebar />
      </div>
      <div className="sessao-lado-direito">
        <div className="header-home">
          <Header />
        </div>
        <div className="container-simulador">
          <SimuladorComponente/>
        </div>
      </div>
    </div>
  );
};

export default Simulador;
