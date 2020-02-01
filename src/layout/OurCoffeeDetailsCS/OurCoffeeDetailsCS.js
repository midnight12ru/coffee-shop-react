import React, {Component} from "react";
import {CommonSmallBlockCS} from "../../ComponentsCS";
import {coffee as db} from './../../db'

export default class OurCoffeeDetailsCS extends Component {
    state = {
        el: []
    };

    componentDidMount() {
        console.log(this.props.match.params.name);
        console.log(db);
        let i;

        db.forEach(el => {
            let u = el.name.toLocaleLowerCase() === this.props.match.params.name.split('-').join(' ').toLocaleLowerCase();
            if (u) i = el
        });

        let newEL = (
            <div className={'OurCoffeeDetails'}>
                <img src={i.url} alt="" className={'OurCoffeeDetails__img'}/>
                <div className={'OurCoffeeDetails__info'}>
                    <h2 className={'OurCoffeeDetails__label'}>{i.name}</h2>
                    <div className="grains-icon grains-icon-b"/>
                    <p className={'OurCoffeeDetails__country'}><b>Country</b>: {i.country}</p>
                    <p className={'OurCoffeeDetails__desc'}><b>Description</b>: {i.description}</p>
                    <p className={'OurCoffeeDetails__price'}><b>Price</b>: {i.price}</p>
                </div>
            </div>
        );
        this.setState({el: newEL});
    }

    render() {
        return (
            <div className={'OurCoffeeCS'}>
                <CommonSmallBlockCS label={'Our Coffee'} headerStyle={'header'}/>
                {this.state.el}
            </div>
        );
    }
}