import React, { Component } from 'react'

export default class review extends Component {
    render() {
        return (
                <>
                <span className="heading">User Rating</span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <p>Product on {this.props.countReview} reviews.</p>
                <div className="row">
                        {this.props.ItemReview}
                </div>
                
                </>
        )
    }
}
