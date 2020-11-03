import React, { Component } from 'react';
import * as Format from './../../conStants/format';
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
export default class billItem extends Component {
    
    onClick=()=>{
      
      this.props.rulesBill(this.props.bill);
      this.props.updateQuantity(this.props.bill.cart,this.props.bill);
      
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
                  <td>{bill.userMail}</td>
                  <td>{bill.phone}</td>
                  <td>{bill.address}</td>
                  <td>
                    <Link to={"/bill-detail/"+bill.id+".html"}  className="option-table">chi tiết</Link>
                  </td>
                  <td className="option">
                      
                      <FormControl size="small">
                        <Select style={{fontSize:"13px"}} value={bill.rulesBill} id="grouped-select">
                            <MenuItem onClick={this.onClick} value={true}>Xác Nhận</MenuItem>
                            
                            {bill.rulesBill===false ?(<MenuItem value={false}>Chưa Xác Nhận</MenuItem>):''}
                            {bill.rulesBill?(<MenuItem  onClick={this.onDelete}>Xóa</MenuItem>):''}
                            
                        </Select>
                    </FormControl>
                  </td>
                </tr>
        )
    }
}
