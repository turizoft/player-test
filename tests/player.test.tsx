// See: https://github.com/preactjs/enzyme-adapter-preact-pure

import { h } from 'preact';
import Player from '../src/components/Player/Player';
import { shallow } from 'enzyme';

describe('Initial Test of the player', () => {
    test('Player renders', () => {
        const context = shallow(<Player />);
        expect(context.find('h1').text()).toBe('Preact App');
        expect(context.find('Link').length).toBe(3);
    });
});
