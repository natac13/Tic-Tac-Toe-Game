import { expect } from 'chai'
import _          from 'lodash';

// for testing I import the combined reducer function to pass to the createStore
// from Redux to make a new state tree before each test.
import { createStore } from 'redux';
import { gameApp }      from '../app/js/makeGame';

/*** actions ***/
// import addUserMarker from '../app/actions/addUserMarker';
import { addUserMarker } from '../app/actions/board.js';




describe('making the game board, which is an object of squares, 9 total', () => {
    let store;
    beforeEach(() => {
        store = createStore(gameApp);
    });

    it('should return an object of size 9', () => {
        expect(_.size(store.getState().ticTacGame)).to.equal(9);
    });
});

describe('updating with one or more user marker(s) using .dispatch()', () => {
    let store,
        settings;
    beforeEach(() => {
        store = createStore(gameApp);
        settings = store.getState().settings;
    });

    it('should return new game state with correctly placed marker', () => {
        store.dispatch(addUserMarker('a3', settings.user));
        expect(store.getState().ticTacGame.a3).to.equal('X');
    });

    it('should return new game state after a few actions passed.', () => {
        const { user, comp } = store.getState().settings;

        store.dispatch(addUserMarker('a3', settings.user));
        store.dispatch(addUserMarker('b3', settings.user));
        const { ticTacGame } = store.getState();
        expect(ticTacGame.a3).to.equal('X');
        expect(ticTacGame.b3).to.equal('X');

    });
});

describe('Changing the user marker after a selection', () => {

    let store;
    beforeEach(() => {
        store = createStore(gameApp);
    });

    it('should change the settings on the state to X for user', () => {
        const action = {
            type: 'SET_USER_MARKER',
            marker: 'X'
        };
        store.dispatch(action);
        const { user, comp } = store.getState().settings;
        expect(user).to.equal('X');
        expect(comp).to.equal('O');
    });

    it('should change the settings on the state to O for the user', () => {
        const action = {
            type: 'SET_USER_MARKER',
            marker: 'O'
        };
        store.dispatch(action);
        const { user, comp } = store.getState().settings;
        expect(user).to.equal('O');
        expect(comp).to.equal('X');
    });
});