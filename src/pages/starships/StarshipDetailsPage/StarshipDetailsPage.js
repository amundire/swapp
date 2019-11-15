import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { STARSHIP_QUERY } from '../../../api/swapp/starship-requester';
import { useParams } from 'react-router-dom';
import StarshipDetails from "../../../components/swapp/starships/StarshipDetails/StarshipDetails";

const StarshipDetailsPage = () => {
    const { starshipId } = useParams();
    console.log(starshipId);

    const { data, loading, error } = useQuery(STARSHIP_QUERY, {
        variables: { starshipId },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error getting starship data</p>;

    return (
        <StarshipDetails data={data}/>
    )
}

export default StarshipDetailsPage;