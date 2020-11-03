import React, { Component } from 'react'

export default class product extends Component {
    render() {
        var {product}=this.props;
        return (
            <>
             <option value={product.id}>{product.name}</option>   
            </>
        )
    }
}
