import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { EPISODE_QUERY } from '../../../api/swapp/episode-requester';
import { useParams } from 'react-router-dom';
import EpisodesDetails from '../../../components/swapp/episodes/EpisodeDetails/EpisodeDetails';

const EpisodesDetailsPage = () => {
    let { episodeId } = useParams();

    const { loading, error, data, fetchMore } = useQuery(EPISODE_QUERY, {
        variables: { episodeId, first: 5 },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error getting episode: {error}</p>;

    const {
        episode,
        episode: {
            people: {
                pageInfo: { hasNextPage, endCursor },
            },
        },
    } = data;

    const people = episode.people.edges;
    const loadMore = () => {
        fetchMore({
            variables: {
                first: 5,
                after: data.episode.people.pageInfo.endCursor,
            },
            updateQuery: (prev, { fetchMoreResult: { episode } }) => {
                if (!data.episode.people.pageInfo.hasNextPage) {
                    return prev;
                }

                return {
                    episode: {
                        ...episode,
                        people: {
                            ...prev.episode.people,
                            ...episode.people,
                            edges: [...prev.episode.people.edges, ...episode.people.edges],
                        },
                    },
                };
            },
        });
    };

    return (<EpisodesDetails episode={episode} people={people} loadMore={loadMore} />)
}

export default EpisodesDetailsPage;