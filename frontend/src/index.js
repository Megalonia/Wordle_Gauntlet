import React, { Component } from 'react';
import {render} from 'react-dom';
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "./index.css";


class App extends Component {
    state = {
        layoutName: "deafult",
        input: "",

    }
}

render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
