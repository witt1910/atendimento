import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

import AtendimentoHeader from '../AtendimentoHeader';
import Menu from '../Menu';

const { Content } = Layout;

const AtendimentoLayout = ({ push, children }) => (
  <Layout style={{ minHeight: '100vh' }}>
    <AtendimentoHeader push={push} />
    <Layout>
      <Menu push={push} />
      <Content
        style={{ margin: '16px 16px' }}>
        {children}
      </Content>
    </Layout>
  </Layout>
);

AtendimentoLayout.propTypes = {
  push: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired

};

export default AtendimentoLayout;