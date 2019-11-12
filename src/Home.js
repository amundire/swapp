import React from 'react';
import { AUTH_MUTATION } from './api/requester';
import { useQuery } from '@apollo/react-hooks';
import Signin from './Signin';
import Pages from './pages/index';

const SignIn = () => {
    const isAuth = useQuery(AUTH_MUTATION).data;
    if(!isAuth.authenticated){
        return (
            <Signin/>
        )
    }else{
        return (
            <Pages/>
        )
    }
}

export default SignIn;