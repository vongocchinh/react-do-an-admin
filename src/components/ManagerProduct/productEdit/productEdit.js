import React, { Component } from 'react'

 class productEdit extends Component {
    render() {
        return (
            <div className="main-right">
                {this.props.showData}
            </div>
        )
    }
}
export default productEdit;