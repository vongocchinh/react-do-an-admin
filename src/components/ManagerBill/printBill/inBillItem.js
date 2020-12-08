import React, { Component } from 'react'
import ReactToPrint from "react-to-print";
import * as Format from '../../../conStants/format';
import CHUKY from './../../images/chu-ky-wikici.png';
class ComponentToPrint extends Component {
    showBillProduct=(products)=>{
        
        var result=null;
        if(products){
            result=products.map((product,key)=>{
                return(
                    <tr key={key} className="bottom-table">
                        <td className="name-product-bill name-product-bill-right-1">
                            {product.cartProduct.name}
                        </td>
                        <td className="name-product-bill-right name-product-bill-right-2">
                            {Format.FORMAT_CURRENT((product.cartProduct.price
                            -(product.cartProduct.price*
                            (product.cartProduct.priceSale/100)))) } đ
                        </td>
                        <td className="name-product-bill-right name-product-bill-right-3">
                            {product.quantity}
                        </td>
                        <td className="name-product-bill-right name-product-bill-right-4">
                        {Format.FORMAT_CURRENT(Format.totalProduct(product.quantity,product.cartProduct))} đ
                        </td>
                    </tr>
                )
            })
        }
        return result;
    }
    render() {
        
        var {name,date,emails,phone,address,huyen,tinh,xa,itemProduct}=this.props;

        return (
           <>
            <div className="container-bill-print">
                <div className="bill-print-layout">
                    <div className="bill-print-header">
                        <div className="bill-print-header-1">
                            <h3>Shop Phone</h3>
                        </div>
                        <div className="bill-print-header-2">
                            <p className="bill-print-header-2-p">+84 763 717 084</p>
                            <p className="bill-print-header-2-p">NgocChinh1410@gmail.com</p>
                            <p className="bill-print-header-2-p">ShopPhoneUyTin.com</p>
                        </div>
                        <div className="bill-print-header-3">
                            <p className="bill-print-header-3-p">Đà Nẵng , Liên Chiểu</p>
                            <p className="bill-print-header-3-p" >61 , Phạm Như Xương ,Hòa Khánh Nam</p>
                        </div>
                    </div>
                    <div className="bill-print-main">
                        <div className="bill-print-main-1">
                            <p><strong>Nơi Nhận:</strong></p>
                            <p className="title-p-title-p"><i>{tinh} , {huyen}</i></p>
                            <p className="title-p-title-p"><i>{address} ,{xa}</i></p>
                            <p style={{paddingTop: '10px'}}><strong>Ngày Đặt:</strong></p>
                            <p className="title-p-title-p"><i>{new Date(date.seconds*1000).toDateString()}</i></p>
                        </div>
                        <div className="bill-print-main-2">
                            <p><strong>Khách Hàng:</strong></p>
                            <p className="title-p-title-p">Tên Người Nhận: <i>{name}</i></p>
                            <p className="title-p-title-p">Số Điện Thoại: <i>{phone}</i></p>
                            <p className="title-p-title-p">Email: <i>{emails}</i></p>
                        </div>
                        <div className="bill-print-main-3">
                            <p><strong><u>Tổng Đơn Hàng:</u></strong></p>
                            <h3 className="title-p-title-p-money"><i>{Format.FORMAT_CURRENT(Format.totalBill(itemProduct))} <span>vnđ</span></i></h3>
                        </div>
                    </div>
                    <div className="bill-print-main-body">
                        <table>
                        <thead>
                            <tr>
                            <td className="name-product-bill name-product-bill-right-1">
                                <strong>Tên Sản Phẩm</strong>
                            </td>
                            <td className="name-product-bill-right name-product-bill-right-2">
                                <strong>Giá</strong>
                            </td>
                            <td className="name-product-bill-right name-product-bill-right-3">
                                <strong>Số Lượng</strong>
                            </td>
                            <td className="name-product-bill-right name-product-bill-right-4">
                                <strong>Tổng</strong>
                            </td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.showBillProduct(itemProduct)}
                        </tbody>
                        </table>
                    </div>
                    <div className="bill-bottom-print">
                        <table>
                        <tbody><tr>
                            <td className="table-bill-bottom">Tổng tiền</td>
                            <td>{Format.FORMAT_CURRENT(Format.totalBill(itemProduct))} vnđ</td>
                            </tr>
                            <tr>
                            <td className="table-bill-bottom">Phí vận chuyển</td>
                            <td>Miễn phí</td>
                            </tr>
                            <tr>
                            <td className="table-bill-bottom">Tổng</td>
                            <td>{Format.FORMAT_CURRENT(Format.totalBill(itemProduct))} vnđ</td>
                            </tr>
                        </tbody></table>
                    </div>
                    <div className="bill-ky">
                        <div className="bill-ky-left">
                            <p><u>Xác nhận cửa hàng</u></p>
                            <img className="images-print-bill" src={CHUKY}  alt="###" />
                        </div>
                        <div className="bill-ky-right">
                            <p><u>Chữ ký người mua</u></p>
                        </div>
                    </div>
                    <div className="contact-bill-print">
                        <p><strong>Liên hệ Điện Thoại:</strong> +84 763 717 084</p>
                    </div>
                    <div className="contact-bill-print">
                        <p><strong>Liên hệ Email:</strong> Ngocchinh1410@gmail.com</p>
                    </div>
                </div>
            </div>
           </>
        )
    }
}
 class inBillItem extends Component {
    render() {
        var {name,date,userMail,phone,address,huyen,tinh,xa,itemProduct}=this.props;
        return (
            <div>
            <div className="button-bill-print">
                <ReactToPrint
                    trigger={() => <a  href="###">In Hóa Đơn</a>}
                    content={() => this.componentRef}
                    />
            </div>
            <ComponentToPrint 
                name={name}
                date={date}
                userMail={userMail}
                phone={phone}
                address={address}
                huyen={huyen}
                tinh={tinh}
                xa={xa}
                itemProduct={itemProduct}
                 ref={el => (this.componentRef = el)} />
          </div>
        )
    }
}
export default inBillItem;