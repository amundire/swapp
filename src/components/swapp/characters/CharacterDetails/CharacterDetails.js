import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { CHARACTER_QUERY } from '../../../../api/swapp/character-requester';
import { useParams } from 'react-router-dom';
import Starship from '../../starships/Starship/Starship';

const CharacterDetails = () => {
    let { id } = useParams();

    const { loading, error, data } = useQuery(CHARACTER_QUERY, {
        variables: { characterId: id, first: 5 },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error getting character</p>;

    //todo: add starships

    return (
        <section id="characterDetails">
            <div className="characterDetailsLeft">
                <div className="characterDetailsName">{data.person.Name}</div>
                <img src={data.person.image}></img>
                <div className="characterHeight">{data.person.height}</div>
                <div className="characterMass">{data.person.mass}</div>
            </div>
            <div className="characterDetailsRight">
                <p className="starshipsTitle">Piloted Starships</p>
                <ul>
                    {data.person.starships.edges.map(({ node }) =>
                        <Starship id={node.id} image={node.image} name={node.name} key={node.id} />
                        )}
                </ul>
            </div>
        </section>
    )
}

export default CharacterDetails;