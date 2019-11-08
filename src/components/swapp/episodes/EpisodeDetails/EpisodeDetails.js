import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { EPISODE_QUERY } from '../../../../api/swapp/episode-requester';
import { useParams } from 'react-router-dom';

const EpisodesDetails = () => {
    let { id } = useParams();

    const { loading, error, data } = useQuery(EPISODE_QUERY, {
        variables: { episodeId: id, first: 5 },
    });

    if (loading) return  <p>Loading...</p>;
    if (error) return <p>Error getting episode</p>;

    //todo: add people
    
    return (
    <section id="episodeDetails">
        <div className="episodeDetailsTitle">{data.episode.title}</div>
        <img src={data.episode.image}></img>
        <div className="episodeDetailsDirector">{data.episode.director}</div>
        <div className="episodeDetailsDate">{data.episode.releaseDate}</div>
    </section>
    )
}

export default EpisodesDetails;