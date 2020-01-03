import React, { useState } from 'react';
import menuItems from '../config/menu-config';
import { Layout, Menu, Icon } from 'antd';
import { useHistory } from 'react-router-dom';
import './index.scss';

const { Header, Sider, Content } = Layout;

interface LayoutProps {
  children?: React.ReactNode;
}

const BasicLayout: React.FC<LayoutProps> = props => {
  const history = useHistory();
  const [collapsed, setCollapsed] = useState(false);
  const onClick = (params: any) => {
    if (params.key === '0') {
      history.push('/home/userlist');
    }
  };

  return (
    <Layout className="a-layout-container ignore">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['0']}
          onClick={onClick}
        >
          {menuItems.map((itm, idx) => {
            return (
              <Menu.Item key={idx}>
                <Icon type={itm.icon} />
                <span>{itm.name}</span>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={() => setCollapsed(!collapsed)}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: 280
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
