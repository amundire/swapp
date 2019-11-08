import { setContext } from 'apollo-link-context';

const authLink = setContext((_, { headers }) => {
  const token = JSON.parse(localStorage.getItem('token')) || {};
  
  return {
    headers: {
      ...headers,
      authorization: token.token ? 'Bearer ' + token.token : ''
    }
  };

});


export default authLink;