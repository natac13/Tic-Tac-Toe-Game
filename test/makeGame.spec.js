import { expect } from 'chai'
import _          from 'lodash';


import configureStore  from '../app/store/configureStore';

/*** actions ***/
import * as actions from '../app/actions/game';

/*** full board test ***/
import boardFull from '../app/utils/AI/boardFull';




describe('making the game board, which is an object of squares, 9 total', () => {
    let store;
    beforeEach(() => {
        store = configureStore();
    });

    it('should return an object of size 9', () => {
        expect(_.size(store.getState().ticTacGame)).to.equal(9);
    });
});

describe('updating with one or more user marker(s) using .dispatch()', () => {
    let store,
        settings;
    beforeEach(() => {
        store = configureStore();
        settings = store.getState().settings;
    });

    it('should return new game state with correctly placed marker', () => {
        store.dispatch(actions.addMarker('a3', settings.user));
        expect(store.getState().ticTacGame.a3).to.equal('X');
    });

    it('should return new game state after a few actions passed.', () => {
        const { user, comp } = store.getState().settings;

        store.dispatch(actions.addMarker('a3', settings.user));
        store.dispatch(actions.addMarker('b3', settings.user));
        const { ticTacGame } = store.getState();
        expect(ticTacGame.a3).to.equal('X');
        expect(ticTacGame.b3).to.equal('X');

    });
});
/*** Selecting the marker for the User ***/
describe('Changing the user marker after a selection', () => {

    let store;
    beforeEach(() => {
        store = configureStore();
    });

    it('should change the settings on the state to X for user', () => {
        store.dispatch(actions.setUserMarker('X'));
        const { user, comp } = store.getState().settings;
        expect(user).to.equal('X');
        expect(comp).to.equal('O');
    });

    it('should change the settings on the state to O for the user', () => {
        store.dispatch(actions.setUserMarker('O'));
        const { user, comp } = store.getState().settings;
        expect(user).to.equal('O');
        expect(comp).to.equal('X');
    });
});

/*** Clearing the Game Board ***/
describe('Determining a full board and clearing or resetting the game back to the start', () => {
    let squares = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'],
        store,
        settings;
    beforeEach(() => {
        store = configureStore();
        settings = store.getState().settings;
    });

    it('should identify a full game board', () => {
        squares.map((square, index) => {
            let mark = index % 2 === 0 ? settings.user : settings.comp;
            store.dispatch(actions.addMarker(square, mark))
        });
        const { ticTacGame: gameBoard } = store.getState();
        expect(boardFull(gameBoard)).to.equal(true);
    });

    it('should clear a full game board', () => {
        squares.map((square, index) => {
            let mark = index % 2 === 0 ? settings.user : settings.comp;
            store.dispatch(actions.addMarker(square, mark))
        });
        store.dispatch(actions.clearBoard());
        const { ticTacGame: gameBoard } = store.getState();
        expect(boardFull(gameBoard)).to.equal(false);
    })
});