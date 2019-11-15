import React from 'react';
import Starship from '../../starships/Starship/Starship';

const CharacterDetails = ({ data }) => {
    return (
        <section id="characterDetails">
            <p className="characterDetailsName">{data.person.name}</p>
            <div className="characterDetailsDivisor">
                <div className="characterDetailsLeft">
                    <p className="characterDetailsName">{data.person.name}</p>
                    <img src={data.person.image}></img>
                    <div className="characterHeight">Height: {data.person.height}</div>
                    <div className="characterMass">Weight: {data.person.mass}</div>
                    <div className="characterMass">Species: {data.person.species.name}</div>
                    <div className="characterMass"> {data.person.homeworld.name}</div>
                </div>
                <div className="characterDetailsRight">
                    <p className="starshipsTitle">Piloted Starships</p>
                    <ul>
                        {data.person.starships.edges.map(({ node }) =>
                            <Starship id={node.id} image={node.image} name={node.name} key={node.id} />
                        )}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default CharacterDetails;