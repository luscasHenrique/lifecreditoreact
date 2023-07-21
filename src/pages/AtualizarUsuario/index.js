import React, { useState } from 'react';
import './atualizarUsuarioModules.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inputs from '../../components/Inputs';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

function AtualizarUsuario() {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    rg: '',
    telefone: '',
    email: '',
    isAdmin: false,
    isUser: false,
    // Adicione mais campos conforme necessário
  });

  // Função para lidar com a mudança nos campos do formulário
  const handleChange = (event) => {
    const { name, type, checked } = event.target;

    // Verifica qual checkbox está sendo marcado
    if (type === 'checkbox') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        isAdmin: name === 'isAdmin' ? checked : !checked,
        isUser: name === 'isUser' ? checked : !checked,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: event.target.value,
      }));
    }
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode enviar os dados do formulário para o backend ou fazer outras ações necessárias
    console.log(formData);
  };

  return (
    <div className="container-atualizar-usuario">
      <div className="sessao-lado-esquerdo">
        <Sidebar />
      </div>
      <div className="sessao-lado-direito">
        <div className="header-home">
          <Header />
        </div>
        <div className="justify-content-center layout-atualiar-usuario">
          <h3 className="titulo-form mb-4">Cadastro Usuario</h3>
          <form>
            <h5 className="subtitulo-form mb-3">Atualize as informações abaixo:</h5>
            <div className="row mb-4">
              <div className="col-md-6">
                <Inputs
                  type="text"
                  label="Nome do Cliente"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Digite o nome.."
                  required
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-6">
                <Inputs
                  type="number"
                  label="CPF"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <Inputs
                  type="number"
                  label="RG"
                  name="rg"
                  value={formData.rg}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-6">
                <Inputs
                  type="number"
                  label="Telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <Inputs
                  type="email"
                  label="E-mail"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="form-check col-md-2">
                <label>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="isAdmin"
                    checked={formData.isAdmin}
                    onChange={handleChange}
                  />
                  Administrador
                </label>
              </div>
              <div className="form-check col-md-2">
                <label>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="isUser"
                    checked={formData.isUser}
                    onChange={handleChange}
                  />
                  Usuário
                </label>
              </div>
            </div>
            {/* Adicione mais campos Inputs conforme necessário */}
            <button className="submit-button" type="submit" onClick={handleSubmit}>Atualizar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AtualizarUsuario;
