import React, { Component } from 'react'
import * as Format from './../../../conStants/format';

export default class billDetailItem extends Component {
    render() {
        var {bill,stt,name,date,userMail,phone,address,itemProduct}=this.props;
        
        return (
           <>
                <tr>
                <td>{stt}</td>
                <td>{name}</td>
                <td>{new Date(date.seconds*1000).toDateString()}</td>
                <td>{userMail}</td>
                <td>{phone}</td>
                <td>{address}</td>
                <td>
                    {itemProduct.cartProduct.name}
                </td>
                <td>{itemProduct.quantity}</td>
                <td>{Format.FORMAT_CURRENT((itemProduct.cartProduct.price-(itemProduct.cartProduct.price*(itemProduct.cartProduct.priceSale/100)))) } vnđ</td>
                <td>{Format.FORMAT_CURRENT(Format.totalProduct(itemProduct.quantity,itemProduct.cartProduct))} vnđ</td>
                <td>
                    {bill.rulesBill?"Đã Xác Nhận":"Chưa Xác Nhận"}
                </td>
                
            </tr>
            
           </>
                   
        )
    }
}
