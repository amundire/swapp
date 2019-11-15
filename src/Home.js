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

    const storedTheme = localStorage.getItem('theme');
    let [theme, setTheme] = React.useState(storedTheme || 'lightTheme');

    const themeToggle = () => {
        const newTheme = theme === 'lightTheme' ? 'darkTheme' : 'lightTheme';
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
    };

    React.useEffect(() => {
        document.body.classList = theme;
    }, [theme]);

    return isAuth.authenticated ?
        (
            <>
                <Header themeToggle={themeToggle} />
                <Pages />
                <Redirect to="/episodes" />
            </>
        ) : (
            <>
                <Signin themeToggle={themeToggle} />
                <Redirect to="/login" />
            </>
        );
}

export default Home;