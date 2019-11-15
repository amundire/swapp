import React from 'react';
import { Link } from 'react-router-dom';


const Character = ({ id, name, image })=> {
    return (
        <Link to={`/characters/${id}`} key={id} id={id}>
            <div className="charactersElement">
                <p>{name}</p>
                <img src={image}></img>
            </div>
        </Link>
    )
}

export default Character;