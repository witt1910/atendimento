import React, { Children } from 'react';
import { BrowserRouter, Switch, Route, Redirect, withRouter } from 'react-router-dom';

import { isAuthenticated } from "./services/auth";
import LoginForm from './pages/LoginForm';
import CadastroForm from './pages/CadastroForm';
import AtendimentoLayout from './layout/AtendimentoLayout';

const RotaPrivada = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <AtendimentoLayout {...props} push={props.history.push} >
          {console.log('ALGO', props)}
          <Component {...props} />
        </AtendimentoLayout>
      ) : (
          <Redirect to={{
            pathname: "/login", state: {
              history: props.history, from: props.location
            }
          }}
          />
        )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <RotaPrivada exact path="/" component={() => <h1>Teste</h1>} />
      <Route path="/login" component={LoginForm} />
      <Route path="/user" component={CadastroForm} />
    </Switch>
  </BrowserRouter>
);

export default Routes;