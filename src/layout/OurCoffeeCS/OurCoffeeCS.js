import React, {Component} from "react";
import {CardCS, FilterBtnCS, OurCoffeeHeadCS, SearchCS} from "../../ComponentsCS";
import {coffee as dbCoffee} from './../../db'
import unique from './../../func/unique'

import './OurCoffeeCS.scss'

import coffeeGirl from './../../res/coffee_girl.jpg'

export default class OurCoffeeCS extends Component {
    state = {
        country: []
    };

    componentDidMount() {
        let locCountry = dbCoffee.map(el => {
            return el.country
        });

        let arrUnique = unique(locCountry);

        this.setState({
            country: arrUnique
        });
    }

    render() {
        return (
            <div className={'OurCoffeeCS'}>
                <OurCoffeeHeadCS label={'Our Coffee'} headerStyle={'header'}/>
                <div className="OurCoffeeCS__desc">
                    <img src={coffeeGirl} alt="" className="OurCoffeeCS__desc-pic"/>
                    <div className="OurCoffeeCS__desc-text">
                        <h3 className={'title'}>About our beans</h3>
                        <div className="grains-icon grains-icon-b"/>
                        <p>
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        </p>
                        <p>
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions.<br/>
                            As greatly removed calling pleased improve an. Last ask him cold feel <br/>
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.
                        </p>
                    </div>
                </div>
                <div className="line"/>
                <div className="OurCoffeeCS__list list">
                    <div className="list__head">
                        <SearchCS/>
                        <FilterBtnCS data={this.state.country}/>
                    </div>
                    <ul className="list__items">
                        {
                            dbCoffee.map((el, index) => {
                                return (
                                    <CardCS {...el} key={index}>
                                        <p className={'country'}>{el.country}</p>
                                    </CardCS>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
