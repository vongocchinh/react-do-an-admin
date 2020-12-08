import React, { Component } from 'react';
import { DataGrid } from '@material-ui/data-grid';
const columns = [
    { field: 'id', headerName: 'id', width: 50 },
    { field: 'mail', headerName: 'mail', width: 450 },
    { field: 'date', headerName: 'date', width: 350 ,type:'date'},
  ];
  

 class newsletters extends Component {
    render() {
        var arr=this.props.arrData;
        return (
            <div className="main-right">
                    <div className="main-content-table">
                        <p className="table-text"><i className="far fa-calendar-alt" /> Danh Sách newsletter</p>
                        {/* <div className="hidden-table">
                            <table className="table-main">
                                <thead>
                                <tr><th className="th-main-table-i">ID</th>
                                    <th className="th-main-table-d">Email</th>
                                    <th className="th-main-table-s">date</th>
                                </tr></thead>
                            {this.props.showNewsletters}
                            </table>
                        </div> */}
                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid rows={arr} columns={columns} pageSize={5}  />
                        </div>
                    </div>
                </div>

        )
    }
}
export default newsletters;
