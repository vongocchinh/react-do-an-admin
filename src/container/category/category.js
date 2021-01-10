/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import Category from './../../components/ManagerCategory/category';
import CategoryItem from '../../components/ManagerCategory/categoryItem';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import * as action from './../../actions/category';
import { DialogContent } from '@material-ui/core';
import { CircularProgress,Dialog } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

class category extends Component {
    constructor(props) {
        super(props);
        this.state={
            currentPage:1,
            currentPageNew:10
        }
    }
    render() {
        // document.title="Quản lý categorys ... ";
        var {categoryStore,CategoryMessage}=this.props;
        if(CategoryMessage.Category_Update_Success||CategoryMessage.Category_Delete_Success){
                setTimeout(() => {
                    this.props.resetMessage();
                }, 1000);
        }
        return (
            <>
            <Dialog open={CategoryMessage.Category_Delete_Request||CategoryMessage.Category_Update_Request}>
                        <DialogContent>
                            <CircularProgress aria-labelledby="simple-dialog-title" />
                        </DialogContent>
                    </Dialog>
                    <Category
                showCateGory={this.showCateGory(categoryStore)}
                CategoryMessage={CategoryMessage}
                showPagination={this.showPagination(categoryStore)}
            />
            </>
        )
    }
    showPagination=(category)=>{
        var {currentPage,currentPageNew}=this.state;
       if(category){
        return <Pagination 
            page={currentPage} 
            count={Math.ceil(category.length/currentPageNew)}
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
    showCateGory=(datas)=>{
        var result='';
           if(datas){
            var {currentPage,currentPageNew}=this.state;
            var pageLast=currentPage*currentPageNew;
            var pagaFirst=pageLast - currentPageNew;
            datas=datas.slice(pagaFirst,pageLast);
            result=(datas && datas.map((data,key)=>{
                return <CategoryItem 
                    category={data}
                    key={key}
                    keys={key}
                    onDelete={this.onDelete}
                    updateCategory={this.updateCategory}
                />
            }))
           } else{
                    return <Dialog open={true}>
                                <DialogContent>
                                    <CircularProgress aria-labelledby="simple-dialog-title" />
                                </DialogContent>
                            </Dialog>;
           }
        return result;
    }
    onDelete=(category)=>{
        this.props.onDelete(category);
    }
    updateCategory=(category)=>{
        this.props.updateCategory(category);
    }
    componentDidMount(){
        this.props.resetMessage();
        document.title="Quản lý category... ";
    }
}
const mapStateToProps=(state)=>{
    return{
        categoryStore:state.getFirestore.ordered.category,
        CategoryMessage:state.CategoryMessage
    }
}
const dispatchToProps=(dispatch,props)=>{
    return{
        onDelete:(category)=>{
            dispatch(action.DELETE_CATEGORY_REQUEST(category));
        },
        updateCategory:(category)=>{
            dispatch(action.UPDATE_CATEGORY_REQUEST(category));
        },
        resetMessage:()=>{
            dispatch(action.ResetMessage());
        }
    }
}
export default  
compose(connect(mapStateToProps,dispatchToProps),
firestoreConnect(own=>[
    {
        collection:"category"
    }
])
)
(category);