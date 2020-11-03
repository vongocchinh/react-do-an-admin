import React, { Component } from 'react'

export default class category extends Component {
    render() {
            var {category}=this.props;
        return (
            <>
                 <option  value={category.id}>{category.categoryName}</option>
            </>
        )
    }
}
