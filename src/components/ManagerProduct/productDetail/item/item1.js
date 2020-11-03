import React, { Component } from 'react'
import { Switch } from '@material-ui/core';
import { FORMAT_CURRENT } from '../../../../conStants/format';

export default class item1 extends Component {
    constructor(props) {
        super(props);
        this.state={
            check:false,
            statusProduct:false
        }
    }
    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
        this.setState({
            check:!this.state.check
        });
    }
    onStatus=()=>{
        this.props.onStatus(this.props.product)
    }
    render() {
        var {product,brandName,categoryName}=this.props;
        return (
            <tbody>
            <tr>
            {/* <td>{product.id}</td> */}
            <td>{product.name}</td>
            <td>{brandName}</td>
            <td>{categoryName}</td>
            <td>{product.quantity} sp</td>
            <td>{FORMAT_CURRENT(product.price)} vnđ</td>
            <td>{product.priceSale} %</td>
            <td>
                <Switch
                        checked={product.statusProduct}
                        name="check"
                        onChange={this.onChange}
                        onClick={this.onStatus}
                />
            </td>
            </tr>
        </tbody>
        )
    }
}
