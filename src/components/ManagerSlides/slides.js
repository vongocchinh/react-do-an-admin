import React, { Component } from 'react'

 class slides extends Component {
    render() {
        return (
            <div className="main-right">
                <div className="main-content-table">
                <p className="table-text"><i className="far fa-calendar-alt" /> Banner</p>
                <div className="hidden-table">
                    <table className="table-main">
                    <thead>
                        <tr><th className="th-main-table-i">ID</th>
                        <th className="th-main-table-n">Tên Slide</th>
                        <th className="th-main-table-n">Ảnh slide</th>
                        <th className="th-main-table-n">Tên San pham</th>
                        <th className="th-main-table-s">Trạng Thái</th>
                        <th className="th-main-table-o" />
                        </tr></thead>
                    <tbody>
                        {this.props.showSlides}
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
export default slides;