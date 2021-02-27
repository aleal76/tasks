import React, { Component } from "react";
import { render } from "react-dom";   


export default class App extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return <h1> Vamos todavía carajo... { this.props.name }</h1>

    }
}

const appDiv = document.getElementById("app");
render(<App name=" re capo full" />, appDiv);