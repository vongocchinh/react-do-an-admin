import React, { Component } from 'react'
// import { connect } from 'react-redux';
// import { compose } from 'redux';
// import { firestoreConnect } from 'react-redux-firebase';
// import UserItems from './userItem';
// import { DataGrid } from '@material-ui/data-grid';
// const columns = [
//     { field: 'id', headerName: 'id', width: 50 },
//     { field: 'userEmail', headerName: 'userEmail', width: 250 },
//     { field: 'date', headerName: 'date', width: 250 ,type:'date'},
//     { field: 'address', headerName: 'address', width: 250 },
//     { field: 'phone', headerName: 'phone', width: 250 },
//   ];
 class user extends Component {
    render() {
        // var arr=this.props.arr;
        return (
            <>

                <div className="main-right">
                    <div className="main-content-table">
                        <p className="table-text"><i className="far fa-calendar-alt" /> Danh Sách Khách Hàng</p>
                        <div className="hidden-table">
                        <table className="table-main">
                            <thead>
                            <tr><th className="th-main-table-i">ID</th>
                                <th className="th-main-table-d">Email</th>
                                <th className="th-main-table-n">Tên</th>
                                <th className="th-main-table-s">Address</th>
                                <th className="th-main-table-s">Phone</th>
                                <th className="th-main-table-s">Images</th>
                            </tr>
                            </thead>
                            <tbody>
                                {this.props.showUser}
                            </tbody>

                        </table>
                        </div>

                    </div>
                    <div className="pagination-button">
                        {this.props.showIdPage}
                    </div>
                </div>

            </>
        )
    }
}
export default user;
