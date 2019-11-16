import React from 'react';
import { shallow } from 'enzyme';
import CharactersComponent from '../components/swapp/characters/CharactersPage/CharactersComponent';

describe('<CharactersPage />', () => {
    it('renders without crashing', () => {
        const data = {
            allPeople: {
                pageInfo: {
                    hasNextPage: false,
                    endCursor: 'Y3Vyc29yLnBlb3BsZS4yMA==',
                },
                edges: [{
                    node: {
                        id: 'people.1',
                        name: 'Luke Skywalker',
                        image: 'https://links.gunaxin.com/content/images/post_images/Luke_Skywalker_039_s_Original_039_Star_Wars_039_Lightsaber_Is_Going_Up_For_Auction_1544116268_4528.jpg',
                    },
                }
                ],
            },
        };
        const wrapper = shallow(<CharactersComponent allPeople={data.allPeople} />);
        expect(wrapper).toMatchSnapshot();
    });
});
