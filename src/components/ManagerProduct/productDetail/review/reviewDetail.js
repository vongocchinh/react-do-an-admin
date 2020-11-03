import React, { Component } from 'react'
import StarRatings from 'react-star-ratings';
export default class reviewDetail extends Component {
    render() {
        var {review}=this.props;
        return (
            <div className="review-container-main-row">
                <div className="review-container-main-left">
                    <img src={"https://1.bp.blogspot.com/-A7UYXuVWb_Q/XncdHaYbcOI/AAAAAAAAZhM/hYOevjRkrJEZhcXPnfP42nL3ZMu4PvIhgCLcBGAsYHQ/s1600/Trend-Avatar-Facebook%2B%25281%2529.jpg"} alt="###" />
                </div>
                <div className="review-container-main-right">
                        <p className="review-product-name-row"><strong>{review.name}</strong></p>
                        <div className="review-product-review-row">
                            <span className="review-product-review-row-star">
                            <StarRatings
                                starRatedColor="#FFA500"
                                numberOfStars={5}
                                rating={review.rating}
                                starDimension="15px"
                                starSpacing="1px"
                                />
                            </span>
                            <span>
                                {review.message}
                            </span>
                        </div>
                    {/* <p className="review-product-controller-control">
                    <input type="text" />
                    </p> */}
                </div>
            </div>
        )
    }
}
