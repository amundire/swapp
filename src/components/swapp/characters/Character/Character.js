import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'rebass';


const Character = ({ id, name, image })=> {
    return (
        <Link as={RouterLink} to={`/characters/${id}`} key={id} id={id}>
            <div className="charactersElement">
                <p>{name}</p>
                <img src={image}></img>
            </div>
        </Link>
    )
}

export default Character;