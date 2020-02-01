import React, {Component} from "react";
import {OurCoffeeHeadCS} from "../../ComponentsCS";
import {coffee as db} from './../../db'

export default class OurCoffeeDetailsCS extends Component {
    componentDidMount() {
        console.log(this.props.match.params.name);
        console.log(db);
        let i;

        db.forEach(el => {
            let u = el.name.toLocaleLowerCase() === this.props.match.params.name.split('-').join(' ').toLocaleLowerCase();
            if (u) {
                i = el
            }
        });

        let newEL = (
            <div>
                <img src={i.url} alt=""/>
                <div></div>
                <h2>{i.name}</h2>
            </div>
        )
    }

    render() {
        return (
            <div className={'OurCoffeeCS'}>
                <OurCoffeeHeadCS/>
            </div>
        );
    }
}

// name: "Solimo Coffee Beans 2 kg"
// country: "Kenya"
// url: "https://images-na.ssl-images-amazon.com/images/I/815O9ktyfUL._SL1500_.jpg"
// price: "10.73$"
// description