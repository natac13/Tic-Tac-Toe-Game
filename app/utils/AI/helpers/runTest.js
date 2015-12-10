import _ from 'lodash';

/** Lets .some() run until it finds a square value based off the stateMap which
is a zipped list of sliced sequences that are from the gameBoard state; while
the other is the 'label' for those squares in the same order.
@param zipped-array stateMap
@param array patterns*/
const runTest = (stateMap, patterns) => {
    let pos;
    _.some(stateMap, function(mapPair) {
        // make vars out of the zipped list values
        let [ sequence, boardMap ] = mapPair;
        /*** The Test ***/
        /*
        If the sequence is present in the patterns array then the comp needs
        to follow this AI 'rule'.
        Finding the index of the sequence in the patterns array I can get
        the square 'name' (etc 'a1' or 'c3') to use to call the action which
        will describe the mutation to the state. Done higher in Main.js Component
         */
        if (_.includes(patterns, sequence)) {
            pos = boardMap[patterns.indexOf(sequence)];
            return true;
        } else {
            return false;
        }
    });
    return pos;
}

export default runTest;