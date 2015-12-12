const initialState = false;

const compCanPlay = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_COMP_TURN':
            return true;
        case 'SET_USER_TURN':
            return false;
        default:
            return state;
    }
}

export default compCanPlay;