import React from 'react';

const StarshipDetails = ({ data }) => {

    const currentStarship = data.starship;

    return (
        <section id="starshipDetails">
            <p className="starshipTitle">{currentStarship.name}</p>
            <p className="starshipModel">{currentStarship.model}</p>
            <div className="starshipDetailsLeft">
                <p className="starshipName">{currentStarship.name}</p>
                <img src={`${currentStarship.image}`} alt="starship image" />
                <p className="starshipStat">Class: <span className="starshipStatParam">{currentStarship.starshipClass}</span></p>
                <p className="starshipStat">Cost: <span className="starshipStatParam">{currentStarship.cost}</span></p>
                <p className="starshipStat">Crew: <span className="starshipStatParam">{currentStarship.crew}</span></p>
                <p className="starshipStat">Max atmospheric speed: <span className="starshipStatParam">{currentStarship.maxAtmosphericSpeed}</span></p>
                <p className="starshipStat">Hyperdrive rating: <span className="starshipStatParam">{currentStarship.hyperdriveRating}</span></p>
            </div>
            <div className="starshipDetailsRight">
                RADAR CHART
            </div>
        </section>
    )
}

export default StarshipDetails;