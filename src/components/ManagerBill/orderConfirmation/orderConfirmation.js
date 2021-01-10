import React, { Component } from 'react'

export default class orderConfirmation extends Component {
   
    render() {
        return (
          <div className="main-right">
             <div className="main-content-table">
                <p className="table-text"><i className="far fa-calendar-alt" /> Đơn Hàng Đã xác Nhận</p>
                <div className="hidden-table">
                    <table className="table-main">
                    <thead>
                            <tr>
                                <th className="th-main-table-i">ID</th>
                                <th className="th-main-table-d">Tên Người Đặt</th>
                                <th className="th-main-table-0">Số Lượng</th>
                                <th className="th-main-table-d">Ngày Đặt Hàng</th>
                                <th className="th-main-table-d">Mail</th>
                                <th className="th-main-table-i">Phone</th>
                                <th className="th-main-table-d">address</th>
                                <th className="th-main-table-i">Chi tiết</th>
                                <th className="th-main-table-o">Xác nhận</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.showBillConfirm}
                        </tbody>
                    </table>
                </div>
                    <div className="pagination-button">
                        {this.props.showPagination}
                    </div>
                </div>
                <br/>
          </div>
        )
    }
}
