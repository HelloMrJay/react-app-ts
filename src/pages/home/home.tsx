import React, {useState, useEffect} from 'react';
import UserList from '../userList/userList';
import menuItems from "../../config/menu-config";
import './home.css';
import {Layout, Menu, Icon} from 'antd';
import {
  Route,
  useHistory
} from 'react-router-dom';

const {Header, Sider, Content} = Layout;

const Home: React.FC = () => {
  const history = useHistory();
  const [collapsed, setCollapsed] = useState(false);
  const onClick = (params: any) => {
    if (params.key === '0') {
      history.push('/home/userlist')
    }
  };

  useEffect(() => {
    history.location.pathname === '/home' && history.push('/home/userlist');
    document.title = 'react'
  });

  return (
    <Layout className="a-layout-container">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo"/>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']} onClick={onClick}>
          {
            menuItems.map((itm, idx) => {
              return (
                <Menu.Item key={idx}><Icon type={itm.icon}/><span>{itm.name}</span></Menu.Item>
              )
            })
          }
        </Menu>
      </Sider>
      <Layout>
        <Header style={{background: '#fff', padding: 0}}>
          <Icon
            className="trigger ignore"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={() => setCollapsed(!collapsed)}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: 280,
          }}
        >
          <Route path="/home/userlist" component={UserList}></Route>
        </Content>
      </Layout>
    </Layout>
  )
};

export default Home;