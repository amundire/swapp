import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ALL_CHARACTERS } from '../../../../api/swapp/character-requester';
import Character from '../Character/Character';

//todo: load more button

const CharactersPage = () => {
  const { loading, error, data } = useQuery(ALL_CHARACTERS, {
    variables: { first: 30 },
  });
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error on getting all episodes</p>;

  return (<section id="charactersList ">
    {data.allPeople.edges.map(({ node }) => <Character id={node.id} image={node.image} name={node.name}/>)}
  </section>
  )
}

export default CharactersPage;