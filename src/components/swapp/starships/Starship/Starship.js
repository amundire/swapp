import React from 'react';
import { Link } from 'react-router-dom';


const Starship = props => {
    return (
        <Link to={`/starships/${props.id}`} key={props.id} id={props.id}>
            <div className="starshipElement">
                <p>{props.name}</p>
                <img src={props.image}></img>
            </div>
        </Link>
    )
}

export default Starship;