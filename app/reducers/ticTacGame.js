import { PLACE_USER_MARKER } from '../constants/ActionTypes';

const initialState = {
    a1: '',
    a2: '',
    a3: '',
    b1: '',
    b2: '',
    b3: '',
    c1: '',
    c2: '',
    c3: ''
}

const ticTacGame = (state = initialState, action) => {
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

export default ticTacGame;
