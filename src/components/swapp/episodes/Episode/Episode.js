import React from 'react';
import { Link } from 'react-router-dom';


const Episode = props => {
    return (
        <div className="episodeElement">
            <img src={props.image}></img>
            <Link to={`/episodes/${props.id}`} key={props.id} id={props.id}><p className="episodeTitle">{props.title}</p></Link>
            <p className="episodeDesc">{props.openingCrawl}</p>
        </div>
    )
}

export default Episode;