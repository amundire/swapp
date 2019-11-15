import React from 'react';
import { Link } from 'react-router-dom';


const Starship = props => {
    return (
        <div className="starshipElement">
            <Link to={`/starships/${props.id}`} key={props.id} id={props.id}><p>{props.name}</p></Link>
            <img src={props.image}></img>
        </div>
    )
}

export default Starship;