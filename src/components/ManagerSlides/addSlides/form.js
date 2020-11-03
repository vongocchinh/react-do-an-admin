import React, { Component } from 'react'
import { Button, Switch } from '@material-ui/core';

 class form extends Component {
     constructor(props) {
         super(props);
         this.state={
            slidesImages:'',
            idProduct:'09zNU6PgiMmxlMB6S3XH',
            slidesName:'',
            ruleSlides:false
         };
     }
     onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    onChangeSwitch=(e)=>{
        this.setState({
            [e.target.name]:e.target.checked
        });
        
    }
    onChangeImages=(e)=>{
        if(e.target.files[0]){
            const slidesImages=e.target.files[0];
            
            this.setState({
                slidesImages:slidesImages,
               
            });
        }
        
    }
    onSubmit=(e)=>{
        e.preventDefault();
        var {idProduct,ruleSlides,slidesImages,slidesName}=this.state;
        var slides={
            idProduct,
            ruleSlides,
            slidesImages,
            slidesName
        }
        this.props.addSlides(slides);
        e.target.reset();
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="main-content-table">
                    <p className="menu-table-main"><i className="far fa-calendar-alt" />Slide</p>
                    <div className="product-edit">
                        <div className="row-main">
                            <div className="col-main-product">
                                <p className="name-product-edit">Sản Phẩm</p>
                                    <p>
                                        <select name="idProduct" value={this.state.idProduct}  className="input-product-edit" type="text" onChange={this.onChange} alt="" placeholder="Nhập để chỉnh sửa..." >
                                        {this.props.showProduct}
                                        </select>
                                    </p>
                                <p className="name-product-edit">StatusSlides</p>
                                <p>
                                <Switch
                                        onChange={this.onChangeSwitch}
                                        name="ruleSlides"
                                    />
                                </p>
                                <p className="name-product-edit">Tên Slide</p>
                                    <p><input required  name="slidesName" className="input-product-edit" type="text" onChange={this.onChange} alt="" placeholder="Nhập để chỉnh sửa..." /></p>
                                <p className="name-product-edit">Slide Img</p>
                                    <p><input required  onChange={this.onChangeImages}  className="input-product-edit" type="file" alt="" placeholder="Nhập để chỉnh sửa..." /></p>
                               </div>
                        </div>
                        <div className="row-footer">
                            <p><input    type="hidden"  /></p>
                            <p>
                                <Button type="submit" variant="contained" color="secondary" className="sb-form-button">Lưu dữ liệu</Button>
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}
export default form;