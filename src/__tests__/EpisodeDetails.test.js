import React from 'react';
import { shallow } from 'enzyme';
import EpisodeDetails from '../components/swapp/episodes/EpisodeDetails/EpisodeDetails';

describe('<EpisodeDetails />', () => {
    it('renders without crashing', () => {
        const people = [];
        people[0] = {
            node: {
                id: 'people.1',
                name: 'Luke Skywalker',
                image: 'https://links.gunaxin.com/content/images/post_images/Luke_Skywalker_039_s_Original_039_Star_Wars_039_Lightsaber_Is_Going_Up_For_Auction_1544116268_4528.jpg',
            }
        }
        const episode = {
            id: 'films.2',
            title: 'The Empire Strikes Back',
            episodeId: 5,
            image: 'https://m.media-amazon.com/images/I/81fZHSxCokL._SS500_.jpg',
            director: 'Irvin Kershner',
            releaseDate: '1980-05-17',
            openingCrawl: 'It is a dark time for theRebellion. Although the DeathStar has been destroyed,Imperial troops have driven theRebel forces from their hiddenbase and pursued them acrossthe galaxy.Evading the dreaded ImperialStarfleet, a group of freedomfighters led by Luke Skywalkerhas established a new secretbase on the remote ice worldof Hoth.The evil lord Darth Vader,obsessed with finding youngSkywalker, has dispatchedthousands of remote probes intothe far reaches of space....',
        }

        const wrapper = shallow(<EpisodeDetails episode={episode} people={people} />);
        expect(wrapper).toMatchSnapshot();
    });
});
