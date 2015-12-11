import { combineReducers } from 'redux';


/*** Reducer functions ***/

import ticTacGame        from './ticTacGame';
import settings          from './settings';
import compCanPlay       from './compCanPlay';


const rootReducer = combineReducers({
    ticTacGame,
    settings,
    compCanPlay
});

export default rootReducer;