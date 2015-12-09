import { combineReducers } from 'redux';

import ticTacGame from './ticTacGame';
import settings   from './settings';

const rootReducer = combineReducers({
    ticTacGame,
    settings
});

export default rootReducer;