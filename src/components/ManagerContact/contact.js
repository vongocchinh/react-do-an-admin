import React, { Component } from 'react'
// import { DataGrid } from '@material-ui/data-grid';

// const columns = [
//     { field: 'id', headerName: 'id', width: 50 },
//     { field: 'lastName', headerName: 'lastName', width: 150 },
//     { field: 'firstName', headerName: 'firstName', width: 150 },
//     { field: 'email', headerName: 'email', width: 150 },
//     { field: 'phone', headerName: 'phone', width: 150 },
//     { field: 'message', headerName: 'message', width: 150 ,title:'message'},
//     { field: 'date', headerName: 'date', width: 150 },
//   ];
 class contact extends Component {
    render() {
        
        return (
            <>
            <div className="main-right">
                    <div className="main-content-table">
                        <p className="table-text"><i className="far fa-calendar-alt" /> Danh Sách Khách Hàng Contact</p>
                        <div className="hidden-table">
                        <table className="table-main">
                            <thead>
                            <tr><th className="th-main-table-i">ID</th>
                                <th className="th-main-table-s">FirstName</th>
                                <th className="th-main-table-s">LastName</th>
                                <th className="th-main-table-s">Email</th>
                                <th className="th-main-table-s">Phone</th>
                                <th className="th-main-table-n">Message</th>
                                <th className="th-main-table-s">Date</th>
                            </tr></thead>
                            {this.props.showContact}
                        </table>
                        </div>
                        <div className="pagination-button">
                            {this.props.showPagination}
                        </div>
                        </div>
                        </div>
            </>
        )
    }
}
export default contact;