import React, { Component } from 'react';
import * as actions from '../../actions/slides';
import { connect } from 'react-redux';
import Slides from './../../components/ManagerSlides/addSlides/slides';
import { firestoreConnect } from 'react-redux-firebase';
import {compose} from 'redux';
import Product from './../../components/ManagerSlides/addSlides/product';
import { Redirect } from 'react-router-dom';
import {toast} from 'react-toastify';
import { Dialog, DialogContent, CircularProgress } from '@material-ui/core';
class slidesAdd extends Component {
    render() {
        var {ProductFireStore,SlideMessage}=this.props;
        if(SlideMessage.addSlidesRequest){
            return <Dialog open={true}>
                        <DialogContent>
                            <CircularProgress aria-labelledby="simple-dialog-title" />
                        </DialogContent>
                    </Dialog>;
        }
        if(SlideMessage.addSlidesSuccess){
            toast.success("Thêm slides thành công !");
            return <Redirect to="/slides" />
        }
        return (
            <>
                <Slides
                    showProduct={this.showProduct(ProductFireStore)}
                    addSlides={this.addSlides}
                />
            </>
        )
    }
    addSlides=(slides)=>{
       this.props.ADD_SLIDES(slides);
    }
    showProduct=(products)=>{
        var result=null;
        if(products){
            result=products.map((product,key)=>{
                return <Product
                    product={product}
                    key={key}
                 />
            })
        }
        return result;
    }
}
const mapStateToProps=(state)=>{
    return {
        ProductFireStore:state.getFirestore.ordered.products,
        SlideMessage:state.Slides
    }
}
const dispatchStateToProps=(dispatch,props)=>{
    return{
        ADD_SLIDES:(slide)=>{
            dispatch(actions.ADD_SLIDES(slide));
        }
    }
}
export default  
compose(connect(mapStateToProps,dispatchStateToProps),
firestoreConnect(own=>[
    {
        collection:"products"
    }
]))
(slidesAdd);