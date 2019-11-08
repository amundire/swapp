import gql from 'graphql-tag.macro';

export const SIGN_IN_MUTATION = gql`
mutation SignIn($email: String!, $password: String!) {
  signIn(email: $email, password: $password) {
    token
  }
}
`;

export const AUTH_MUTATION = gql`
  query IsAuth {
    authenticated @client
  }
`;