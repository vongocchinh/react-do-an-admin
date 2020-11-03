import React, { Component } from 'react'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

export default class billDetail extends Component {
    render() {
        return (
            <div className="main-right">
            <div className="main-content-table">
              <div className="main-content-table-top">
                <p className="table-text"><i className="far fa-calendar-alt" /> Đơn Hàng Chi Tiết</p>
                <ReactHTMLTableToExcel
                id="test-table-xls-button"
                className="download-table-xls-button"
                table="table-excel-html"
                filename="tablexls"
                sheet="tablexls"
                buttonText="Excels"
                />
              </div>
              
              <div className="hidden-table">
                <table className="table-main" id="table-excel-html">
                  <thead>
                    <tr>
                      <th className="th-main-table-i">ID</th>
                      <th className="th-main-table-o">Tên Người Đặt</th>
                      <th className="th-main-table-d">Ngày Đặt Hàng</th>
                      <th className="th-main-table-d">Mail</th>
                      <th className="th-main-table-i">Phone</th>
                      <th className="th-main-table-d">address</th>
                      <th className="th-main-table-d">Sản Phẩm</th>
                      <th className="th-main-table-i">Số lượng</th>
                      <th className="th-main-table-d">Tiền</th>
                      <th className="th-main-table-d">Tổng</th>
                      <th className="th-main-table-d">Xác nhận</th>
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
