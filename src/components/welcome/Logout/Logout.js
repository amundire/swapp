import React from 'react';
import { Redirect } from 'react-router-dom';
import client from '../../../api';

const Logout = () => {
  localStorage.removeItem('token');
  client.writeData({ data: { authenticated: false } });
  return <Redirect to="/login" />;
};

export default Logout;