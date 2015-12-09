const initialState = {
    user: 'X',
    comp: 'O'
};

const settings = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_MARKER':
            return {
                user: action.marker,
                comp: action.marker === 'X' ? 'O' : 'X'

            };
        default:
            return state;
    }
};

export default settings;