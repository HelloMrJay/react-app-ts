import React, { useState, useEffect } from 'react';
import UserList from '../userList/userList';
import "./home.css";
import { Layout, Menu, Icon } from 'antd';
import {
  Route,
  useHistory
} from "react-router-dom";
const { Header, Sider, Content } = Layout;

const Home: React.FC = () => {
  const history = useHistory();
  const [collapsed, setCollapsed] = useState(false);
  const onClick = (params: any) => {
    if (params.key === '2') {
      history.push('/home/userlist')
    }
  };

  useEffect(() => {
    document.title = 'react'
  })

  return (
    <Layout className="a-layout-container">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={onClick}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span>用户列表</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span>视频列表</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span>下载列表</span>
          </Menu.Item>
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