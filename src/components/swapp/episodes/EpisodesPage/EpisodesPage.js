import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ALL_EPISODES_QUERY } from '../../../../api/swapp/episode-requester';
import Episode from '../Episode/Episode';

const EpisodesPage = () => {
  const { loading, error, data } = useQuery(ALL_EPISODES_QUERY, {
    variables: { first: 30 },
  });
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error on getting all episodes</p>;

  //return <p>{JSON.stringify(data)}</p>
  return (<section id="episodesList ">
    {data.allEpisodes.edges.map(({ node }) => <Episode id={node.id} image={node.image} title={node.title}/>)}
  </section>
  )
}

export default EpisodesPage;