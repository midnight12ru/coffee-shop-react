import React, {Component} from "react";

export default class HeaderCS extends Component{
    render() {
        return (
            <>
                <h1 className={'title'}>Everything You Love About Coffee</h1>
                <div className="grains-icon grains-icon-w"/>
                <h4 className={'subtitle'}>We makes every day full of energy and taste</h4>
                <h4 className={'subtitle'}>Want to try our beans?</h4>
                <button className={'btn'}>More</button>
            </>
        );
    }
}