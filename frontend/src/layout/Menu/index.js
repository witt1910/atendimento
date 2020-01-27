import React, { useState } from 'react';
import { Menu as MenuAntd, Icon, Layout } from 'antd';

const { Sider } = Layout;

const Menu = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={setCollapsed}
    >
      <MenuAntd
        theme="dark"
        defaultSelectedKeys={[['/']]}
        mode="inline"
      >
        <MenuAntd.Item
          key="/atendimentos"
        >
          <Icon type="file" />
          <span>Atendimentos</span>
        </MenuAntd.Item>
      </MenuAntd>
  </Sider>
  );
};

export default Menu;