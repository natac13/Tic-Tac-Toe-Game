import { expect } from 'chai'
import _          from 'lodash';

// for testing I import the combined reducer function to pass to the createStore
// from Redux to make a new state tree before each test.
import { createStore } from 'redux';
import { gameApp }      from '../app/js/makeGame';

/*** actions ***/
import addUserMarker from '../app/actions/addUserMarker';
import addCompMarker from '../app/actions/addCompMarker';

import compTurn from '../app/utils/compTurn';
import blockAnyTwo from '../app/utils/blockAnyTwo';


describe('The blocking AI for tic tac toe', () => {
    let store,
        settings;
    beforeEach(() => {
        store = createStore(gameApp);
        settings = store.getState().settings;
    });

    it('block when there are 2 user markers the top row', () => {
        store.dispatch(addUserMarker('a2', settings.user));
        store.dispatch(addUserMarker('a3', settings.user));

        blockAnyTwo(store);
        expect(store.getState().ticTacGame.a1).to.equal('O');
    });
    it('should block when there are 2 user markers in the middle row at b1 and b3', () => {
        store.dispatch(addUserMarker('b1', settings.user));
        store.dispatch(addUserMarker('b3', settings.user));

        blockAnyTwo(store);
        expect(store.getState().ticTacGame.b2).to.equal('O');
    });
    it('should block when there are 2 user markers in the middle row at b2 and b3', () => {
        store.dispatch(addUserMarker('b2', settings.user));
        store.dispatch(addUserMarker('b3', settings.user));

        blockAnyTwo(store);
        expect(store.getState().ticTacGame.b1).to.equal('O');
    });
    it('should block when there are 2 user markers in the bottom row at c1 and c2', () => {
        store.dispatch(addUserMarker('c1', settings.user));
        store.dispatch(addUserMarker('c2', settings.user));

        blockAnyTwo(store);
        expect(store.getState().ticTacGame.c3).to.equal('O');
    });

        /*** Horizontal ***/

    it('should block when there are 2 user markers in the first column at a1 and b1', () => {
        store.dispatch(addUserMarker('a1', settings.user));
        store.dispatch(addUserMarker('b1', settings.user));

        blockAnyTwo(store);
        expect(store.getState().ticTacGame.c1).to.equal('O');
    });
    it('should block when there are 2 user markers in the second column at a2 and c2', () => {
        store.dispatch(addUserMarker('a2', settings.user));
        store.dispatch(addUserMarker('c2', settings.user));

        blockAnyTwo(store);
        expect(store.getState().ticTacGame.b2).to.equal('O');
    });
    it('should block when there are 2 user markers in the third column at b3 and c3', () => {
        store.dispatch(addUserMarker('b3', settings.user));
        store.dispatch(addUserMarker('c3', settings.user));

        blockAnyTwo(store);
        expect(store.getState().ticTacGame.a3).to.equal('O');
    });
});

describe('AI to capture a win!', () => {
    let store,
        settings;
    beforeEach(() => {
        store = createStore(gameApp);
        settings = store.getState().settings;
    });

    it('should place winning marker when 2 in top row', () => {
        store.dispatch(addCompMarker('a1', settings.comp));
        store.dispatch(addCompMarker('a2', settings.comp));

        completeAnyTwo(store);
        expect(store.getState().ticTacGame.a3).to.equal('O');
    })

});