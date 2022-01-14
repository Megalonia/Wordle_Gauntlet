import React, { Component } from 'react';
import {render} from 'react-dom';
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "./index.css";


class App extends Component {

    state = {
        layoutName: 'default',
        input: ''
    };

    layout = {
              'default': [
                          ' q w e r t y u i o p ',
                          ' a s d f g h j k l {enter}',
                          ' z x c v b n m ',
                        ],
            }

    onChange = (input) => {
        console.log("Input Change ", input);
    }

    onKeyPress = (button) => {
        console.log("Button Pressed ", button);
    }

    onChangeInput = (event) => {
        const input = event.target.value;
        this.setState({ input });
        this.keyboard.setInput(input);
    }

    render() {
        return (
        <div>
        <input
            value= {this.state.input}
            placeholder= {"Tap on Keyboard to Start"}
            onChange={this.onChangeInput}
        />
        <Keyboard
            keyboardRef={ r => (this.keyboard = r)}
            layoutName={this.state.layoutName}
            onChange={this.onChange}
            onKeyPress={this.onKeyPress}
        />
        </div>
        );
    }
}

render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
