import React, { Component } from 'react'
import StarRatings from 'react-star-ratings';
import styles from './styles';
import { withStyles } from '@material-ui/core';
class reviewDetail extends Component {
    deleteReview=()=>{
        this.props.deleteReview(this.props.review.id)
    }
    render() {
        var {review}=this.props;
        const {classes}=this.props;
        return (
            <>
            <div className="review-container-main-row">
                <div className="review-container-main-left">
                    <img src={"https://1.bp.blogspot.com/-A7UYXuVWb_Q/XncdHaYbcOI/AAAAAAAAZhM/hYOevjRkrJEZhcXPnfP42nL3ZMu4PvIhgCLcBGAsYHQ/s1600/Trend-Avatar-Facebook%2B%25281%2529.jpg"} alt="###" />
                </div>
                <div className="review-container-main-right">
                        <p className="review-product-name-row"><strong>{review.name}</strong>
                        <span onClick={this.deleteReview} className={classes.close}>x</span>
                        </p>
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
             </>
        )
    }
}
export default  (withStyles(styles))(reviewDetail);