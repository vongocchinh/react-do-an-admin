import React, { Component } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddProduct from './../control/addProduct';

import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


export default class product extends Component {

    render() {
        var {ProductMessage}=this.props;
       
        if(ProductMessage.Product_Add_Success){
            toast.success("Thêm thành công !!!");
        }
        if(ProductMessage.Product_Update_Success){
            toast.warning("Chỉnh Sửa thành công !!!");
        }
        if(ProductMessage.Product_Delete_Success){
            toast.error("Xóa thành công !!!");
        }
        return ( 
        <>
            <div className="main-right">
                <div className="main-content-table">
                    <div className="button-group-product">
                        <Button  variant="contained" >
                            <Link className="button-group"  to="/product-Category/dienthoai">Điện thoại</Link>
                        </Button>
                        <Button variant="contained" >
                            <Link className="button-group" to="/product-Category/phukien"> Phụ kiện</Link>
                        </Button>
                        <Button variant="contained" >
                            <Link className="button-group" to="/product-Category/laptop"> Laptop</Link>
                        </Button>
                    </div>
                    <div className="form-top-product">
                        <AddProduct/>
                    </div>
                        <div className="hidden-table">
                            <table className="table-main">
                                <thead>
                                <tr><th className="th-main-table-i">ID</th>
                                    <th className="th-main-table-d">Tên Sản phẩm</th>
                                    <th className="th-main-table-i">Ảnh</th>
                                    <th className="th-main-table-i">Số Lượng</th>
                                    <th className="th-main-table-i">Chi tiết</th>
                                    <th className="th-main-table-d">Gía</th>
                                    <th className="th-main-table-i">Sale</th>
                                    <th className="th-main-table-s">Trạng Thái</th>
                                    <th className="th-main-table-o" />
                                </tr></thead>
                                {this.props.showProduct}
                            </table>
                        </div>
                </div>
            </div>
            </>
        )
    }
}
