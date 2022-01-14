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

    commonKeyboardOptions = {
        onChange:   input  => this.onChange(input),
        onKeyPress: button => this.onKeyPress(button),
        theme: "simple-keyboard hg-theme-default hg-layout-default",
        physicalKeyboardHighlight: true,
        syncInstanceInputs: true,
        mergeDisplay: true,
        debug: true
    };

    keyboardOptions = {
        ...this.commonKeyboardOptions,
        layout: {
            default : [
                    "q w e r t y u i o p",
                    "a s d f g h j k l",
                    "{enter} z x c v b n m {backspace}",
           ]
        }
    }


    onChange = (input) => {
        this.setState({
                input: input
        })
        console.log("Input Change ", input);
    }

    onKeyPress = (button) => {
        console.log("Button Pressed ", button);
    }

    onChangeInput = (event) => {
        const input = event.target.value;
        this.setState(
            {
                input: input
            },
            () => {
                this.keyboard.setInput(input)
            }
        );
    };

    render() {
        return (
        <div>

        <input
            value= {this.state.input}
            placeholder= {"Tap on Keyboard to Start"}
            onChange={e => this.onChangeInput(e)}
        />
        <div className={"keyboaraContainter"}>
            <Keyboard
                baseClass={"simple-keyboard-main"}
                keyboardRef={ r => (this.keyboard = r)}
                layoutName={this.state.layoutName}
                {...this.keyboardOptions}
            />
        </div>
        </div>
        );
    }
}

render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
