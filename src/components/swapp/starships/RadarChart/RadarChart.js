import RadarChart from 'react-svg-radar-chart';
import { STATS_QUERY } from '../../../../api/swapp/starship-requester';
import { useQuery } from '@apollo/react-hooks';
import React from 'react';

const RadarChartComponent = ({ starship }) => {

    const { data, loading, error } = useQuery(STATS_QUERY, {
        variables: { type: starship.starshipClass },
    });

    if (loading) return <div>Loading</div>;
    if (error) return <p>Error</p>;

    const allStarships = data.allStarships;

    const maxValues = {
        cost: 0,
        maxAtmosphericSpeed: 0,
        maxMLPerHour: 0,
        hyperdriveRating: 0,
        crew: 0
    };

    const captions = {
        cost: 'Cost',
        maxAtmosphericSpeed: 'Max Atm. Speed',
        maxMLPerHour: 'Max Mph',
        hyperdriveRating: 'HyperD Rat.',
        crew: 'Crew',
    };

    const options = {
        size: 500
    };

    allStarships.edges.forEach(element => {
        maxValues.cost = Math.max(element.node.cost, maxValues.cost);
        maxValues.maxAtmosphericSpeed = Math.max(element.node.maxAtmosphericSpeed, maxValues.maxAtmosphericSpeed);
        maxValues.maxMLPerHour = Math.max(element.node.maxMLPerHour, maxValues.maxMLPerHour);
        maxValues.hyperdriveRating = Math.max(element.node.hyperdriveRating, maxValues.hyperdriveRating);
        maxValues.crew = Math.max(element.node.crew, maxValues.crew);
    });

    const starshipData = [
        {
            data: {
                cost: starship.cost / maxValues.cost,
                maxAtmosphericSpeed: starship.maxAtmosphericSpeed / maxValues.maxAtmosphericSpeed,
                maxMLPerHour: starship.maxMLPerHour / maxValues.maxMLPerHour,
                hyperdriveRating: starship.hyperdriveRating / maxValues.hyperdriveRating,
                crew: starship.crew / maxValues.crew,
            },
            meta: { color: '#4bd5ee' },
        }
    ]

    return (
        <div className="starship-radar-chart">
            <RadarChart
                captions={captions}
                data={starshipData}
                size={400}
                options={options} />
        </div>
    );
};

export default RadarChartComponent;