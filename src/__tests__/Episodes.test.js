import React from 'react';
import { shallow } from 'enzyme';
import EpisodesComponent from '../components/swapp/episodes/EpisodesPage/EpisodesComponent';

describe('<EpisodesPage />', () => {
    it('renders without crashing', () => {
        const data = {
            allEpisodes: {
                edges: [
                    {
                        node: {
                            id: 'films.1',
                            title: 'A New Hope',
                            episodeId: 4,
                            image: 'https://m.media-amazon.com/images/I/81r+LN-YReL._SS500_.jpg',
                            openingCrawl: 'It is a period of civil war.Rebel spaceships, strikingfrom a hidden base, have wontheir first victory againstthe evil Galactic Empire.During the battle, Rebelspies managed to steal secretplans to the Empires ultimate weapon, the DEATHSTAR, an armored spacestation with enough powerto destroy an entire planet.Pursued by the Empires sinister agents, PrincessLeia races home aboard herstarship, custodian of thestolen plans that can save herpeople and restorefreedom to the galaxy...',
                        },
                    },
                ],
            },
        },
        wrapper = shallow(<EpisodesComponent data={data} />);
        expect(wrapper).toMatchSnapshot();
    });
});
