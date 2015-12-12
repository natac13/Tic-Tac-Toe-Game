import { expect } from 'chai'
import _          from 'lodash';

import configureStore  from '../app/store/configureStore';

import { setUserMarker, setCompTurn } from '../app/actions/game';

describe('The game settings and turn flag toggle', () => {
    let store,
        settings;
    beforeEach(() => {
        store = configureStore();
        settings = store.getState().settings;
    });

    it('should start off as false', () => {
        let { compCanPlay } = store.getState();
        expect(compCanPlay).to.equal(false);

    });

    it('should change to true when the action is called', () => {
        store.dispatch(setCompTurn());
        let { compCanPlay } = store.getState();
        expect(compCanPlay).to.equal(true);
    });
});

describe('Changing the user marker reducer', () => {
    let store;
    beforeEach(() => {
        store = configureStore();
    });

    it('should be "X" by default', () => {
        let { settings } = store.getState();
        expect(settings.user).to.equal('X');
    });

    it('should get changed to "O" when the action is called', () => {
        store.dispatch(setUserMarker('O'));
        let { settings } = store.getState();
        expect(settings.user).to.equal('O');
    });

    it('should change the comp marker as well when only setting the user marker', () => {
        store.dispatch(setUserMarker('O'));
        let { settings } = store.getState();
        expect(settings.comp).to.equal('X');
    })
});