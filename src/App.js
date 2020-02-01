import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {HomeCS, OurCoffeeCS, OurCoffeeDetailsCS, ForYourPleasureCS} from './layout'
import {MenuCS} from './ComponentsCS'

import './App.scss';

export default class App extends Component {
    state = {
        link: [
            {
                id: 1,
                img: 'logo',
                text: 'Coffee house',
                specialСlass: ['logo', 'link'],
                linkTo: '/'
            },
            {
                id: 2,
                text: 'Our coffee',
                specialСlass: ['link'],
                linkTo: '/Our-coffee'
            },
            {
                id: 3,
                text: 'For your pleasure',
                specialСlass: ['link'],
                linkTo: '/For-your-pleasure'
            }
        ]
    };

    render() {
        return (
            <div className={'App'}>
                <MenuCS link={this.state.link} pos={'menu'}/>
                <Switch>
                    <Route exact path='/' component={HomeCS} />
                    <Route path='/Our-coffee' exact component={OurCoffeeCS}/>
                    <Route path='/Our-coffee/:name' component={OurCoffeeDetailsCS}/>
                    <Route path='/For-your-pleasure' component={ForYourPleasureCS}/>
                </Switch>
                <MenuCS link={this.state.link} pos={'footer'}/>
            </div>
        );
    }
}