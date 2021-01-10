import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { Button } from '@material-ui/core';

export default class brandForm extends Component {
    constructor(props) {
        super(props);
        this.state={
          brandName:'',
          brandId:'',
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
      const {brandName,brandId}=this.state;
      const brand={
          brandName,
          brandId
      }
      
      if(brand){
        this.props.updateBrand(brand);
        this.setState({
          redirect:true
        });
      }
      e.target.reset();
      this.setState({
        brandName:''
      });
    }
    UNSAFE_componentWillMount(){
       
        var brandUpdate=this.props.brand;
        if(brandUpdate){
            this.setState({
                brandName:brandUpdate.brandName,
                brandId:brandUpdate.id
            });
        }else{
            this.setState({
                brandName:'',
                brandId:''
            });
        }
    }
    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.brand ){
            this.setState({
                brandName:nextProps.brand.brandName,
                brandId:nextProps.brand.id
            });
        }else{
            this.setState({
                brandName:'',
                brandId:''
            });
        }
    }
    render() {
        var{redirect}=this.state;
        if(redirect){
            return <Redirect to="/brand" />
        }
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
                          name="brandName" value={this.state.brandName} 
                          onChange={this.onChange} className="input-product-edit"
                          type="text" alt="" placeholder="Nhập để chỉnh sửa..." />
                      </p>
                    </div>
                    <div className="col-main"></div>
                  </div>
                  <div className="row-footer">
                    <input type="hidden"  />
                      <Button type="submit" variant="contained" className="sb-form-button" color="secondary">Lưu Dữ Liệu</Button>
                  </div>
                </div>
              </div>
            </form>
        )
    }
}
