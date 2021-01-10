import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class totalView extends Component {
    render() {
        return (
            <div className="row">
                 <div className="col">
                    <div className="col-main col-main0">
                        <h4>Sản Phẩm Sale</h4>
                        <hr/>
                        <Link to="/productSale" className="detail-logo-main" >
                            <i className='fa fa-pie-chart'></i>
                            <p>{this.props.sale} &#8594;</p>
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="col-main col-main1">
                        <h4>Tổng Khách Hàng</h4>
                        <hr/>
                        <Link to="/user" className="detail-logo-main" >
                            <i className='fa fa-user'></i>
                            <p>{this.props.user} &#8594;</p>
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="col-main col-main2">
                        <h4>Tổng Sản Phẩm</h4>
                        <hr/>
                        <Link to="/productList" className="detail-logo-main" >
                            <i className='fa fa-pie-chart'></i>
                            <p>{this.props.product} &#8594;</p>
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="col-main col-main3">
                        <h4>Tổng Đơn Hàng</h4>
                        <hr/>
                        <Link to="/bill" className="detail-logo-main" >
                            <i className='fa fa-shopping-cart'></i>
                            <p>{this.props.bill} &#8594;</p>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
