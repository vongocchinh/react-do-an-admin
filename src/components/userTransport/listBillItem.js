import React, { Component } from 'react'
import * as Format from './../../conStants/format'; 
// import { Link } from 'react-router-dom';
 class listBillItem extends Component {

        onClickSuccess=()=>{
        this.props.rulesBillSuccess(this.props.bill);
        }
        showProductBill=(products)=>{
            var result=null;
            if(products){
                result=products.map((product,key)=>{
                    return (
                        <span key={key} >
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
                        </span>
                    )
                })
            }
            return result;
        }
        render() {
            var {bill,stt}=this.props;

            return (
                    <tr>
                    <td>{stt++}</td>
                    <td>{bill.name},<br/>{bill.email},<br/>{bill.phone}</td>
                    {/* <td>{Format.quantityBill(bill.cart)}</td> */}
                    <td>{bill.address},<br/>{bill.xa},<br/>{bill.huyen},<br/>{bill.tinh}</td>
                    <td>
                        <span>{this.showProductBill(bill.cart)}</span>
                    </td>
                    <td>
                        {Format.FORMAT_CURRENT(Format.totalBill(bill.cart))}
                    </td>
                    <td className="option">
                        <span >
                        {bill.rulesBill===3 ?(<div style={{marginTop:"1px"}} className="option-table" onClick={this.onClickSuccess} >Xác Nhận Đã Giao</div>):''}
                        </span>
                    </td>
                    </tr>
        )
    }
}
export default listBillItem;