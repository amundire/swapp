import React from 'react';
import Starship from '../../starships/Starship/Starship';

const CharacterDetails = ({data}) => {
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