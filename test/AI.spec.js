import { expect } from 'chai'
import _          from 'lodash';

// for testing I import the combined reducer function to pass to the createStore
// from Redux to make a new state tree before each test.

import configureStore  from '../app/store/configureStore';

/*** actions ***/
// import addMarker from '../app/actions/addMarker';
// import addMarker from '../app/actions/addMarker';

import { addMarker } from '../app/actions/game';


import compTurn            from '../app/utils/compTurn';
import blockAnyTwo         from '../app/utils/AI/blockAnyTwo';
import completeAnyTwo      from '../app/utils/AI/completeAnyTwo';
import takeOppositeCorner  from '../app/utils/AI/takeOppositeCorner';
import takeCenterWhenEmpty from '../app/utils/AI/takeCenterWhenEmpty';
import cornersEmpty        from '../app/utils/AI/cornersEmpty';
import sidesEmpty          from '../app/utils/AI/sidesEmpty';
import blockFork           from '../app/utils/AI/blockFork';
import createFork          from '../app/utils/AI/createFork';


/*** Block Any Two ***/
describe('The blocking AI for tic tac toe', () => {
    let store,
        settings;
    beforeEach(() => {
        store = configureStore();
        settings = store.getState().settings;
    });

    /*** Rows ***/
    it('should block when there are 2 user markers the top row', () => {
        store.dispatch(addMarker('a2', settings.user));
        store.dispatch(addMarker('a3', settings.user));
        let { ticTacGame: gameBoard } = store.getState();

        let square = blockAnyTwo(gameBoard);

        store.dispatch(addMarker(square, settings.comp));
        expect(store.getState().ticTacGame.a1).to.equal('O');
    });
    it('should block when there are 2 user markers in the middle row at b1 and b3', () => {
        store.dispatch(addMarker('b1', settings.user));
        store.dispatch(addMarker('b3', settings.user));
        let { ticTacGame: gameBoard } = store.getState();
        let square = blockAnyTwo(gameBoard);
        store.dispatch(addMarker(square, settings.comp));
        expect(store.getState().ticTacGame.b2).to.equal('O');
    });
    it('should block when there are 2 user markers in the middle row at b2 and b3', () => {
        store.dispatch(addMarker('b2', settings.user));
        store.dispatch(addMarker('b3', settings.user));
        let { ticTacGame: gameBoard } = store.getState();
        let square = blockAnyTwo(gameBoard);
        store.dispatch(addMarker(square, settings.comp));
        expect(store.getState().ticTacGame.b1).to.equal('O');
    });
    it('should block when there are 2 user markers in the bottom row at c1 and c2', () => {
        store.dispatch(addMarker('c1', settings.user));
        store.dispatch(addMarker('c2', settings.user));
        let { ticTacGame: gameBoard } = store.getState();
        let square = blockAnyTwo(gameBoard);
        store.dispatch(addMarker(square, settings.comp));
        expect(store.getState().ticTacGame.c3).to.equal('O');
    });

    /*** Horizontals ***/
    it('should block when there are 2 user markers in the first column at a1 and b1', () => {
        store.dispatch(addMarker('a1', settings.user));
        store.dispatch(addMarker('b1', settings.user));
        let { ticTacGame: gameBoard } = store.getState();
        let square = blockAnyTwo(gameBoard);
        store.dispatch(addMarker(square, settings.comp));
        expect(store.getState().ticTacGame.c1).to.equal('O');
    });
    it('should block when there are 2 user markers in the second column at a2 and c2', () => {
        store.dispatch(addMarker('a2', settings.user));
        store.dispatch(addMarker('c2', settings.user));
        let { ticTacGame: gameBoard } = store.getState();
        let square = blockAnyTwo(gameBoard);
        store.dispatch(addMarker(square, settings.comp));
        expect(store.getState().ticTacGame.b2).to.equal('O');
    });
    it('should block when there are 2 user markers in the third column at b3 and c3', () => {
        store.dispatch(addMarker('b3', settings.user));
        store.dispatch(addMarker('c3', settings.user));
        let { ticTacGame: gameBoard } = store.getState();
        let square = blockAnyTwo(gameBoard);
        store.dispatch(addMarker(square, settings.comp));
        expect(store.getState().ticTacGame.a3).to.equal('O');
    });

    /*** Diagonals ***/
    it('should block when the right diagonal is about to be completed by user', () => {
        store.dispatch(addMarker('a1', settings.user));
        store.dispatch(addMarker('b2', settings.user));
        let { ticTacGame: gameBoard } = store.getState();
        let square = blockAnyTwo(gameBoard);
        store.dispatch(addMarker(square, settings.comp));
        expect(store.getState().ticTacGame.c3).to.equal('O');
    });
    it('should block when the left diagonal is about to be completed by user', () => {
        store.dispatch(addMarker('c1', settings.user));
        store.dispatch(addMarker('a3', settings.user));
        let { ticTacGame: gameBoard } = store.getState();
        let square = blockAnyTwo(gameBoard);
        store.dispatch(addMarker(square, settings.comp));
        expect(store.getState().ticTacGame.b2).to.equal('O');
    });
});

/*** Complete Any Two ***/
describe('AI to capture a win!', () => {
    let store,
        settings;
    beforeEach(() => {
        store = configureStore();
        settings = store.getState().settings;
    });
    /*** rows ***/
    it('should place winning marker when 2 in top row', () => {
        store.dispatch(addMarker('a1', settings.comp));
        store.dispatch(addMarker('a2', settings.comp));
        let { ticTacGame: gameBoard } = store.getState();
        let square = completeAnyTwo(gameBoard);
        store.dispatch(addMarker(square, settings.comp));
        expect(store.getState().ticTacGame.a3).to.equal('O');
    });
    it('should place winning marker when 2 in middle row', () => {
        store.dispatch(addMarker('b1', settings.comp));
        store.dispatch(addMarker('b3', settings.comp));
        let { ticTacGame: gameBoard } = store.getState();
        let square = completeAnyTwo(gameBoard);
        store.dispatch(addMarker(square, settings.comp));
        expect(store.getState().ticTacGame.b2).to.equal('O');
    });
    it('should place winning marker when 2 in bottom row', () => {
        store.dispatch(addMarker('c2', settings.comp));
        store.dispatch(addMarker('c3', settings.comp));
        let { ticTacGame: gameBoard } = store.getState();
        let square = completeAnyTwo(gameBoard);
        store.dispatch(addMarker(square, settings.comp));
        expect(store.getState().ticTacGame.c1).to.equal('O');
    });
    /*** Horizontals ***/
    it('should capture win when have 2 in first column b1 and c1', () => {
        store.dispatch(addMarker('c1', settings.comp));
        store.dispatch(addMarker('b1', settings.comp));
        let { ticTacGame: gameBoard } = store.getState();
        let square = completeAnyTwo(gameBoard);
        store.dispatch(addMarker(square, settings.comp));
        expect(store.getState().ticTacGame.a1).to.equal('O');
    });
    it('should capture win when have 2 in second column a2 and b2', () => {
        store.dispatch(addMarker('a2', settings.comp));
        store.dispatch(addMarker('b2', settings.comp));
        let { ticTacGame: gameBoard } = store.getState();
        let square = completeAnyTwo(gameBoard);
        store.dispatch(addMarker(square, settings.comp));
        expect(store.getState().ticTacGame.c2).to.equal('O');
    });
    it('should capture win when have 2 in third column c3 and a3', () => {
        store.dispatch(addMarker('a3', settings.comp));
        store.dispatch(addMarker('c3', settings.comp));
        let { ticTacGame: gameBoard } = store.getState();
        let square = completeAnyTwo(gameBoard);
        store.dispatch(addMarker(square, settings.comp));
        expect(store.getState().ticTacGame.b3).to.equal('O');
    });

    /*** Diagonals ***/
    it('should capture the right diagonal with comp markers in b2 and a1', () => {
        store.dispatch(addMarker('a1', settings.comp));
        store.dispatch(addMarker('b2', settings.comp));
        let { ticTacGame: gameBoard } = store.getState();
        let square = completeAnyTwo(gameBoard);
        store.dispatch(addMarker(square, settings.comp));
        expect(store.getState().ticTacGame.c3).to.equal('O');
    });
    it('should capture the left diagonal with comp markers in a3 and c1', () => {
        store.dispatch(addMarker('c1', settings.comp));
        store.dispatch(addMarker('a3', settings.comp));
        let { ticTacGame: gameBoard } = store.getState();
        let square = completeAnyTwo(gameBoard);
        store.dispatch(addMarker(square, settings.comp));
        expect(store.getState().ticTacGame.b2).to.equal('O');
    });

});

/*** Take Opposite Corner ***/
describe('Taking opposite corner AI function', () => {
    let squares = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'],
        store,
        settings;
    beforeEach(() => {
        store = configureStore();
        settings = store.getState().settings;
    });

    it('should take the opposite cornor to a1', () => {
        store.dispatch(addMarker('a1', settings.user));

        let { ticTacGame: gameBoard } = store.getState();
        let square = takeOppositeCorner(gameBoard);
        store.dispatch(addMarker(square, settings.comp));
        expect(store.getState().ticTacGame.c3).to.equal('O');
    });

    it('should take the opposite cornor to a3', () => {
        store.dispatch(addMarker('a3', settings.user));

        let { ticTacGame: gameBoard } = store.getState();
        let square = takeOppositeCorner(gameBoard);
        store.dispatch(addMarker(square, settings.comp));
        expect(store.getState().ticTacGame.c1).to.equal('O');
    });

    it('should take the opposite cornor to c1', () => {
        store.dispatch(addMarker('c1', settings.user));

        let { ticTacGame: gameBoard } = store.getState();
        let square = takeOppositeCorner(gameBoard);
        store.dispatch(addMarker(square, settings.comp));
        expect(store.getState().ticTacGame.a3).to.equal('O');
    });

    it('should take the opposite cornor to c3', () => {
        store.dispatch(addMarker('c3', settings.user));

        let { ticTacGame: gameBoard } = store.getState();
        let square = takeOppositeCorner(gameBoard);
        store.dispatch(addMarker(square, settings.comp));
        expect(store.getState().ticTacGame.a1).to.equal('O');
    });

    it('should choose one of two "open opposite corners". Meaning a1 and c1 taken by X so could be both a3 or c3', () => {
        store.dispatch(addMarker('a1', settings.user));
        store.dispatch(addMarker('c1', settings.user));

        let { ticTacGame: gameBoard } = store.getState();
        let square = takeOppositeCorner(gameBoard);
        store.dispatch(addMarker(square, settings.comp));
        // expect the square returned is in the original gameBoard
        expect(_.includes(squares, square)).to.be.true;
        expect(store.getState().ticTacGame[square]).to.equal('O');
    })


});

/*** Take center when open ***/
describe('Take the center when open AI function', () => {
    let squares = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'],
        store,
        settings;
    beforeEach(() => {
        store = configureStore();
        settings = store.getState().settings;
    });

    it('should take the center when it is empty', () => {
        store.dispatch(addMarker('a1', settings.user));
        store.dispatch(addMarker('b3', settings.user));
        store.dispatch(addMarker('a3', settings.user));

        let { ticTacGame: gameBoard } = store.getState();
        let square = takeCenterWhenEmpty(gameBoard);
        store.dispatch(addMarker(square, settings.comp));
        expect(store.getState().ticTacGame.b2).to.equal('O');
    });
});

/*** Take an empty corner ***/
describe('Take empty corner AI function', () => {
    let squares = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'],
        store,
        settings;
    beforeEach(() => {
        store = configureStore();
        settings = store.getState().settings;
    });

    it('should take any random corner', () => {
        let { ticTacGame: gameBoard } = store.getState();
        let square = cornersEmpty(gameBoard);
        store.dispatch(addMarker(square, settings.comp));
        expect(_.includes(squares, square)).to.be.true;
        expect(store.getState().ticTacGame[square]).to.equal('O');
    });

    it('should take c3 when it is the only corner open', () => {
        store.dispatch(addMarker('a1', settings.user));
        store.dispatch(addMarker('a3', settings.user));
        store.dispatch(addMarker('c1', settings.comp));

        let { ticTacGame: gameBoard } = store.getState();
        let square = cornersEmpty(gameBoard);
        store.dispatch(addMarker(square, settings.comp));
        expect(_.includes(squares, square)).to.be.true;
        expect(store.getState().ticTacGame[square]).to.equal('O');
    });

    it('should take one of two a1 or c1 when they are open but other coners are not', () => {
        store.dispatch(addMarker('a3', settings.user));
        store.dispatch(addMarker('c3', settings.comp));

        let { ticTacGame: gameBoard } = store.getState();
        let square = cornersEmpty(gameBoard);
        store.dispatch(addMarker(square, settings.comp));
        expect(_.includes(squares, square)).to.be.true;
        expect(store.getState().ticTacGame[square]).to.equal('O');
    });
});

/*** Take an empty side ***/
describe('Take empty side AI function', () => {
    let squares = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'],
        store,
        settings;
    beforeEach(() => {
        store = configureStore();
        settings = store.getState().settings;
    });

    it('should take any random side', () => {
        let { ticTacGame: gameBoard } = store.getState();
        let square = sidesEmpty(gameBoard);
        store.dispatch(addMarker(square, settings.comp));
        expect(_.includes(squares, square)).to.be.true;
        expect(store.getState().ticTacGame[square]).to.equal('O');
    });

    it('should take b1 when it is the only side open', () => {
        store.dispatch(addMarker('a2', settings.user));
        store.dispatch(addMarker('b3', settings.user));
        store.dispatch(addMarker('c2', settings.comp));

        let { ticTacGame: gameBoard } = store.getState();
        let square = sidesEmpty(gameBoard);
        store.dispatch(addMarker(square, settings.comp));
        expect(_.includes(squares, square)).to.be.true;
        expect(store.getState().ticTacGame[square]).to.equal('O');
    });

    it('should take one of two b1 or b3 when they are open but other sides are not', () => {
        store.dispatch(addMarker('a2', settings.user));
        store.dispatch(addMarker('c2', settings.comp));

        let { ticTacGame: gameBoard } = store.getState();
        let square = sidesEmpty(gameBoard);
        store.dispatch(addMarker(square, settings.comp));
        expect(_.includes(squares, square)).to.be.true;
        expect(store.getState().ticTacGame[square]).to.equal('O');
    });

    it('should take one of two a2 or c2 when they are open but other sides are not', () => {
        store.dispatch(addMarker('b1', settings.user));
        store.dispatch(addMarker('b3', settings.comp));

        let { ticTacGame: gameBoard } = store.getState();
        let square = sidesEmpty(gameBoard);
        store.dispatch(addMarker(square, settings.comp));
        expect(_.includes(squares, square)).to.be.true;
        expect(store.getState().ticTacGame[square]).to.equal('O');
    });
});

/*** Block forks ***/
describe('The blockFork() function', () => {
    let squares = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'],
        sides = ['a2', 'b1', 'b3', 'c2'],
        store,
        settings;
    beforeEach(() => {
        store = configureStore();
        settings = store.getState().settings;
    });

    it('should place a marker on a side when a1 and c3 are taken by user', () => {
        store.dispatch(addMarker('a1', settings.user));
        store.dispatch(addMarker('c3', settings.user));

        let { ticTacGame: gameBoard } = store.getState();
        let square = blockFork(gameBoard, settings.comp);
        expect(_.includes(sides, square)).to.be.true;
    });

    it('should place a marker on a side when c1 and a3 are taken by user', () => {
        store.dispatch(addMarker('c1', settings.user));
        store.dispatch(addMarker('a3', settings.user));

        let { ticTacGame: gameBoard } = store.getState();
        let square = blockFork(gameBoard, settings.comp);
        expect(_.includes(sides, square)).to.be.true;
    });


});

/*** Create Forks ***/
describe('The createFork() function', () => {
    let squares = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'],
        corners = ['a1', 'a3', 'c1', 'c3'],
        store,
        settings;
    beforeEach(() => {
        store = configureStore();
        settings = store.getState().settings;
    });

    it('should create place a marker in a corner when the user starts with a side say c2; meaning the center is open', () => {
        store.dispatch(addMarker('c2', settings.user));

        let { ticTacGame: gameBoard } = store.getState();
        let square = createFork(gameBoard, settings.comp);
        expect(_.includes(corners, square)).to.be.true;
    });

    it('should return false when there are more then one side taken by user so it goes to a different "rule" function', () => {
        store.dispatch(addMarker('a2', settings.user));
        store.dispatch(addMarker('c2', settings.user));

        let { ticTacGame: gameBoard } = store.getState();
        let square = createFork(gameBoard, settings.comp);
        expect(square).to.be.false;
    });

    it('should be a square that is adjacent to the side the user selected; so user: a2 then computer needs to be at a1 or a3', () => {
        store.dispatch(addMarker('a2', settings.user));
        let answers = ['a1', 'a3'];
        let { ticTacGame: gameBoard } = store.getState();
        // loop for randomness
        for(let x = 0; x < 10; x++) {
            let square = createFork(gameBoard, settings.comp);
            expect(_.includes(answers, square)).to.be.true;
        }

    })
});
