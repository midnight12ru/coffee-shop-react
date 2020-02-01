import React, {Component} from "react";

import './FilterBtnCS.scss'

export default class FilterBtnCS extends Component{
    render() {
        return (
            <div className={'FilterBtn'}>
                Or filter
                {
                    this.props.data.map((el, index)=>{
                        return(
                            <button
                                key={index}
                                className={'btn'}
                            >{el}</button>
                        )
                    })
                }
            </div>
        );
    }
}
