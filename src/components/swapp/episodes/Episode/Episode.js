import React from 'react';
import { Link  } from 'react-router-dom';


const Episode = props => {
    return (
        <Link to={`/episodes/${props.id}`} key={props.id} id={props.id}>
            <div className="episodeElement">
                <p>{props.title}</p>
                <img src={props.image}></img>
            </div>
        </Link>
    )
}

export default Episode;