import React, { Component } from 'react'
import FORM from './form';
 class slides extends Component {
    render() {
        return (
            <div className="main-right">
                <FORM
                showProduct={this.props.showProduct}
                addSlides={this.props.addSlides}
            />
            </div>
        )
    }
}
export default slides;