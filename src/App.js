import React from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './api/index';

const App = () => {

  //todo: fix navigation routes to use the correct links in their respective routes
  //todo: stylize this white page garbage
  //todo: add theme toggling
  //todo: add a way to navigate into /characters and /episode
  //todo: add a way to logout without having to delete localstorage
  //todo: why tf is logging in not redirecting
  //todo: tests
  //todo: remove unused imports
  //todo: lint
  //todo: remove todo's

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
