const initialState = {
    x: 0,
    o: 0,
    tie: 0
}

const results = (state = initialState, action) => {
    switch (action.type) {
        case 'X_WIN':
            return {
                ...state,
                x: state.x + 1
            }
        case 'O_WIN':
            return {
                ...state,
                o: state.o + 1
            }
        case 'TIE':
            return {
                ...state,
                tie: state.tie + 1
            }
        default:
            return state
    }
}

export default results;