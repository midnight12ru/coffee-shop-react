import React, {Component} from "react";

import './CommonSmallBlockCS.scss'

export default class CommonSmallBlockCS extends Component{
    render() {
        return (
            <>
                <header className={`flex-center ${this.props.headerStyle} bg`}>
                    <h1>{this.props.label}</h1>
                </header>
            </>
        );
    }
}