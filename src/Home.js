import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { AUTH_MUTATION } from './api/requester'
import Signin from './Signin';
import Pages from './pages/index';
import Header from './components/common/Header';
import { Redirect } from 'react-router-dom';

const Home = () => {
    const isAuth = useQuery(AUTH_MUTATION).data;

    const storedTheme = localStorage.getItem('theme');
    let [currentTheme, setTheme] = React.useState(storedTheme || 'lightTheme');

    const themeToggle = () => {
        const newTheme = currentTheme === 'lightTheme' ? 'darkTheme' : 'lightTheme';
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
    };

    React.useEffect(() => {
        document.body.classList = currentTheme;
    }, [currentTheme]);

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