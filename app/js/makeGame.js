import { createStore, combineReducers } from 'redux';

import settings from './gameSettings';

let board = {
    a1: '',
    a2: '',
    a3: '',
    b1: '',
    b2: '',
    b3: '',
    c1: '',
    c2: '',
    c3: ''
};

const ticTacGame = (state = board, action) => {
    switch (action.type) {
        case 'PLACE_USER_MARKER':
            return {
                ...state,
                [action.square]: action.marker
            };
        default:
            return state
    }
}



export const gameApp = combineReducers({
    ticTacGame,
    settings
});

const store = createStore(gameApp);

// function render() {
//     console.log(store.getState());
// }

// store.subscribe(render);

export default store;



