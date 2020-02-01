import React, {Component} from "react";
import {withRouter} from "react-router-dom";

import './CardCS.scss'

class CardCS extends Component {
    render() {
        return (
            <div className={'card'}
                onClick={()=>this.props.history.push(`/Our-coffee/`+this.props.name.split(' ').join('-').toLocaleLowerCase())}
            >
                <img className={'card__img'} src={this.props.url} alt=""/>
                <p className={'card__name'}>
                    {this.props.name}
                </p>
                {this.props.children}
                <p className="card__price">
                    {this.props.price}
                </p>
            </div>
        );
    }
}

export default withRouter(CardCS)