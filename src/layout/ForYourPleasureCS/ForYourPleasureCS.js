import React, {Component} from "react";
import {CommonSmallBlockCS} from "../../ComponentsCS";

export default class ForYourPleasureCS extends Component {
    render() {
        return (
            <div className={'pleasure'}>
                <CommonSmallBlockCS label={'For your pleasure'} headerStyle={'header'}/>
            </div>
        );
    }
}