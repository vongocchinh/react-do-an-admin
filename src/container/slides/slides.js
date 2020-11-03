/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import Slides from './../../components/ManagerSlides/slides';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import SlideItem from './../../components/ManagerSlides/slideItem';
import { Dialog } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';
import * as action from './../../actions/slides';
import { toast } from 'react-toastify';

 class slides extends Component {
    render() {
        var {SlideFireStore,ProductFireStore,SlideMessage}=this.props;
        if(SlideMessage.deleteSlidesSuccess){
            toast.warning("Delete slides thành công !!!");
        }
        if(SlideMessage.deleteSlidesRequest){
            return <Dialog open={true}>
                        <DialogContent>
                            <CircularProgress aria-labelledby="simple-dialog-title" />
                        </DialogContent>
                    </Dialog>;
        }
        if(SlideMessage.updateStatusSlidesSuccess){
            toast.success("Update slides thành công !!!");
        }
        setTimeout(() => {
            this.props.resetSlideMessage();
        }, 2000);
        return (
            <Slides
                showSlides={this.showSlides(SlideFireStore,ProductFireStore)}
            />
        );

    }
    
    showSlides=(slides,product)=>{
        var result=null;
        if(slides&&product){
            result=slides.map((slide,key)=>{
                for(let i=0;i<product.length;i++){
                    if(product[i].id===slide.idProduct){
                        return <SlideItem
                            slide={slide}
                            key={key}
                            stt={key}
                            product={product[i].name}
                            delete={this.delete}
                            onStatus={this.onStatus}
                     />
                    }
                }
                
            })
        }else{
            return <Dialog open={true}>
                        <DialogContent>
                            <CircularProgress aria-labelledby="simple-dialog-title" />
                        </DialogContent>
                    </Dialog>;
        }
        return result;
    }
    delete=(slide)=>{
        this.props.deleteSlide(slide);
    }
    onStatus=(slide)=>{
        this.props.onStatus(slide);
    }
}
const mapStateToProps=(state)=>{
    return {
        SlideFireStore:state.getFirestore.ordered.slides,
        ProductFireStore:state.getFirestore.ordered.products,
        SlideMessage:state.Slides
    }
}
const dispatchStateToProps=(dispatch,props)=>{
    return{
        deleteSlide:(slide)=>{
            dispatch(action.Delete_Slides(slide));
        },
        onStatus:(slide)=>{
            dispatch(action.UPDATE_STATUS_SLIDES(slide));
        },
        resetSlideMessage:()=>{
            dispatch(action.resetSlideMessage());
        }
    }
}
export default 
compose(connect(mapStateToProps,dispatchStateToProps),
firestoreConnect(own=>[
    {
        collection:"slides"
    },
    {
        collection:"products"
    }
]))
(slides);