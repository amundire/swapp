import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag.macro";
import Signin from "../../Signin";
import { Redirect } from "react-router-dom";

export const AUTH_MUTATION = gql`
  query IsAuth {
    authenticated @client
  }
`;

const ProtectedRoute = props => {
  const { data } = useQuery(AUTH_MUTATION);

  if (data.authenticated) {
    return props.children;
  } else {
    return (
      <>
        <Signin />
        <Redirect to="/login" />
      </>
    )

  }
};

export default ProtectedRoute;