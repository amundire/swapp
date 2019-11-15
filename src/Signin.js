import React, { useState } from 'react';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { SIGN_IN_MUTATION } from './api/requester';


const Signin = (props) => {
    const [inputEmail, setEmail] = useState("");
    const [inputPassword, setPassword] = useState("");

    const client = useApolloClient();
    const [login, { error }] = useMutation(SIGN_IN_MUTATION, {
        onCompleted: ({ signIn: loginData }) => {
            const user = {
                token: loginData
            };
            localStorage.setItem('token', JSON.stringify(user.token));
            //learn how to spell authenticated you autist
            client.writeData({ data: { authenticated: true } });
        }
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        login({ variables: { email: inputEmail, password: inputPassword } });
    }

    const onLoginThemeTextClick = (e) => {
        e.preventDefault();
        props.themeToggle();
    }

    return (
        <div id="LoginFormGroup">
            <p id="LoginThemeText" onClick={onLoginThemeTextClick}>SWAPP</p>
            <form id="LoginForm" onSubmit={handleSubmit}>
                <input type="text" placeholder="email" name="email" onChange={e => setEmail(e.target.value)}>
                </input>
                <input type="password" placeholder="********" name="password" onChange={e => setPassword(e.target.value)}>
                </input>
                <button type="submit" onClick={handleSubmit}>login</button>
            </form>
        </div>
    )

}

export default Signin;