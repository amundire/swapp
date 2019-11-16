import React from 'react';
import { shallow } from 'enzyme';
import StarshipDetails from '../components/swapp/starships/StarshipDetails/StarshipDetails';

describe('<StarshipDetails />', () => {
    it('renders without crashing', () => {
        const data = {
            starship: {
                id: 'starships.1',
                name: 'X-wing',
                model: 'X-wing',
                starshipClass: 'starfighter',
                image: 'https://static.turbosquid.com/Preview/2015/10/14__02_29_23/xwingtopleft_01_open_01.jpgb5dc9c7c-25bc-44f8-88ba-50e41873111aOriginal.jpg',
                cost: 149999,
                maxAtmosphericSpeed: 1050,
                maxMLPerHour: 100,
                hyperdriveRating: 1,
                crew: 1,
            },
        },
            wrapper = shallow(<StarshipDetails data={data} />);
        expect(wrapper).toMatchSnapshot();
    });
});
