import { expect } from 'chai'
import _          from 'lodash';
import { createStore } from 'redux';
import { gameApp }      from '../app/js/makeGame';




describe('making the game board, which is an object of squares, 9 total', () => {
    var store;
    beforeEach(() => {
        store = createStore(gameApp);
    });

    it('should return an object of size 9', () => {
        expect(_.size(store.getState().ticTacGame)).to.equal(9);
    });
});

describe('updating with one or more user marker(s)', () => {
    let store;
    beforeEach(() => {
        store = createStore(gameApp);
    });

    it('should return new game state with correctly placed marker', () => {
        const action = {
            type: 'PLACE_USER_MARKER',
            square: 'a3',
            marker: 'X'
        };
        store.dispatch(action);
        expect(store.getState().ticTacGame.a3).to.equal('X');
    });

    it('should return new game state after a few actions passed.', () => {
        const { user, comp } = store.getState().settings;
        const action1 = {
            type: 'PLACE_USER_MARKER',
            square: 'a3',
            marker: user
        };
        const action2 = {
            type: 'PLACE_USER_MARKER',
            square: 'b3',
            marker: user
        };

        store.dispatch(action1);
        store.dispatch(action2);
        const { ticTacGame } = store.getState();
        expect(ticTacGame.a3).to.equal('X');
        expect(ticTacGame.b3).to.equal('X');

    });
});

describe('Changing the user marker after a selection', () => {

    var store;
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