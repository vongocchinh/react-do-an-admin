import React, { Component } from 'react'
import Category from './../../components/ManagerCategory/addCategory/addCategory';
import { connect } from 'react-redux';
import * as actions from './../../actions/category'
import { Redirect } from 'react-router-dom';
import { Dialog, DialogContent, CircularProgress } from '@material-ui/core';
class addCategory extends Component {
    render() {
        var {CategoryMessage}=this.props;
        if(CategoryMessage.Category_Add_Success){
            return <Redirect to="/category" />
        }
        if(CategoryMessage.Category_Add_Request){
            return <Dialog open={true}>
                        <DialogContent>
                            <CircularProgress aria-labelledby="simple-dialog-title" />
                        </DialogContent>
                    </Dialog>;
        }
        return (
            <Category 
                addCategory={this.addCategory}
            />
        )
    }
    addCategory=(categoryADD)=>{
        this.props.addCategory(categoryADD);
    }
    componentDidMount(){
        document.title="Thêm sản phẩm ...";
    }
}

const dispatchToProps=(dispatch,props)=>{
    return{
        addCategory:(category)=>{
            dispatch(actions.ADD_CATEGORY_REQUEST(category));
        }
    }
}
const mapStateToProps=(state)=>{
    return{ 
        CategoryMessage:state.CategoryMessage

    }
}
export default (connect(mapStateToProps,dispatchToProps)) (addCategory);