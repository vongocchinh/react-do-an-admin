import React, { Component } from 'react'
import * as Format from '../../../conStants/format';
import { Link } from 'react-router-dom';
export default class orderConfirmationItem extends Component {
    onClick=()=>{
        // this.props.rulesBill(this.props.bill);
        this.props.updateQuantity(this.props.bill.cart,this.props.bill);
  
      }
      onClickGo=()=>{
        this.props.rulesBillGo(this.props.bill);
      }
      onClickSuccess=()=>{
        this.props.rulesBillSuccess(this.props.bill);
      }
      onDelete=()=>{
        this.props.onDelete(this.props.bill);
      }
    render() {
        var {bill,stt}=this.props;
        return (
                <tr>
                  <td>{stt}</td>
                  <td>{bill.name}</td>
                  <td>{Format.quantityBill(bill.cart)}</td>
                  <td>{new Date(bill.date.seconds*1000).toDateString()}</td>
                  <td>{bill.email}</td>
                  <td>{bill.phone}</td>
                  <td>{bill.address}</td>
                  <td>
                    <Link to={"/bill-detail/"+bill.id+".html"}  className="option-table">chi tiết</Link>
                  </td>
                  <td className="option">
                   <span >
                      {bill.rulesBill===1 ?(<div style={{marginTop:"1px"}} className="option-table" onClick={this.onClick} >Xác Nhận Đơn Hàng</div>):''}
                      {bill.rulesBill===4?(<div style={{marginTop:"1px"}} className="option-table" onClick={this.onDelete}>Xóa</div>):''}
                      {bill.rulesBill===2 ?(<div style={{marginTop:"1px"}} className="option-table" onClick={this.onClickGo} >Vận chuyển</div>):''}
                      {bill.rulesBill===3 ?(<div style={{marginTop:"1px"}} className="option-table" onClick={this.onClickSuccess} >Xác Nhận Đã Giao</div>):''}
                   </span>
                  </td>
                </tr>
        )
    }
}
