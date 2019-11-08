import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'rebass';


const Starship = props => {
    return (
        <Link as={RouterLink} to={`/starships/${props.id}`} key={props.id} id={props.id}>
            <div className="starshipElement">
                <p>{props.name}</p>
                <img src={props.image}></img>
            </div>
        </Link>
    )
}

export default Starship;