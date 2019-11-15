import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ALL_EPISODES_QUERY } from '../../../api/swapp/episode-requester';
import EpisodesComponent from '../../../components/swapp/episodes/EpisodesPage/EpisodesComponent';

const EpisodesPage = () => {
  const { loading, error, data } = useQuery(ALL_EPISODES_QUERY, {
    variables: { first: 30 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error on getting all episodes: {error}</p>;
  
  return (<EpisodesComponent data={data}/>
  )
}

export default EpisodesPage;