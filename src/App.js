import React from 'react';
import './App.css';
import Home from './components/welcome/Home/Home';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import SignIn from './components/welcome/SignIn/SignIn';
import EpisodesPage from './components/swapp/episodes/EpisodesPage/EpisodesPage';
import EpisodeDetails from './components/swapp/episodes/EpisodeDetails/EpisodeDetails';
import client from './api'
import CharactersPage from './components/swapp/characters/CharactersPage/CharactersPage';
import CharacterDetails from './components/swapp/characters/CharacterDetails/CharacterDetails';
import StarshipDetails from './components/swapp/starships/StarshipDetails/StarshipDetails';

const App = (props) => {

  //todo: seperate presentational logic so it doesn't look Pepega
  //todo: add theme
  //todo: protect the routes
  //todo: add a way to navbar

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} {...props}/>
          <Route path="/login" exact component={SignIn}/>
          <Route path="/episodes" exact component={EpisodesPage}/>
          <Route path="/episodes/:id" exact component={EpisodeDetails}/>
          <Route path="/characters" exact component={CharactersPage}/>
          <Route path="/characters/:id" exact component={CharacterDetails}/>
          <Route path="/starships/:id" exact component={StarshipDetails}/>
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
