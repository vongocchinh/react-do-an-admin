import { Button } from '@material-ui/core';
import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom';

export default class brandForm extends Component {
    constructor(props) {
        super(props);
        this.state={
          brandName:'',
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
      const {brandName}=this.state;
      const brand={
          brandName
      }
      if(brand){
        this.props.addBrand(brand);
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
                <p className="menu-table-main"><i className="far fa-calendar-alt" />Brand</p>
                <div className="product-edit">
                  <div className="row-main">
                    <div className="col-main-product">
                      <p className="name-product-edit">Tên sản phẩm</p>
                      <p>
                        <input required autoComplete={"off"} 
                            name="brandName" onChange={this.onChange} 
                            className="input-product-edit" type="text" 
                             placeholder="Nhập để chỉnh sửa..." 
                        />
                      </p>
                    </div>
                    <div className="col-main"></div>
                  </div>
                  <div className="row-footer">
                    <input type="hidden"  />
                      <Button variant="contained" type="submit" className="sb-form-button" color="secondary">Lưu Dữ Liệu</Button>
                  </div>
                </div>
              </div>

            </form>
        )
    }
}
