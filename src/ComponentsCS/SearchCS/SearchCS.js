import React, {Component} from "react";
import './SearchCS.scss'

export default class SearchCS extends Component {
    render() {
        return (
            <div className={'search'}>
                <label htmlFor="search__input">
                    Looking for
                </label>
                <input
                    id={'search__input'}
                    className={'input'}
                    type="text"
                    placeholder={'start typing here...'}
                />
            </div>
        );
    }
}