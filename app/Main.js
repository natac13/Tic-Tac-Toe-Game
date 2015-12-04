import React, { Component } from 'react';
import Game from './components/Game';

class Main extends Component {
    constructor(props) {
        super(props);
        this.store = props.store
    }
    onClick() {
        const { store } = this;
        console.log(JSON.stringify(store.getState(), null, 4));
        const action = {
                type: 'PLACE_USER_MARKER',
                square: 'a3',
                marker: 'X'
            };
        store.dispatch(action)
    }
    render() {
        const { store } = this;
        return (
            <div className="">
                <header>
                  <h1>Tic Tac Toe</h1>
                </header>
                <Game onClick={this.onClick.bind(this)}/>
                <Game onClick={this.onClick.bind(this)}/>
                <Game onClick={this.onClick.bind(this)}/>
                <Game onClick={this.onClick.bind(this)}/>
                <Game onClick={this.onClick.bind(this)}/>
                <Game onClick={this.onClick.bind(this)}/>
                <Game onClick={this.onClick.bind(this)}/>
                <Game onClick={this.onClick.bind(this)}/>
                <Game onClick={this.onClick.bind(this)}/>

            </div>
        );
    }
}

export default Main;