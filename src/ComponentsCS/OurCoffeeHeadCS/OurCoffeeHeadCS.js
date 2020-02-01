import React, {Component} from "react";

export default class OurCoffeeHeadCS extends Component{
    componentDidMount() {
        console.log(this.props.headerStyle)
    }

    render() {
        return (
            <>
                <header className={`flex-center ${this.props.headerStyle}`}>
                    <h1>{this.props.label}</h1>
                </header>
            </>
        );
    }
}