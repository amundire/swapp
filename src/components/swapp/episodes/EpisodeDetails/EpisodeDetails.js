import React from 'react';
import Character from '../../characters/Character/Character';

const EpisodesDetails = ({ episode, people, loadMore }) => {
    return (
        <section id="episodeDetails">
            <div className="episodeDetailsHeader">
                <div className="imgContainer">
                    <img src={episode.image}></img>
                </div>
                <div className="episodeDetailsTitle">
                    <p className="episodeLabel">Star Wars: Episode I</p>
                    <p className="episodeTitle">{episode.title}</p>
                </div>
            </div>
            <div className="episodeDescription">
                <p className="episodeCrawl">{episode.openingCrawl}</p>
                <div className="episodeDetailsDirector">{episode.director}</div>
                <div className="episodeDetailsDate">{episode.releaseDate}</div>
            </div>
            <div className="charactersList">
                {people.map(person => <Character id={person.node.id} image={person.node.image} name={person.node.name} />)}
            </div>
            <button className="loadMoreButton" onClick={loadMore}>Load More</button>
        </section>
    )
}

export default EpisodesDetails;