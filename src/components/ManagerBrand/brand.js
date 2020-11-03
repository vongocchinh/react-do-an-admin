import React, { Component } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Dropdown } from 'react-bootstrap';
 class brand extends Component {
     onSort=(name,value)=>{
         var sort={
             name:name,
             value:value
         }
         this.props.onSort(sort);
     }
    render() {
        var {BrandMessage}=this.props;
        
        if(BrandMessage.Brand_Success){
            toast.success("Thêm thành công !!!")
        }
        if(BrandMessage.Brand_Delete_Success){
            toast.error("Xóa thành công !!!");
        }
        if(BrandMessage.Brand_Update_Success){
            toast.success("Update thành công !!!");
        }
        return (
           <>
            
                <div className="main-right">
                    <div className="main-content-table">
                        <div className="form-top-product">
                            <div className="text-left">
                                <p className="table-text"><i className="far fa-calendar-alt" /> Danh Sách Brands</p>
                            </div>
                            <div className="form-input-search-product">
                                <Dropdown className="dropDown-button">
                                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="mr-3 button-blue">
                                    SortProduct
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item  onClick={()=>this.onSort('name',1)}>Từ A-z</Dropdown.Item>
                                        <Dropdown.Item  onClick={()=>this.onSort('name',-1)}>Từ Z-A</Dropdown.Item>
                                        
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        
                        <div className="hidden-table">
                        <table className="table-main">
                            <thead>
                            <tr><th className="th-main-table-i">ID</th>
                                <th className="th-main-table-n">Tên Hãng</th>
                                
                                <th className="th-main-table-s">options</th>
                            </tr></thead>
                            
                           {this.props.showBrand}
                        </table>
                        </div>
                    </div>
                </div>
           </>
            
        )
    }
}
export default brand;