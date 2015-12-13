import { combineReducers } from 'redux';


/*** Reducer functions ***/

import ticTacGame        from './ticTacGame';
import settings          from './settings';
import compCanPlay       from './compCanPlay';
import results           from './results';


const rootReducer = combineReducers({
    ticTacGame,
    settings,
    compCanPlay,
    results
});

export default rootReducer;