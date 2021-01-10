
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Mail from './mails/mail';


export default class header extends Component {
    logout=()=>{
        this.props.logout();
    }
    render() {
        return (
            <header className="header">
                <nav className="navbar navbar-expand-lg navbar-light">
                <a href="###" className="navbar-brand1" >ADMIN</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link1" >Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/" className="nav-link1" >Mega <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active nav-item-active ">
                        <Link to="/menu-reponsize" className="nav-link1" >Menu <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item dropdown active">
                        <a href="###"className="nav-link1 dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Setting
                        </a>
                        <div className="dropdown-menu dropdown-menu1" aria-labelledby="navbarDropdown">
                            <Link to="/admin" className="dropdown-item" >Tài Khoản</Link>
                            <button onClick={this.logout} className="dropdown-item" >Đăng Xuất</button>
                        </div>
                    </li>
                    <li className="nav-item dropdown active right-mail">
                        <Mail/>
                    </li>
                    </ul>
                </div>
                </nav>
            </header>
        )
    }
}
