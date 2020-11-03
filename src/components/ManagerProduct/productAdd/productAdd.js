import React, { Component } from 'react'
import ProductForm from './productForm';
class productAdd extends Component {
    render() {
        return (
        <div className="main-right">
            <ProductForm
                addProduct={this.props.addProduct}
                showBrand={this.props.showBrand}
                showCategory={this.props.showCategory}
            />
        </div>
        )
    }
}
export default  productAdd;