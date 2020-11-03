import React, { Component } from 'react'

export default class item4 extends Component {
    render() {
        var {product}=this.props;
        return (
            <div className="row">
                    <div className="col">
                        <div className="table-main-img">
                            <img alt="###" className="images-product-main" src={product.images1} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="table-main-img">
                            <img alt="###" className="images-product-main" src={product.images2} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="table-main-img">
                            <img alt="###" className="images-product-main" src={product.images1} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="table-main-img">
                            <img alt="###" className="images-product-main" src={product.images2} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="table-main-img">
                            <img alt="###" className="images-product-main" src={"https://hiashi.vn/vnt_upload/product/nophoto.gif"} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="table-main-img">
                            <img alt="###" className="images-product-main" src={"https://hiashi.vn/vnt_upload/product/nophoto.gif"} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="table-main-img">
                            <img alt="###" className="images-product-main" src={"https://hiashi.vn/vnt_upload/product/nophoto.gif"} />
                        </div>
                    </div>
                </div>
        )
    }
}
