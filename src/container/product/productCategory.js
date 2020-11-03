/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import ProductCategory from './../../components/ManagerProduct/productCategory/product';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import ProductItem from './../../components/ManagerProduct/productCategory/productItem';
import * as action from '../../actions/product';
import { Dialog } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';
 class productCategory extends Component {
    render() {
        var {categoryName}=this.props.match.params;
        var {productMessage,ProductFirestore}=this.props;
        return (
           <ProductCategory
               showProduct={this.showProduct(ProductFirestore,categoryName)}
               ProductMessage={productMessage}
           />
        )
    }
    showProduct=(products,categoryName)=>{
        var result=null;
       if(products){
            if(categoryName==="dienthoai"){
               
                result=products.map((product,key)=>{
                    if(product.category==='VOuvvetUI7ZPERUBoFF0'){
                        return <ProductItem 
                            product={product}
                            key={key}
                            stt={key}
                            onDelete={this.onDelete}
                            onStatus={this.onStatus}
                        />
                    }
                })
            }else if(categoryName==='phukien'){
                result=products.map((product,key)=>{
                    if(product.category==='zI2UEXEVpenNmwrH29Y7'){
                        return <ProductItem 
                            product={product}
                            key={key}
                            stt={key}
                            onDelete={this.onDelete}
                            onStatus={this.onStatus}
                        />
                    }
                })
            }else{
                result=products.map((product,key)=>{
                    if(product.category==='Dr2g7kHczOgEzcde2GQT'){
                        return <ProductItem 
                            product={product}
                            key={key}
                            stt={key}
                            onDelete={this.onDelete}
                            onStatus={this.onStatus}
                        />
                    }
                })
            }
       }else{
        return <Dialog open={true}>
                <DialogContent>
                    <CircularProgress aria-labelledby="simple-dialog-title" />
                </DialogContent>
            </Dialog>;
       }
       return result;
    }
    onDelete=(products)=>{
        this.props.onDelete(products);
    }
    onStatus=(products)=>{
        this.props.onStatus(products);
    }
}
const mapStateToProps=(state)=>{
    return {
        ProductFirestore:state.getFirestore.ordered.products,
        productMessage:state.ProductMessage
    }
}
const dispatchToProps=(dispatch,props)=>{
    return {
        onDelete:(products)=>{
            dispatch(action.DELETE_PRODUCT_REQUEST(products));
        },
        onStatus:(products)=>{
            dispatch(action.UPDATE_STATUS(products));

        },
    }
}
export default 
compose(connect(mapStateToProps,dispatchToProps),
firestoreConnect(own=>[
    {
        collection:"products"
    }
]))
(productCategory);