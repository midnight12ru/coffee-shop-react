import React, {Component} from "react";
import {withRouter} from "react-router-dom";

import './CardCS.scss'

class CardCS extends Component {
    render() {
        return (
            <div className={'cardCS'}
                onClick={()=>this.props.history.push(`/Our-coffee/`+this.props.name.split(' ').join('-').toLocaleLowerCase())}
            >
                <img className={'cardCS__img'} src={this.props.url} alt=""/>
                <p className={'cardCS__name'}>
                    {this.props.name}
                </p>
                {this.props.children}
                <p className="cardCS__price">
                    {this.props.price}
                </p>
            </div>
        );
    }
}

export default withRouter(CardCS)