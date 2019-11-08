import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'rebass';


const Character = props => {
    return (
        <Link as={RouterLink} to={`/characters/${props.id}`} key={props.id} id={props.id}>
            <div className="charactersElement">
                <p>{props.name}</p>
                <img src={props.image}></img>
            </div>
        </Link>
    )
}

export default Character;