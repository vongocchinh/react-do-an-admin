import React, { Component } from 'react'
import IconDe from './../../../images/de.png';
import IconU from './../../../images/e.png';
import { Link } from 'react-router-dom';
import * as FORMAT from './../../../../conStants/format';
import StarRatings from 'react-star-ratings';
export default class item2 extends Component {
    onDelete=()=>{
        this.props.onDelete(this.props.product);
    }
    render() {
        var {product}=this.props;
        
        return (
            <tbody>
            <tr>
                <td>{product.camBefore}/{product.camAfter}</td>
                <td>{product.cpu}</td>
                <td>{product.gpu}</td>
                <td>{product.manhinh}</td>
                <td>{product.pin} Amh</td>
                <td>{product.ram}/{product.rom}</td>
                <td>
                <StarRatings
                    starRatedColor="yellow"
                    rating={product.star}
                    numberOfStars={5}
                    starDimension="18px"
                    starSpacing="3px"
                    />
                   
                </td>
                <td className="option">
                    <button style={{border:"none",outline:"none",backgroundColor:"white"}} onChange={this.onDelete}> <img alt="###" src={IconDe} /></button>
                    <Link to={"/update-product/"+product.id+"/"+FORMAT.to_slug(product.name)} ><img alt="###" src={IconU} /></Link>
                </td>
            </tr>
        </tbody>
        )
    }
}
