import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Redirect } from "react-router-dom";
import gql from "graphql-tag.macro";
import Signin from "../../Signin";

export const AUTHENTICATED_QUERY = gql`
  query IsAuthenticated {
    authenticated @client
  }
`;

const ProtectedRoute = props => {
    const { data } = useQuery(AUTHENTICATED_QUERY);

    if (data.authenticated) {
        return props.children;
    } else {
        return <Signin />
    }
};

export default ProtectedRoute;