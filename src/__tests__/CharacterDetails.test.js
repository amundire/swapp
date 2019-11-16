import React from 'react';
import { shallow } from 'enzyme';
import CharacterDetails from '../components/swapp/characters/CharacterDetails/CharacterDetails.js';

describe('<CharacterDetails />', () => {
    it('renders without crashing', () => {
        const data = {
            person: {
                id: 'people.1',
                name: 'Luke Skywalker',
                height: 172,
                mass: 77,
                image: 'https://links.gunaxin.com/content/images/post_images/Luke_Skywalker_039_s_Original_039_Star_Wars_039_Lightsaber_Is_Going_Up_For_Auction_1544116268_4528.jpg',
                homeworld: {
                    name: 'Tatooine',
                },
                species: {
                    name: 'Human',
                },
                starships: {
                    edges: [],
                },
            },
        },
            wrapper = shallow(<CharacterDetails data={data} />);
        expect(wrapper).toMatchSnapshot();
    });
});
