import React from 'react';
import { Redirect } from 'react-router';
import { AUTH_MUTATION } from '../../../api/requester';
import { useQuery } from '@apollo/react-hooks';

const SignIn = (props) => {
    const isAuth = useQuery(AUTH_MUTATION).data;
    console.log(isAuth.authenticated);
    if(!isAuth.authenticated){
        return (
            <Redirect to="/login"/>
        )
    }else{
        return (
            <Redirect to="/episodes"/>
        )
    }
}

export default SignIn;