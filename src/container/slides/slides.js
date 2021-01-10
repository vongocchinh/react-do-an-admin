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
import Pagination from '@material-ui/lab/Pagination';

 class slides extends Component {
     constructor(props) {
         super(props);
         this.state={
             currentPage:1,
             currentPageNew:10
         }
    }
    render() {
        // document.title="Quản lý slides ... ";
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
            setTimeout(() => {
                this.props.resetSlideMessage();
            }, 2000);
        }
        return (
            <Slides
                showSlides={this.showSlides(SlideFireStore,ProductFireStore)}
                showPagination={this.showPagination(SlideFireStore)}
            />
        );

    }
    showPagination=(slide)=>{
        var {currentPage,currentPageNew}=this.state;
        if(slide){
            return <Pagination 
                page={currentPage}
                count={Math.ceil(slide.length/currentPageNew)}
                size="small"
                onChange={this.onChangePagination}
            />
        }
    }
    onChangePagination=(e,value)=>{
        this.setState({
            currentPage:value
        });
    }
    showSlides=(slides,product)=>{
        var result=null;
        var {currentPage,currentPageNew}=this.state;
        if(slides&&product){
            var pageLast= currentPage * currentPageNew;
            var pageFirst=pageLast - currentPageNew;
            slides=slides.slice(pageFirst,pageLast);
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
    componentDidMount(){
        document.title="Danh sác slides banner";
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