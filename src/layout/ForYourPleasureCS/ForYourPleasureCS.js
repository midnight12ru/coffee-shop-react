import React, {Component} from "react";
import './ForYourPleasureCS.scss';
import {OurCoffeeHeadCS} from "../../ComponentsCS";

export default class ForYourPleasureCS extends Component {
    render() {
        return (
            <div className={'pleasure'}>
                <OurCoffeeHeadCS label={'For your pleasure'} headerStyle={'header'}/>
            </div>
        );
    }
}