import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'rebass';


const Episode = props => {
    return (
        <Link as={RouterLink} to={`/episodes/${props.id}`} key={props.id} id={props.id}>
            <div className="episodeElement">
                <p>{props.title}</p>
                <img src={props.image}></img>
            </div>
        </Link>
    )
}

export default Episode;