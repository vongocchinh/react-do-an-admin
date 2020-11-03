import React, { Component } from 'react'

class productDetails extends Component {
    render() {
        return (
            <div className="main-right">
                <div className="main-content-table">
                <div className="form-top-product">
                    <div className="text-left">
                    <p className="table-text"><i className="far fa-calendar-alt" /> Sản Phẩm</p>
                    </div>
                </div>
                <div className="hidden-table">
                    <table className="table-main">
                    <thead>
                        <tr>
                        {/* <th className="th-main-table-i">ID</th> */}
                        <th className="th-main-table-n">Tên Sản phẩm</th>
                        <th className="th-main-table-i">Tên Hãng</th>
                        <th className="th-main-table-i">Tên Mặt hàng</th>
                        <th className="th-main-table-i">Số lượng</th>
                        <th className="th-main-table-d">Giá Bán</th>
                        <th className="th-main-table-o">Giá sale</th>
                        <th className="th-main-table-s">Trạng Thái</th>
                        
                        </tr></thead>
                    {this.props.showItem1}
                    </table>
                </div>
                <div className="hidden-table">
                    <table className="table-main table-main2">
                    <thead>
                        <tr><th className="th-main-table-d">cam (t/s)</th>
                        <th className="th-main-table-n">CPU</th>
                        <th className="th-main-table-i">GPU</th>
                        <th className="th-main-table-i">Màn hình</th>
                        <th className="th-main-table-i">Pin</th>
                        <th className="th-main-table-d">Ram/Rom</th>
                        <th className="th-main-table-s">Star</th>
                        <th className="th-main-table-o" />
                        </tr></thead>
                        {this.props.showItem2}
                    </table>
                </div>
                <p className="des-product">Mô tả</p>
                {this.props.showItem3}
                <p className="des-product">Ảnh sản phẩm</p>
                {this.props.showItem4}
                <hr/>
                {this.props.review}
                <p className="des-product">Review-detail</p>
                {this.props.showReviewDetail}
                </div>
                
            </div>
        )
    }
}
export default  productDetails;