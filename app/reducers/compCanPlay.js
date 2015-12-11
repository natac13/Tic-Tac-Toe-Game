const initialState = false;

const compCanPlay = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_COMP_TURN':
            return !state;
        default:
            return state;
    }
}

export default compCanPlay;