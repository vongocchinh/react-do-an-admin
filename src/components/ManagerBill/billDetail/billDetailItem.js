import React, { Component } from 'react'
import * as Format from './../../../conStants/format';
import { Link } from 'react-router-dom';

export default class billDetailItem extends Component {
    showProductBill=(products)=>{
        var result=null;
        if(products){
            result=products.map((product,key)=>{
                return (
                    <tr key={key} >
                        <td>
                            {product.cartProduct.name}
                        </td>
                        <td>
                            {product.quantity}
                        </td>
                        <td>
                            {Format.FORMAT_CURRENT((product.cartProduct.price-(product.cartProduct.price*(product.cartProduct.priceSale/100)))) } vnđ
                        </td>
                        <td>
                            {Format.FORMAT_CURRENT(Format.totalProduct(product.quantity,product.cartProduct))} vnđ
                        </td>
                    </tr>
                )
            })
        }
        return result;
    }
    render() {
        var {id,bill,stt,name,date,phone,itemProduct}=this.props;
        return (
           <>
           <tr>
                <td>{stt}</td>
                <td>{name}</td>
                <td>{new Date(date.seconds*1000).toDateString()}</td>
                <td>{phone}</td>
                {this.showProductBill(itemProduct)}
                <td>
                    {bill.rulesBill===1?"Chưa Xác Nhận":"Đã Xác Nhận"}
                </td>
                <td>
                    {bill.rulesBill!== 1 ? <Link target="_blank" className="link-inBill" to={"/inBill/"+id}>Xuất Đơn</Link>
                    :
                   ''
                    }
                </td>
            </tr>
           </>
        )
    }
}
