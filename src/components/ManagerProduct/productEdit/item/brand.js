import React, { Component } from 'react'

export default class brand extends Component {
    render() {
        var {brand}=this.props;
        return (
           
            <>
                    <option  value={brand.id}>{brand.brandName}</option>
            </>
          
        )
    }
}
