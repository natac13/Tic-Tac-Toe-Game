import { expect } from 'chai'
import _          from 'lodash';


import configureStore  from '../app/store/configureStore';

/*** actions ***/
import * as actions from '../app/actions/game';

import boardFull from '../app/utils/AI/boardFull';
import findResults from '../app/utils/AI/helpers/findResults';


describe('Find the results at the end of game', () => {
    let store,
        settings,
        user,
        comp;
    beforeEach(() => {
        store = configureStore();
        settings = store.getState().settings;
        comp = settings.comp;
        user = settings.user;
    });


    it('should determine a tie when there are no lines of 3 matching markers on a full board', () => {
        store.dispatch(actions.addMarker('a1', user));
        store.dispatch(actions.addMarker('a2', comp));
        store.dispatch(actions.addMarker('a3', user));
        store.dispatch(actions.addMarker('b1', user));
        store.dispatch(actions.addMarker('b2', user));
        store.dispatch(actions.addMarker('b3', comp));
        store.dispatch(actions.addMarker('c1', comp));
        store.dispatch(actions.addMarker('c2', user));
        store.dispatch(actions.addMarker('c3', comp));
        let { ticTacGame: gameBoard } = store.getState();
        expect(findResults(gameBoard)).to.match(/tie/i);
    });
    it('should determine a win for X when there is 3 in the bottom row', () => {
        store.dispatch(actions.addMarker('c1', user));
        store.dispatch(actions.addMarker('c2', user));
        store.dispatch(actions.addMarker('c3', user));
        let { ticTacGame: gameBoard } = store.getState();
        expect(findResults(gameBoard)).to.match(/x.+winner/i);
    });
    it('should determine a win for O when there is 2 in the first column', () => {
        store.dispatch(actions.addMarker('a1', comp));
        store.dispatch(actions.addMarker('b1', comp));
        store.dispatch(actions.addMarker('c1', comp));


        let { ticTacGame: gameBoard } = store.getState();
        expect(findResults(gameBoard)).to.match(/o.+winner/i);
    });
    it('should determine a win for X in the diagonal right', () => {
        store.dispatch(actions.addMarker('a1', user));
        store.dispatch(actions.addMarker('b2', user));
        store.dispatch(actions.addMarker('c3', user));
        let { ticTacGame: gameBoard } = store.getState();
        console.log(gameBoard)
        expect(findResults(gameBoard)).to.match(/x.+winner/i);
    });
});