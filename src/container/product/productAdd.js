/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import { connect } from 'react-redux';
import ProductAdd from './../../components/ManagerProduct/productAdd/productAdd';
import  * as actions from './../../actions/product'; 
import { firestoreConnect } from 'react-redux-firebase';
import {compose} from 'redux';
import Brand from './../../components/ManagerProduct/productAdd/item/brand';
import Category from './../../components/ManagerProduct/productAdd/item/category';
import { Redirect } from 'react-router-dom';
import { Dialog } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';

 class productAdd extends Component {
    render() {
        var {BrandStore,CategoryStore,ProductMessage}=this.props;
        
        if(ProductMessage.Product_Add_Request){
            return <Dialog open={true}>
                        <DialogContent>
                            <CircularProgress />
                        </DialogContent>
                    </Dialog>;
        }
        if(ProductMessage.Product_Add_Success){
            return <Redirect to='/productList' />
        }
        return (
            <ProductAdd 
                addProduct={this.addProduct}
                showBrand={this.showBrand(BrandStore)}
                showCategory={this.showCategory(CategoryStore)}
            />
        )
    }
    addProduct=(product)=>{
        this.props.addProduct(product);
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
        CategoryStore:state.getFirestore.ordered.category,
        BrandStore:state.getFirestore.ordered.brand,
        ProductMessage:state.ProductMessage
    }
}
const dispatchToProps=(dispatch,props)=>{
    return{
        addProduct:(product)=>{
            dispatch(actions.ADD_PRODUCT_REQUEST(product));
        }
    }
}
export default
compose((connect(mapStateToProps,dispatchToProps)),
 firestoreConnect(ownProps=>[
     {
         collection:"brand",
     },
     {
         collection:"category"
     }
 ]))
(productAdd);