import React, { useState } from 'react';
import { IoIosNotificationsOutline } from 'react-icons/io';
import './headerModules.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ left: 0, top: 0 });

  // Função para alternar o estado do menu flutuante (sair)
  const handleMenuToggle = (event) => {
    const { left, bottom } = event.target.getBoundingClientRect();
    setIsMenuOpen(!isMenuOpen);
    setMenuPosition({ left, top: bottom });
  };

  // Supondo que você tenha o nome do usuário armazenado em uma variável chamada "userName"
  const userName = "Nome do Usuário";

  return (
    <header className="header">
      {/* Ícone de sino no canto esquerdo */}
      <div className="sino-icon">
        <IoIosNotificationsOutline />
      </div>

      {/* Nome do usuário no canto direito */}
      <div className="usuario-container">
        <div className="usuario-nome" onClick={handleMenuToggle}>
          Olá, {userName}
        </div>

        {/* Janela flutuante (menu) */}
        {isMenuOpen && (
          <div className="menu-flutuante" style={{ left: menuPosition.left, top: menuPosition.top }}>
            <ul className="menu-lista">
              <li>Sair</li>
              {/* Adicione outras opções do menu aqui, se necessário */}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
