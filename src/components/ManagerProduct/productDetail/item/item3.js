import React, { Component } from 'react'
import parser from 'html-react-parser'
export default class item3 extends Component {
    render() {
        var {product}=this.props;
        return (
            <div className="table-main-des">
                    {parser(product.description)}
            </div>
        )
    }
}
