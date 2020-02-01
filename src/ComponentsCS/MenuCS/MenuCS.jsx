import React, {Component} from "react";
import {Link} from 'react-router-dom'

import './MenuCS.scss'

export default class MenuCS extends Component {
    state = {
        drawnElement: []
    };

    componentDidMount() {
        let {link} = this.props;

        if (link === undefined) return false;

        let item = link.map(el => {

            let id = el.id,
                text = el.text,
                img = <img src={`./../../res/${el.img}.png`} alt=""/> || null,
                specialСlass = el.specialСlass.join(' '),
                linkTo = el.linkTo.split(' ').join('-');

            return (
                <li key={id} className={`menuCS__item ${specialСlass}`}>
                    <Link to={linkTo}>
                        {img}
                        {text}
                    </Link>
                </li>
            )
        });

        this.setState({
            drawnElement: item
        })
    }

    render() {
        let grains = this.props.pos === 'footer' ? <div className="grains-icon grains-icon-b"/> : null;
        return (
            <div className={this.props.pos}>
                <ul className={`menuCS`}>
                    {this.state.drawnElement}
                </ul>
                {grains}
            </div>
        );
    }
}