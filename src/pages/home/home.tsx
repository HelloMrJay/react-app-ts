import React from 'react';
import UserList from '../userList/userList';
import './home.scss';
import { Route } from 'react-router-dom';
import BasicLayout from '../../layout/BasicLayout'

const Home: React.FC = () => {
  return (
    <BasicLayout>
      <Route path="/home/userlist" component={UserList}></Route>
    </BasicLayout>
  )
};

export default Home;