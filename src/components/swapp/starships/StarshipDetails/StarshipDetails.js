import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { STARSHIP_QUERY } from '../../../../api/swapp/starship-requester';
import { useParams } from 'react-router-dom';
import Starship from '../../starships/Starship/Starship';

const CharacterDetails = () => {
    const { id } = useParams();

    const { data, loading, error } = useQuery(STARSHIP_QUERY, {
        variables: { starshipId: id },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error getting starship data</p>;

    const { starship } = data;

    //todo: add starships

    return (
        <section id="characterDetails">
            <div className="characterDetailsLeft">
                {JSON.stringify(starship)}
            </div>
            <div className="characterDetailsRight">
                RADAR CHART
            </div>
        </section>
    )
}

export default CharacterDetails;