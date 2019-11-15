import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag.macro';
import Signin from './Signin';
import Pages from './pages/index';
import Header from './components/common/Header';
import { Redirect } from 'react-router-dom';

export const AUTH_MUTATION = gql`
  query IsAuthenticated {
    authenticated @client
  }
`;

const Home = () => {
    const isAuth = useQuery(AUTH_MUTATION).data;

    return isAuth.authenticated ?
        (
            <>
                <Header />
                <Pages />
                <Redirect to="/episodes" />
            </>
        ) : (
            <>
                <Signin />
                <Redirect to="/login" />
            </>
        );
}

export default Home;