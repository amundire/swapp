import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import gql from 'graphql-tag.macro';

import EpisodeDetailsPage from '../pages/episodes/EpisodeDetailsPage/EpisodeDetailsPage';
import EpisodesPage from '../pages/episodes/EpisodesPage/EpisodesPage';
import CharacterDetailsPage from "../pages/characters/CharacterDetailsPage/CharacterDetailsPage";
import CharactersPage from '../pages/characters/CharactersPage/CharactersPage';
import StarshipDetailsPage from '../pages/starships/StarshipDetailsPage/StarshipDetailsPage';
import ProtectedRoute from '../components/common/ProtectedRoute';

export const AUTHENTICATED_QUERY = gql`
  query IsAuthenticated {
    authenticated @client
  }
`;

const Pages = () => {
    return (
        <Switch>
            <ProtectedRoute>
                <Route path="/episodes/:episodeId" component={EpisodeDetailsPage} />
                <Route path="/characters/:characterId" component={CharacterDetailsPage} />
                <Route path="/episodes" component={EpisodesPage} exact />
                <Route path="/characters" component={CharactersPage} exact />
                <Route path="/starships/:starshipId" component={StarshipDetailsPage} />
                <Route path="/" exact component={() =>
                    <Redirect to="/episodes" />
                } />
            </ProtectedRoute>
        </Switch>
    );
};

export default Pages;