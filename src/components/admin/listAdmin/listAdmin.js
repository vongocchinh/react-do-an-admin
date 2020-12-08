import React, { Component } from 'react'
import { DataGrid } from '@material-ui/data-grid';
const columns = [
    { field: 'id', headerName: 'id', width: 50 },
    { field: 'userEmail', headerName: 'userEmail', width: 250 },
    { field: 'phone', headerName: 'phone', width: 150 },
    { field: 'displayName', headerName: 'displayName', width: 150 },
    { field: 'date', headerName: 'date', width: 150 },
  ];
class listAdmin extends Component {
    render() {
        var arr=this.props.data;
        return (
            <div className="main-right">
            <div className="main-content-table">
                <p className="table-text"><i className="far fa-calendar-alt" /> Danh Sách Admin</p>
                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid rows={arr} columns={columns} pageSize={5}  />
                        </div>
            </div>
            </div>
        )
    }
}
export default listAdmin;