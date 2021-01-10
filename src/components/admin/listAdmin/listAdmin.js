import React, { Component } from 'react'

class listAdmin extends Component {
    render() {
        // var arr=this.props.data;
        return (
            <div className="main-right">
            <div className="main-content-table">
                <p className="table-text"><i className="far fa-calendar-alt" /> Danh Sách Admin</p>
                <div className="hidden-table">
                    <table className="table-main">
                    <thead>
                            <tr>
                                <th className="th-main-table-i">ID</th>
                                <th className="th-main-table-o">Images</th>
                                <th className="th-main-table-d">UserEmail</th>
                                <th className="th-main-table-o">Phone</th>
                                <th className="th-main-table-d">Address</th>
                                <th className="th-main-table-0">Level</th>
                                <th className="th-main-table-d">Date</th>
                                <th className="th-main-table-0">Kich hoat</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.show}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="pagination-button">
                        {this.props.showPagination}
                </div>
            </div>
        )
    }
}
export default listAdmin;