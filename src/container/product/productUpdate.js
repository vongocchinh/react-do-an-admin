/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import ProductEdit from '../../components/ManagerProduct/productEdit/productEdit';
import ProductForm from './../../components/ManagerProduct/productEdit/productForm';
import Brand from './../../components/ManagerProduct/productEdit/item/brand';
import Category from './../../components/ManagerProduct/productEdit/item/category';
import * as actions from './../../actions/product';
import { Redirect } from 'react-router-dom';
import { Dialog } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';


 class productUpdate extends Component {
     
    render() {
       
        var {productStore,ProductMessage}=this.props;
        var {id}=this.props.match.params;
        
        if(ProductMessage.Product_Update_Request){
            return <Dialog open={true}>
                        <DialogContent>
                            <CircularProgress />
                        </DialogContent>
                    </Dialog>;
        }
        if(ProductMessage.Product_Update_Success){
            return <Redirect to="/productList" />
        }
        return (
            <ProductEdit 
                showData={this.showData(productStore,id)}
            />
        )
    }
    
    showData=(products,id)=>{
        var result='';
        result=(products && products.map((product,key)=>{
            if(product.id===id){
                return <ProductForm
                        product={product}
                        key={key}
                        showBrand={this.showBrand(this.props.brandStore)}
                        showCategory={this.showCategory(this.props.categoryStore)}
                        updateProduct={this.updateProduct}
                        updateImagesProduct={this.updateImagesProduct}
                     />
            }
        }))
        return result;
    }
    updateProduct=(productUpdate)=>{
        this.props.updateProduct(productUpdate);
    }
    updateImagesProduct=(productUpdateImages)=>{
        this.props.updateImagesProduct(productUpdateImages);
    }
    showBrand=(data)=>{
        var result='';
        result=(data && data.map((item,key)=>{
            return <Brand brand={item} key={key} />
        }))
        return result;
    }
    showCategory=(data)=>{
        var result='';
        result=(data && data.map((item,key)=>{
            return <Category category={item} key={key} />
        }))
        return result;
    }
}
const mapStateToProps=(state)=>{
    return{
        productStore:state.getFirestore.ordered.products,
        brandStore:state.getFirestore.ordered.brand,
        categoryStore:state.getFirestore.ordered.category,
        ProductMessage:state.ProductMessage
    }
}
const dispatchToProps=(dispatch,props)=>{
    return{
       
        updateProduct:(productUpdate)=>{
            dispatch(actions.UPDATE_PRODUCT_REQUEST(productUpdate));
        },
        updateImagesProduct:(updateImagesProduct)=>{
            dispatch(actions.updateImagesProduct(updateImagesProduct));
        }
    }
}
export default  
compose(connect(mapStateToProps,dispatchToProps),
firestoreConnect(ownProps=>[
    {
        collection:"products"
    },
    {
        collection:"brand"
    },
    {
        collection:"category"
    }
]))
(productUpdate);