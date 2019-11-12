import React from 'react';
import Character from '../../characters/Character/Character';

const EpisodesDetails = ({episode, people, loadMore}) => {
    return (
    <section id="episodeDetails">
        <div className="episodeDetailsTitle">{episode.title}</div>
        <img src={episode.image}></img>
        <div className="episodeDetailsDirector">{episode.director}</div>
        <div className="episodeDetailsDate">{episode.releaseDate}</div>
        <div className="episodeCharacters">
        {people.map(person => <Character id={person.node.id} image={person.node.image} name={person.node.name}/>)}
        <button onClick={loadMore}>Load More</button>
        </div>
    </section>
    )
}

export default EpisodesDetails;