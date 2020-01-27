import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import { Icon, Button } from 'semantic-ui-react';

import { logout } from '../../services/auth';
import logo from '../../assets/images/psi.png';

import './styles.css';

const { Header } = Layout;

const AtendimentoHeader = ({ push }) => (
  <Header className="atendimento-header">
    <Icon name="usb" size='huge' inverted />
    <Button
      className="logout-button"
      inverted color='violet'
      onClick={() => {
        logout();
        push('/login');
      }}
    >
      SAIR
    </Button>
  </Header>
);

AtendimentoHeader.propTypes = {
  push: PropTypes.func.isRequired
};

export default AtendimentoHeader;