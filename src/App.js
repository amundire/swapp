import React from 'react';
import './App.css';
import Home from './components/welcome/Home/Home';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import SignIn from './components/welcome/SignIn/SignIn';
import EpisodesPage from './components/swapp/episodes/EpisodesPage/EpisodesPage';
import EpisodeDetails from './components/swapp/episodes/EpisodeDetails/EpisodeDetails';
import client from './api'

const App = (props) => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} {...props}/>
          <Route path="/login" exact component={SignIn}/>
          <Route path="/episodes" exact component={EpisodesPage}/>
          <Route path="/episodes/:id" exact component={EpisodeDetails}/>
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
