import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { CHARACTER_QUERY } from '../../../api/swapp/character-requester';
import { useParams } from 'react-router-dom';
import CharacterDetails from '../../../components/swapp/characters/CharacterDetails/CharacterDetails';

const CharacterDetailsPage = () => {
    let { characterId } = useParams();

    const { loading, error, data } = useQuery(CHARACTER_QUERY, {
        variables: { characterId, first: 5 },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error getting character: {error}</p>;

    return (
        <CharacterDetails data={data}/>
    )
}

export default CharacterDetailsPage;