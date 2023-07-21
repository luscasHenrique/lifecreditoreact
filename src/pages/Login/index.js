import React from 'react';
import './loginModules.css';
import LogoLIFE from './Logo_LIFE.png';
import Inputs from '../../components/Inputs';

function Login() {
  return (
    <div className="section-login">
      <div className="form-login">
        <div className="login-logo">
          <img src={LogoLIFE} alt="Logo da Empresa" className="logo-empresa-login" />
        </div>
        <h5 className="acessar-texto">Acessar</h5>

        <div>
          <Inputs
            type="email"
            label="E-mail"
            name="email"
            value=""
            onChange=""
            placeholder="Digite o email.."
            required
          />
        </div>
        <div>
          <Inputs
            type="password"
            label="Senha"
            name="senha"
            value=""
            onChange=""
            placeholder="Digite a senha.."
            required
          />
        </div>
        <div className="lembrar-login">
          <input type="checkbox" id="lembrar" />
          <label htmlFor="lembrar">Lembrar</label>
        </div>
        <div className="botao-login">
          <button type="submit">Entrar</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
