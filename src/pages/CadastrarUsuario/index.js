import React, { useState, useEffect } from 'react';
import './CadastrarUsuario.css';
import Inputs from '../../components/Inputs';
import Sidebar from '../../components/NovoSideBar';
import UserCard from '../../components/UserCard';
import StatusButton from '../../components/BotaoStatus';

function CadastroUsuario() {
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
    <div className="container-layout">

      <div className="container-left">
        <Sidebar />
      </div>

      <div className="container-right">
        <div className="header">
          <div className='sessao-button'>
              <StatusButton/> 
          </div>
          
          <div className="user-profile">
              <UserCard />
          </div>

        </div>

        <div className="layout-cadastrar-usuario">
          <h3 className="titulo-form">Cadastro Usuario</h3>
          <h5 className="subtitulo-form">Preencha as informações abaixo:</h5>
          <form className="container-form">
              <div className="">
                <Inputs
                  type="text"
                  label="Nome do Cliente"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Digite o nome.."
                  required
                />
              </div>
            <div className='container-inputs'>
              
              <div className="">
                <Inputs
                  type="number"
                  label="CPF"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="">
                <Inputs
                  type="number"
                  label="RG"
                  name="rg"
                  value={formData.rg}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="">
                <Inputs
                  type="number"
                  label="Telefone"
                  name="fone"
                  value={formData.fone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="">
                <Inputs
                  type="email"
                  label="E-mail"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="">
                <Inputs
                  type="password"
                  label="Senha"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="">
                <Inputs
                  type="password"
                  label="Confirmar Senha"
                  name="confirmpassword"
                  value={formData.confirmpassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
              
              <div className="form-check"  style={{ width:'100%' }}>
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
                    name="isVendedor"
                    checked={formData.isUser}
                    onChange={handleChange}
                  />
                  Vendedor
                </label>
              </div>
            {/* Adicione mais campos Inputs conforme necessário */}
            <div className="container-botao-atualizar" >
              <Inputs type="submit" value="atualizar"/>
            </div>
            
          </form>
        </div>

      <div className='footer'>

      </div>
    </div>
  </div>
  );
}

export default CadastroUsuario;
