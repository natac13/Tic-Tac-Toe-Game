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
    return {
        gameBoard: state.ticTacGame,
        settings: state.settings
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