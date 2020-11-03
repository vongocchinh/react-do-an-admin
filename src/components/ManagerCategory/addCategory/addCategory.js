import React, { Component } from 'react'
import CategoryForm from './categoryForm';
export default class addCategory extends Component {
    render() {
        return (
            <div className="main-right">
                <CategoryForm
                    addCategory={this.props.addCategory}
                />
            </div>
        )
    }
}
