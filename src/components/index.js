import React, { Component } from 'react'

import Page from './home/page';
import BillView from './home/bill/billView';

export default class index extends Component {
    
    render() {
        return (
            <>
               
                <div className="main-right">
                        {this.props.totalProduct}
                            <div className="clear " />
                        {this.props.chart}
                            <div className="clear " />
                                   
                            <div className="clear " />
                        <BillView 
                            bill={this.props.bill}
                        />
                            <div className="clear " />
                        <Page/>
                </div>
                 <div className="clear " />
            </>
        )
    }
}
