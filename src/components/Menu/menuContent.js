import React, { Component } from 'react'

export default class dashMenu extends Component {
    render() {
        return (
            <div className="item-menu-main">
                Home /
                <span>Admin</span> / Dashboard
                <div className="ting-main">
                    <i className="fa fa-bell"><span style={{color:"red"}}>1</span></i>
                </div>
            </div>
        )
    }
}
