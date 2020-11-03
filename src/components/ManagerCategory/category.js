import React, { Component } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class category extends Component {
    render() {
        var {CategoryMessage}=this.props;
        if(CategoryMessage.Category_Add_Success){
            toast.success('Thêm thành công !!!');
        }
        if(CategoryMessage.Category_Update_Success){
            toast.warning('Chỉnh sửa thành công !!!');
        }
        if(CategoryMessage.Category_Delete_Success){
            toast.error('Xóa thành công !!!');
        }
        return (
            <div className="main-right">
            <div className="main-content-table">
                <div className="form-top-product">
                    <div className="text-left">
                        <p className="table-text"><i className="far fa-calendar-alt" /> Danh Sách Category</p>
                    </div>
                    <div className="form-input-search-product">
                        
                    </div>
                </div>
                
                <div className="hidden-table">
                <table className="table-main">
                    <thead>
                        <tr>
                            <th className="th-main-table-i">ID</th>
                            <th className="th-main-table-n">Tên Danh Mục</th>
                            <th className="th-main-table-s">options</th>
                        </tr>
                    </thead>
                    
                   {this.props.showCateGory}
                </table>
                </div>
            </div>
        </div>
        )
    }
}
