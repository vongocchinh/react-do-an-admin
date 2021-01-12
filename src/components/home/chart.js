import React, { Component } from 'react'
import ChartLeft from './chart/chartLeft';
import ChartRight from './chart/chartRight';
// import ReChart from './chart/recharts';
export default class chart extends Component {
    render() {
        var {bill,user}=this.props;
        return (
            <>
            <div className="chart-container">
                <ChartLeft 
                    bill={bill}
                    product={this.props.product}
                    user={user}
                    countContact={this.props.countContact}
                    viewPage={this.props.viewPage}
                    newsletter={this.props.newsletter}
                />
                <ChartRight
                    productStore={this.props.productStore}
                    brand={this.props.brand}
                />
            </div>
            <div className="clear"></div>
            {/* <div className="chart-container-center">
                    <ReChart 
                         bill={bill}
                        product={this.props.product}
                        user={user}
                        countContact={this.props.countContact}
                        viewPage={this.props.viewPage}
                        newsletter={this.props.newsletter}
                    />
            </div> */}
            </>
        )
    }
}
