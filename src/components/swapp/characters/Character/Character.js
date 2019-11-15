import React from 'react';
import { Link } from 'react-router-dom';


const Character = ({ id, name, image }) => {
    return (
        <div className="charactersElement">
            <Link to={`/characters/${id}`} key={id} id={id}><p>{name}</p></Link>
            <img src={image}></img>
        </div>
    )
}

export default Character;