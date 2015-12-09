import _ from 'lodash';

/*** actions ***/

import { addCompMarker } from '../../../actions/game';

/** returns true as soon as it finds a truthy value from .some()
which is checking to see if there is a possible match to the patterns */
const runTest = (stateMap, patterns, actions, marker) => {
    return _.some(stateMap, function(mapPair) {
        // make vars out of the zipped list values
        let [ sequence, boardMap ] = mapPair;
        /*** The Test ***/
        /*
        If the sequence is present in the patterns array then the comp needs
        to follow this AI 'rule'.
        Finding the index of the sequence in the patterns array I can get
        the square 'name' (etc 'a1' or 'c3') to use to call the action which
        will describe the mutation to the state.
         */
        if (_.includes(patterns, sequence)) {
            let pos = boardMap[patterns.indexOf(sequence)];
            actions.addCompMarker(pos, marker);
            return true;
        } else {
            return false;
        }
    });
}

export default runTest;