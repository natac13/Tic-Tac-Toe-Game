import { combineReducers } from 'redux';


/*** Reducer functions ***/

import ticTacGame from './ticTacGame';
import settings   from './settings';


const rootReducer = combineReducers({
    ticTacGame,
    settings
});

export default rootReducer;