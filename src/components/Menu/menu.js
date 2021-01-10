import React, { Component } from 'react'
import User_Moi from './../images/USER_MOI.png';
import Category from './../images/CATEGORY_moi.png';
import FromImg from './../images/form.png';
import IconMenu from './../images/menu.png';
import { Link } from 'react-router-dom';
var billImages="https://image.flaticon.com/icons/png/512/1466/1466668.png";
var iconAdmin="https://www.flaticon.com/svg/static/icons/svg/2206/2206368.svg";
export default class menu extends Component {
    render() {
        return (
            <div className="container-left-index2">
                <div className="table-menu">
                <ul id="myMenu">
                    <h4 className="menu-text">CORE</h4>
                    <li className="menu-item">
                    <a href="###" className="text-menu-item active-text-menu"><img alt="###" src={User_Moi} />Dashdoard</a>
                    </li>
                    <div className="panel">
                        <span>
                            <Link to="/" >DashBoard</Link>
                            <Link to="/admin" >Tài khoản</Link>
                        </span>
                    </div>
                    <div className="overflow-main" id="style-1">
                    <h4 className="menu-text menu-text-h4">INTERFACE</h4>
                    <li className="menu-item">
                        <a href="###" className="text-menu-item"><img alt="###" src={Category} />Quản lý danh mục</a>
                    </li>
                    <div className="panel">
                        <span>
                            <Link to="/productList" >Products</Link>
                            <Link to="/brand" >Brands</Link>
                            <Link to="/category" >Category</Link>
                            <Link to="/slides" >Slides</Link>
                        </span>
                    </div>
                    <li className="menu-item ">
                        <a href="###" className="text-menu-item"><img alt="###" src={FromImg} />Quan lý thêm</a>
                    </li>
                    <div className="panel">
                        <span>
                             <Link to="/brandAdd" >Brands</Link>
                             <Link to="/categoryAdd" >Category</Link>
                             <Link to="/productAdd" >Products</Link>
                             <Link to="/addSlides">Slides</Link>
                        </span>
                    </div>
                    <li className="menu-item ">
                        <a href="###" className="text-menu-item"><img alt="###" src={IconMenu} />Quản Lý khách hàng</a>
                    </li>
                    <div className="panel">
                        <span>
                             <Link to="/newsletters" >Newsletters</Link>
                             <Link to="/user" >Users</Link>
                             <Link to="/contact" >Contacts</Link>
                        </span>
                    </div>
                    <li className="menu-item ">
                        <a href="###" className="text-menu-item"><img alt="###" src={billImages} />Quản Lý Đơn Hàng</a>
                    </li>
                    <div className="panel">
                        <span>
                             <Link to="/bill" >Đơn hàng</Link>
                             <Link to="/ordered">Đơn hàng đang giao</Link>
                             <Link to="/ordersDelivered" >Đơn hàng đã giao</Link>
                             <Link to="/orderConfirmation">Đơn hàng đã xác nhận</Link>
                        </span>
                    </div>
                    </div>

                    <h4 className="menu-text"> MULTI LEVEL EXAMPLE</h4>
                    <li className="menu-item ">
                    <a href="###" className="text-menu-item"><img alt="###" src={iconAdmin} />Quản lý page</a>
                    </li>
                    <div className="panel">
                        <span>
                             <Link to="/register" >Register Admin</Link>
                             <Link to="/listAdmin" >List Admin</Link>
                        </span>
                    </div>
                    <h4 className="menu-text">LOGGED IN AS:ADMIN</h4>
                </ul>
                </div>
            </div>
        )
    }
}
