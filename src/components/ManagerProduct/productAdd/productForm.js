import React, { Component } from 'react'
import { Switch, Button } from '@material-ui/core';
import {Rating} from '@material-ui/lab';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { convertToRaw, convertFromRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
const content = {
    entityMap: {},
    blocks: [
      {
        key: "637gr",
        text: "Initialized from content state.",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {}
      }
    ]
  };
class productForm extends Component {
    constructor(props) {
        super(props);
        const editorState = convertFromRaw(content);
        this.state={
            brand:'hQQ2jBnPjvilkwB3rl10',
            category:'VOuvvetUI7ZPERUBoFF0',
            camAfter:'',
            camBefore:'',
            cpu:'',
            gpu:'',
            description:'',
            images1:'',
            images2:'',
            images3:'',
            images4:'',
            manhinh:'',
            name:'',
            pin:'',
            price:0,
            priceSale:0,
            quantity:0,
            ram:'',
            rom:'',
            star:0,
            statusProduct:false,
            statusQuantity:false,
            redirect:false,
            editorState: editorState,
        }
    }
    onSubmit=(e)=>{
        e.preventDefault();
        const {brand,camAfter,camBefore,category,cpu,gpu,images1,images2
        ,images3,images4,manhinh,name,pin,price,priceSale,quantity,ram,rom,star
        ,statusProduct,statusQuantity}=this.state;
        var starINT=parseInt(star,10);
        var priceINT=parseInt(price,10);
        var priceSaleINT=parseInt(priceSale,10);
        var quantityINT=parseInt(quantity,10);
        var editor=draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));

        var product={
            brand,camAfter,camBefore,category,cpu,description:editor,gpu,images1,images2,images3,images4, 
            manhinh,name,pin,priceINT,priceSaleINT,quantityINT,ram,rom,starINT,statusProduct,statusQuantity
        }
       if(product){
          this.props.addProduct(product);
        this.setState({
            redirect:true
        });
       }
       e.target.reset();
       this.setState({
        brand:'hQQ2jBnPjvilkwB3rl10',
        category:'VOuvvetUI7ZPERUBoFF0',
        camAfter:'',
        camBefore:'',
        cpu:'',
        gpu:'',
        description:'',
        images1:'',
        images2:'',
        images3:'',
        images4:'',
        manhinh:'',
        name:'',
        pin:'',
        price:0,
        priceSale:0,
        quantity:0,
        ram:'',
        rom:'',
        star:0,
        statusProduct:false,
        statusQuantity:false,
        redirect:false
       });
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
    onEditorStateChange=(editorState) => {
        this.setState({
          editorState,
        });
      };
    onChangeImages=(e)=>{
        if(e.target.files[0]){
            const images1=e.target.files[0];
            this.setState({
                images1:images1,
            });
        }
    }
    onChangeImages2=(e)=>{
        if(e.target.files[0]){
            const images2=e.target.files[0];
            this.setState({
                images2:images2
            });
        }
    }
    handleEditorChange=(description)=>{
        this.setState({
            description:description
        });
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="main-content-table">
                    <p className="menu-table-main"><i className="far fa-calendar-alt" /> Product</p>
                    <div className="product-edit">
                        <div className="row-main">
                            <div className="col-main-product">
                                <p className="name-product-edit">Tên sản phẩm</p>
                                    <p><input required  name="name" className="input-product-edit" type="text" onChange={this.onChange} alt="" placeholder="Nhập để chỉnh sửa..." /></p>
                                <p className="name-product-edit">Tên hãng</p>
                                    <p>
                                        <select name="brand" value={this.state.brand}  className="input-product-edit" type="text" onChange={this.onChange} alt="" placeholder="Nhập để chỉnh sửa..." >
                                        {this.props.showBrand}
                                        </select>
                                    </p>
                                <p className="name-product-edit">Tên danh mục</p>
                                    <p>
                                        <select name="category" value={this.state.category} className="input-product-edit" type="text" onChange={this.onChange} alt="" placeholder="Nhập để chỉnh sửa..." >
                                            {this.props.showCategory}
                                        </select>
                                    </p>
                                <p className="name-product-edit">Màn hình</p>
                                    <p><input required  name="manhinh" className="input-product-edit" type="text" onChange={this.onChange} alt="" placeholder="Nhập để chỉnh sửa..." /></p>
                                <p className="name-product-edit">Product-pin</p>
                                    <p><input required  name="pin" className="input-product-edit" type="text" onChange={this.onChange} alt="" placeholder="Nhập để chỉnh sửa..." /></p>
                                <p className="name-product-edit">Ảnh 1</p>
                                    <p><input   onChange={this.onChangeImages}  className="input-product-edit" type="file" alt="" placeholder="Nhập để chỉnh sửa..." /></p>
                                <p className="name-product-edit">Ảnh 2</p>
                                    <p><input required  name="images2"  onChange={this.onChangeImages2} className="input-product-edit" type="file" alt="" placeholder="Nhập để chỉnh sửa..." /></p>
                                <p className="name-product-edit">Cam Sau</p>
                                    <p><input required  name="camAfter" className="input-product-edit" type="text" onChange={this.onChange} alt="" placeholder="Nhập để chỉnh sửa..." /></p>               
                                <p className="name-product-edit">Cam trước</p>
                                    <p><input required  name="camBefore" className="input-product-edit" type="text" onChange={this.onChange} alt="" placeholder="Nhập để chỉnh sửa..." /></p>
                                <p className="name-product-edit">Main-cpu</p>
                                    <p><input required  name="cpu" className="input-product-edit" type="text" onChange={this.onChange} alt="" placeholder="Nhập để chỉnh sửa..." /></p>
                                <p className="name-product-edit">Hệ điều hành</p>
                                    <p><input required  name="gpu" className="input-product-edit" type="text" onChange={this.onChange} alt="" placeholder="Nhập để chỉnh sửa..." /></p>
                            </div>
                            <div className="col-main-product">
                                <p className="name-product-edit">Product-Price (vnd)</p>
                                <p><input required  name="price" className="input-product-edit" type="text" onChange={this.onChange} alt="" placeholder="Nhập để chỉnh sửa..." /></p>
                                <p className="name-product-edit">PriceSale (%)</p>
                                <p><input required  name="priceSale" className="input-product-edit" type="text" onChange={this.onChange} alt="" placeholder="Nhập để chỉnh sửa..." /></p>
                                <p className="name-product-edit">Main-Star</p>
                                <p>
                                    <Rating name="star" mb={3} className="input-product-star"  onChange={this.onChange}/>
                                </p>
                                <p className="name-product-edit">StatusProduct</p>
                                <p>
                                <Switch
                                        onChange={this.onChangeSwitch}
                                        name="statusProduct"
                                    />
                                </p>
                                <p className="name-product-edit">StatusQuantity</p>
                                <p>
                                    <Switch
                                        onChange={this.onChangeSwitch}
                                        name="statusQuantity"
                                    />
                                </p>
                                <p className="name-product-edit">Ảnh 3</p>
                                <p><input    name="images3" onChange={this.onChange} className="input-product-edit" type="file" alt="" placeholder="Nhập để chỉnh sửa..." /></p>
                                <p className="name-product-edit">Ảnh 4</p>
                                <p><input    name="images4" onChange={this.onChange} className="input-product-edit" type="file" alt="" placeholder="Nhập để chỉnh sửa..." /></p>
                                <p className="name-product-edit">Quantity</p>
                                <p><input required  name="quantity" className="input-product-edit" type="text" onChange={this.onChange} alt="" placeholder="Nhập để chỉnh sửa..." /></p>
                                <p className="name-product-edit">Main-Ram</p>
                                <p><input required  name="ram" className="input-product-edit" type="text" onChange={this.onChange} alt="" placeholder="Nhập để chỉnh sửa..." /></p>
                                <p className="name-product-edit">Main-Rom</p>
                                <p><input required  name="rom" className="input-product-edit" type="text" onChange={this.onChange} alt="" placeholder="Nhập để chỉnh sửa..." /></p>
                            </div>
                        </div>
                        <div className="row-footer-editor">
                            <p className="name-product-edit-ckeditor">Mô tả</p>
                                <Editor
                                    className="input-product-edit-textarea"
                                    wrapperClassName="wrapper-class"
                                    editorClassName="editor-class"
                                    toolbarClassName="toolbar-class"
                                    onEditorStateChange={this.onEditorStateChange}
                                />
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
export default  productForm;