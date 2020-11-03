import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { Button } from '@material-ui/core';

export default class categoryForm extends Component {
    constructor(props) {
        super(props);
        this.state={
          categoryName:'',
          categoryId:'',
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
      const {categoryName,categoryId}=this.state;
      const category={
          categoryName,
          categoryId
      }
      if(category){
        this.props.updateCategory(category);
        this.setState({
          redirect:true
        });
      }
      e.target.reset();
      this.setState({
        categoryName:'',
        categoryId:''
      });
    }
    UNSAFE_componentWillMount(){
       
        var categoryUpdate=this.props.category;
        if(categoryUpdate){
            this.setState({
                categoryName:categoryUpdate.categoryName,
                categoryId:categoryUpdate.id
            });
        }else{
            this.setState({
              categoryName:'',
              categoryId:''
            });
        }
    }
    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.category ){
            this.setState({
                categoryName:nextProps.category.categoryName,
                categoryId:nextProps.category.id
            });
        }else{
            this.setState({
                categoryName:''
            });
        }
    }
    render() {
        var{redirect}=this.state;
        if(redirect){
            return <Redirect to="/category" />
        }
        return (
            <form onSubmit={this.onSubmit} >
              <div className="main-content-table">
                <p className="menu-table-main"><i className="far fa-calendar-alt" />category</p>
                <div className="product-edit">
                  <div className="row-main">
                    <div className="col-main-product">
                      <p className="name-product-edit">Tên sản phẩm</p>
                      <p>
                        <input required autoComplete={"off"} 
                        name="categoryName" value={this.state.categoryName} 
                        onChange={this.onChange} className="input-product-edit" 
                        type="text" alt="" placeholder="Nhập để chỉnh sửa..." />
                      </p>
                    </div>
                    <div className="col-main-product"></div>
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
