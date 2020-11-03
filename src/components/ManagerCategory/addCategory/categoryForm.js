import React, { Component } from 'react'
import { Button } from '@material-ui/core';

export default class categoryForm extends Component {
    constructor(props) {
        super(props);
        this.state={
          categoryName:'',
          redirect:false
        }
    }
    onChange=(e)=>{
      this.setState({
        [e.target.name]:e.target.value
      });
    }
    onSubmit=(e)=>{
      e.preventDefault();
      const {categoryName}=this.state;
      const category={
          categoryName
      }
      if(category){
        this.props.addCategory(category);
        this.setState({
          redirect:true
        });
      }
      e.target.reset();
      this.setState({
        brandName:''
      });
    }
    render() {
      
        return (
            <form onSubmit={this.onSubmit} >
              <div className="main-content-table">
                <p className="menu-table-main"><i className="far fa-calendar-alt" />Category</p>
                <div className="product-edit">
                  <div className="row-main">
                    <div className="col-main-product">
                      <p className="name-product-edit">Tên Danh Mục</p>
                        <p>
                        <input required autoComplete={"off"} 
                        name="categoryName" onChange={this.onChange} 
                        className="input-product-edit" type="text" alt="" 
                        placeholder="Nhập để chỉnh sửa..." />
                        </p>
                    </div>
                    <div className="col-main"></div>
                  </div>
                  <div className="row-footer">
                    <input type="hidden"  />
                    <Button type="submit" variant="contained" color="secondary" className="sb-form-button">Lưu dữ liệu</Button>
                  </div>
                </div>
              </div>
            </form>
        )
    }
}
