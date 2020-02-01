import React, {Component} from "react";
import {MenuCS} from "../index";

export default class FooterCS extends Component {
    render() {
        return (
            <MenuCS data={this.props.link}/>
        );
    }
}