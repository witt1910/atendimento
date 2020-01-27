import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import api from '../../services/api';
import { login } from '../../services/auth';

import './styles.css';

const LoginForm = ({ history: { push } }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/login', {
        email,
        senha
      });
      const token = response.data.token;
      console.log("push", push);
      console.log("Antes do login", response);
      login(token);
      console.log("depois do login antes do push");
      push('/');
      console.log("depois do push")
    } catch (error) {
      console.log("COMO ASSIM!", error.response);
      setErro(error.response.data);
    /*   console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers); */
    }
  }

  return (
    <main>
      <strong>Login</strong>
      {erro && <p className="error-message">{erro}</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            name="senha"
            id="senha"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </main>
  );
};

LoginForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default LoginForm;