import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import authLink from './auth';
import { typeDefs } from './local';

const endpoint = 'http://softuni-swapp-212366186.eu-west-1.elb.amazonaws.com/graphql';

const httpLink = createHttpLink({
    uri: endpoint
  });
const cache = new InMemoryCache();
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
    typeDefs,
    resolvers: {}
});

    
const getToken = () => {
    //doesnt work with null
    const token = JSON.parse(localStorage.getItem('token')) || {};
    
    if (token.token) {
        return true;
    }

    return false;
};

cache.writeData({
    data: { authenticated: getToken() }
});

export default client;