import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoMdMenu, IoMdHome, IoIosCalculator, IoMdPerson, IoIosPaper, IoIosRibbon, IoIosPeople, IoIosAddCircleOutline, IoIosBriefcase, IoIosLogOut } from 'react-icons/io';
import './sidebarModules.css';
import LogoLIFE from './Logo_LIFE.png';


function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 768);

  // Verifica o tamanho da tela e recolhe a sidebar em telas menores
  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth < 768);
    };

    handleResize(); // Verificar o tamanho da tela quando o componente for montado
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuClick = () => {
    // Fecha a Sidebar quando um item do menu é clicado em telas menores
    if (window.innerWidth < 768) {
      setIsCollapsed(true);
    }
  };


  return (
    <div className={`side-bar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className={`side-bar-logo ${isCollapsed ? 'collapsed' : ''}`}>
        <img src={LogoLIFE} alt="Logo da Empresa" className="logo-empresa" />
      </div>
      {window.innerWidth < 768 && ( // Renderizar o botão apenas em telas menores
        <button className="toggle-button" onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? <IoMdMenu /> : <IoMdMenu />}
        </button>
      )}
      <div>
        <h5>Home</h5>
        <Link to="/">
          <IoMdHome /> Dashboard
        </Link>
        <br />
      </div>
      <div>
        <h5>Menu</h5>
        <Link to="/simulador">
          <IoIosCalculator /> Simulador
        </Link>
        <br />
        <Link to="/clientes">
          <IoIosPeople /> Clientes
        </Link>
        <br />
        <Link to="/indicar">
          <IoMdPerson /> Indicar
        </Link>
        <br />
      </div>
      <div>
        <h5>Administrativo</h5>
        <Link to="/cadastros">
          <IoIosPaper /> Cadastros
        </Link>
        <br />
        <Link to="/tipos">
          <IoIosAddCircleOutline /> Tipos
        </Link>
        <br />
        <Link to="/servicos">
          <IoIosBriefcase /> Serviços
        </Link>
        <br />
        <Link to="/parceiros">
          <IoIosRibbon /> Parceiros
        </Link>
        <br />
      </div>
      <div className="sair-link">
        <Link to="/login">
          {isCollapsed ? <IoIosLogOut /> : <><IoIosLogOut /> Sair</>}
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
