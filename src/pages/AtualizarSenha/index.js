import React, { useState } from 'react';
import './senhaModules.css';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Inputs from '../../components/Inputs';

function AtualizarSenha() {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });

  // Função para lidar com a mudança nos campos do formulário
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode implementar a lógica para atualizar a senha do usuário
    // por meio de uma chamada à API ou outra ação necessária.
    console.log('Dados do formulário:', formData);
  };

  return (
    <div className="layout-senha-container">
        <div className="sessao-lado-esquerdo">
            <Sidebar />
        </div>
        <div className="sessao-lado-direito">
            <div className="header-home">
            <Header />
            </div>
            <div className="justify-content-center layout-container-senha">
                <form>
                <h5 className="subtitulo-form mb-3">Atualizar a senha de: {'user.id'}</h5>
                <div className="row mb-4">
                    <div className="col-md">
                    <Inputs
                        type="password"
                        label="Nova Senha"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Digite a nova senha.."
                        required
                    />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-md">
                    <Inputs
                        type="password"
                        label="Confirmar Nova Senha"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirme a nova senha.."
                        required
                    />
                    </div>
                </div>
                <div className="row">
                    <button className="submit-button" type="submit" onClick={handleSubmit}>
                    Atualizar
                    </button>  
                </div>
                </form>
            </div>
        </div>
    </div>
  );
}

export default AtualizarSenha;
