import React, { Component } from 'react'
// import { connect } from 'react-redux';
// import { compose } from 'redux';
// import { firestoreConnect } from 'react-redux-firebase';
// import UserItems from './userItem';

 class user extends Component {
    render() {
        return (
            <>
            
               
                <div className="main-right">
                    <div className="main-content-table">
                        <p className="table-text"><i className="far fa-calendar-alt" /> Danh Sách Khách Hàng</p>
                        <div className="hidden-table">
                        <table className="table-main">
                            <thead>
                            <tr><th className="th-main-table-i">ID</th>
                                <th className="th-main-table-n">Tên</th>
                                <th className="th-main-table-v">userName</th>
                                <th className="th-main-table-d">Email</th>
                                <th className="th-main-table-s">Address</th>
                                <th className="th-main-table-s">phone</th>
                            </tr></thead>
                            
                           {this.props.showUser}
                        </table>
                        </div>
                    </div>
                </div>
                
            </>
        )
    }
}
export default user;
