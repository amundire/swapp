import React from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './api/index';

const App = () => {

  //todo: stylize this white page garbage
  //todo: add theme toggling
  //todo: finish starship details page + add the radarchart component
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
