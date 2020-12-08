import React, { Component } from 'react'

class listBill extends Component {
    render() {
        return (
            <div  className="main-right">
                <div className="main-content-table">
                <p className="table-text"><i className="far fa-calendar-alt" /> Đơn Hàng Giao</p>
                <div className="hidden-table">
                    <table className="table-main">
                    <thead>
                            <tr>
                                <th className="th-main-table-i">ID</th>
                                <th className="th-main-table-d">Tên Người Đặt</th>
                                {/* <th className="th-main-table-i">Số Lượng</th> */}
                                <th className="th-main-table-d">Address</th>
                                <th className="th-main-table-i">Tên sản phẩm</th>
                                <th className="th-main-table-o">Tổng tiền</th>
                                <th className="th-main-table-o">Xác nhận</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.showBill}
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        )
    }
}
export default  listBill;