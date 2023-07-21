import React, { useState } from 'react';
import './dadosUsuarioModules.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inputs from '../Inputs';

function DadosUsuario() {
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
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode enviar os dados do formulário para o backend ou fazer outras ações necessárias
    console.log(formData);
  };

  return (
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
              name=""
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
        <div className="form-check">
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
        <div className="form-check">
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
        {/* Adicione mais campos Inputs conforme necessário */}
        <button className="submit-button" type="submit" onClick={handleSubmit}>Atualizar</button>
      </form>
    </div>
  );
};

export default DadosUsuario;
