import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ALL_CHARACTERS } from '../../../api/swapp/character-requester';
import CharactersComponent from '../../../components/swapp/characters/CharactersPage/CharactersComponent';


const CharactersPage = () => {
  const { loading, error, data, fetchMore } = useQuery(ALL_CHARACTERS, {
    variables: { first: 12 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error on getting all episodes: {error}</p>;

  const allPeople = data.allPeople;
  const loadMore = () => {
    fetchMore({
      variables: {
        first: 12,
        after: data.allPeople.pageInfo.endCursor,
      },
      updateQuery: (prev, { fetchMoreResult: { allPeople } }) => {
        if (!data.allPeople.pageInfo.hasNextPage) {
          return prev;
        }

        return {
          allPeople: {
            ...allPeople,
            edges: [...prev.allPeople.edges, ...allPeople.edges],
          },
        };
      },
    });
  };


  return (
    <CharactersComponent allPeople={allPeople} loadMore={loadMore} />
  )
}

export default CharactersPage;