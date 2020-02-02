import React, {Component} from "react";
import {CommonSmallBlockCS} from "../../ComponentsCS";

import pleasureImg from './../../res/coffee_img.jpg'

import './ForYourPleasureCS.scss'

export default class ForYourPleasureCS extends Component {
    render() {
        return (
            <div className={'pleasure'}>
                <CommonSmallBlockCS label={'For your pleasure'} headerStyle={'header'}/>
                <div className="pleasure__wrap">
                    <img src={pleasureImg} alt="" className="pleasure__img"/>
                    <div className="pleasure__desc">
                        <h1 className="pleasure__label">About our goods</h1>
                        <div className="grains-icon grains-icon-b"/>
                        <p> Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                        <p> Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. <br/>
                            As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}