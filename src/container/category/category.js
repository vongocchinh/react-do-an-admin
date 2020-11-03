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
class category extends Component {
    render() {
        var {categoryStore,CategoryMessage}=this.props;
        if(CategoryMessage.Category_Update_Success||CategoryMessage.Category_Delete_Success){
            setTimeout(() => {
                this.props.resetMessage();
            }, 1000);
        }
        if(CategoryMessage.Category_Delete_Request||CategoryMessage.Category_Update_Request){
            return <Dialog open={true}>
                        <DialogContent>
                            <CircularProgress aria-labelledby="simple-dialog-title" />
                        </DialogContent>
                    </Dialog>;
        }
        return (
            <Category
                showCateGory={this.showCateGory(categoryStore)}
                CategoryMessage={CategoryMessage}
            />
        )
    }
    showCateGory=(data)=>{
        var result='';
      
           if(data){
            result=(data && data.map((data,key)=>{
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
firestoreConnect(ownProps=>[
    {
        collection:"category"
    }
])
)
(category);