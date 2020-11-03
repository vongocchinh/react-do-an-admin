import React, { Component } from 'react'
import User_Moi from './../images/USER_MOI.png';
import Category from './../images/CATEGORY_moi.png';
import FromImg from './../images/form.png';
import IconMenu from './../images/menu.png';
import { Link } from 'react-router-dom';

export default class menuReponsive extends Component {
    render() {
        return (
        <div className="container-left-index3">
                <div className="table-menu">
                <ul id="myMenu">
                    <h4 className="menu-text">CORE</h4>
                    <li className="menu-item">
                    <a href="###" className="text-menu-item active-text-menu"><img alt="###" src={User_Moi} />Dashdoard</a>
                    </li>
                    <div className="panel">
                        <span>
                            <Link to="/" >DashBoard</Link>
                            <Link to="/productList" >Products</Link>
                            <Link to="/productList" >Products</Link>
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
                            <Link to="/user" >Users</Link>
                            <Link to="/productList" >Products</Link>
                            <Link to="/productList" >Products</Link>
                            <Link to="/productList" >Products</Link>
                            <Link to="/productList" >Products</Link>
                        </span>
                    </div>
                    <li className="menu-item ">
                        <a href="###" className="text-menu-item"><img alt="###" src={FromImg} />Quan lý nhân viên</a>
                    </li>
                    <div className="panel">
                        <span>
                             <Link to="/productList" >Products</Link>
                             <Link to="/productList" >Products</Link>
                             <Link to="/productList" >Products</Link>
                        </span> 
                    </div>
                    <li className="menu-item ">
                        <a href="###" className="text-menu-item"><img alt="###" src={IconMenu} />Quản Lý Page</a>
                    </li>
                    <div className="panel">
                        <span>
                             <Link to="/productList" >Products</Link>
                             <Link to="/productList" >Products</Link>
                             <Link to="/productList" >Products</Link>
                        </span>
                    </div>
                    </div>
                    <h4 className="menu-text"> MULTI LEVEL EXAMPLE</h4>
                    <li className="menu-item ">
                    <a href="###" className="text-menu-item"><img alt="###" src={IconMenu} />Quản lý page</a>
                    </li>
                    <div className="panel">
                        <span>
                             <Link to="/productList" >Products</Link>
                             <Link to="/productList" >Products</Link>
                             <Link to="/productList" >Products</Link>
                        </span>
                    </div>
                    <h4 className="menu-text">LOGGED IN AS:ADMIN</h4>
                </ul>
                </div>
        </div>
        )
    }
}
