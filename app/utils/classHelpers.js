import _ from 'lodash';
import classnames from 'classnames';


export const markerClass = _.curry((elMarker, userMarker) => {
    return classnames({
                marker: true,
                already: userMarker === elMarker
            });
})

