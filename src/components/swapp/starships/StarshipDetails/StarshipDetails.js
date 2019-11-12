import React from 'react';

const StarshipDetails = ({data}) => {

    return (
        <section id="starshipDetails">
            <div className="starshipDetailsLeft">
                {JSON.stringify(data)}
            </div>
            <div className="starshipDetailsRight">
                RADAR CHART
            </div>
        </section>
    )
}

export default StarshipDetails;