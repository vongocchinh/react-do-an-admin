// import { makeStyles } from '@material-ui/core';
import React, { Component } from 'react'

export default class reviewCount extends Component {
    render() {
        var {item,keys}=this.props;
        
        return (
            <>
            <div className="side">
                <div>{keys+1} star</div>
            </div>
            <div className="middle">
                <div className="bar-container">
                <div style={{width:item+"%"}} className={"bar-"+(keys+1)}></div>
                </div>
            </div>
            <div className="side right">
                <div>{item}</div>
            </div>
            </>
        )
    }
}

