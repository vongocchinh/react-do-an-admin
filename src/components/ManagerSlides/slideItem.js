import React, { Component } from 'react'
import IconDe from './../images/de.png';
import { Switch } from '@material-ui/core';
export default class slideItem extends Component {
    onDelete=()=>{
        this.props.delete(this.props.slide);
    }
    onStatus=()=>{
        this.props.onStatus(this.props.slide);
    }
    render() {
        var {slide,stt,product}=this.props;
        return (
            <tr>
                <td>{stt+1}</td>
                <td>{slide.slidesName}</td>
                <td>
                    <img alt="" className="img-slider" src={slide.slidesImages} />
                </td>
                <td>
                    {product}
                </td>
                <td>
                    <Switch
                            checked={slide.ruleSlides}
                            onClick={this.onStatus}
                    />
                </td>
                <td className="option">
                    <span onClick={this.onDelete} > <img alt="###" src={IconDe} /></span>
                </td>
            </tr>
        )
    }
}
