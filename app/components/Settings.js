import React, { Component, PropTypes } from 'react';


export default class Settings extends Component {
    constructor(props) {
        super(props);
    }

    become(event) {
        const marker = event.target.value;
        this.props.actions.setUserMarker(marker)
    }

    render() {
        const { settings, actions } = this.props;
        return (
            <div className="col span_1_of_3">
                <button onClick={this.become.bind(this)} value="O"> Become 'O'</button>
                <button onClick={this.become.bind(this)} value="X"> Become 'X'</button>
            </div>
        );
    }
}