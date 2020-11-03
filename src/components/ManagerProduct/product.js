import React, { Component } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddProduct from './control/addProduct';
import Search from './control/search';
import Sort from './control/sort';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';


 class product extends Component {
    getBy=(value)=>{
       
        this.props.getBy(value);
    }
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
                        <div className="form-input-search-product">
                            <Sort
                                onSortRedux={this.props.onSortRedux}
                            />
                            <Search 
                                search={this.props.search}
                            />

                        </div>
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
                                {this.props.showData}
                            </table>
                        </div>
                </div>
                <div className="pagination-custom">
                    <ul id="page-numbers" className="page-numbers">
                        {this.props.showIdPage}
                    </ul>
                    <Dropdown className="dropDown-button">
                        <Dropdown.Toggle variant="success" id="dropdown-basic" className="mr-3 button-blue">
                        By Get
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item  onClick={()=>this.getBy(5)}>5</Dropdown.Item>
                            <Dropdown.Item  onClick={()=>this.getBy(10)}>10</Dropdown.Item>
                            <Dropdown.Item  onClick={()=>this.getBy(20)}>20</Dropdown.Item>
                            <Dropdown.Item  onClick={()=>this.getBy(30)}>30</Dropdown.Item>
                            <Dropdown.Item  onClick={()=>this.getBy(50)}>50</Dropdown.Item>
                            <Dropdown.Item  onClick={()=>this.getBy(100)}>100</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            </>
        )
    }
}
export default product;