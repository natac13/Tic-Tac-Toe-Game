import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Main from '../components/Main';

import * as ActionCreator from '../actions/game';


class App extends Component {

    static propTypes = {
        gameBoard: PropTypes.object.isRequired,
        settings: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    }

    render() {


        return (
            <div>
                <Main {...this.props} />
            </div>
        );
    }
}


function mapStateToProps(state) {
    const { ticTacGame: gameBoard, settings, compCanPlay, results } = state;
    return {
        gameBoard,
        settings,
        compCanPlay,
        results
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ActionCreator, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);