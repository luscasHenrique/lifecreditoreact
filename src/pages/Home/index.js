import './homeModules.css';
import { IoIosContacts, IoIosTrendingUp, IoMdPaper } from 'react-icons/io';
import CardDados from '../../components/DadosRapidos';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import TabelaIndicados from '../../components/TabelaIndicados';

function Home() {
  const data = [
    { nome: 'Cliente 1', telefone: '(11) 1234-5678', email: 'cliente1@example.com' },
    { nome: 'Cliente 2', telefone: '(22) 9876-5432', email: 'cliente2@example.com' },
    // ... adicione mais dados conforme necessário
  ];

  // Funções para lidar com as ações de 'ver detalhes', 'editar' e 'excluir'
  const handleVerDetalhes = (codigo) => {
    // Lógica para ver detalhes do cliente com o código 'codigo'
    console.log(`Ver detalhes do cliente com código ${codigo}`);
  };

  return (
    <div className="container-home">
      <div className="sessao-lado-esquerdo">
        <Sidebar />
      </div>
      <div className="sessao-lado-direito">
        <div className="header-home">
          <Header />
        </div>
        <div className="container-card-dados">
          <CardDados
            icon={<IoIosContacts />}
            title="Cadastrados"
            subtitle="3"
          />
          <CardDados
            icon={<IoIosTrendingUp />}
            title="Indicados"
            subtitle="15"
          />
          <CardDados
            icon={<IoMdPaper />}
            title="Simulações"
            subtitle="25"
          />
        </div>
        <div className="container-indicados-list">
          <TabelaIndicados
            data={data} 
            handleVerDetalhes={handleVerDetalhes} 
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
