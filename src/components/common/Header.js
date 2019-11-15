import React from "react";
import { Link } from "react-router-dom";
import { useApolloClient } from '@apollo/react-hooks';

const Header = props => {

    const client = useApolloClient();

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        client.writeData({ data: { authenticated: false } });
    }

    return <header className="navbar">
        <p className="navbarThemeText">SWAPP</p>
        <ul>
            <li><Link to={"/characters"}>Characters</Link></li>
            <li><Link to={"/episodes"}>Episodes</Link></li>
            <a href="#" onClick={handleLogout}>[Logout]</a>
        </ul>
    </header>
}

export default Header;