import React, {Component} from "react";
import {CardCS, HeaderCS} from "../../ComponentsCS";

import db from './../../db'

import './HomeCS.scss'

export default class HomeCS extends Component {
    state = {
        drawnCards: []
    };

    componentDidMount() {
        let {bestsellers} = db;

        let items = bestsellers.map((el, index) => {
            return (
                <CardCS key={index} {...el}/>
            )
        });

        this.setState({
            drawnCards: items
        })
    }

    render() {
        return (
            <div className={'HomeCS'}>
                <header className="header flex-center">
                    <HeaderCS/>
                </header>
                <div className="about flex-center">
                    <div className="wrap">
                        <h2 className={'about__title title'}>About Us</h2>
                        <div className="grains-icon grains-icon-b"/>
                        <p className={'desc'}>
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.
                        </p>
                        <p className={'desc'}>
                            Now residence dashwoods she excellent you. Shade being under his bed her, Much
                            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                            horrible but confined day end marriage. Eagerness furniture set preserved far
                            recommend. Did even but nor are most gave hope. Secure active living depend son
                            repair day ladies now.
                        </p>
                    </div>
                </div>
                <div className="best flex-center">
                    <h3 className={'title'}>Our best</h3>
                    <div className="collect flex-center">
                        {
                            this.state.drawnCards
                        }
                    </div>
                </div>
            </div>
        );
    }
}