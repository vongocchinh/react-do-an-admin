/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import CategoryUpdate from './../../components/ManagerCategory/updateCategory/categoryUpdate';
import CategoryForm from './../../components/ManagerCategory/updateCategory/categoryForm';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import * as actions from './../../actions/category';
class categoryUpdate extends Component {
    render() {
        var {categoryStore}=this.props;
        var {id}=this.props.match.params;
        return (
            <CategoryUpdate 
                showData={this.showData(categoryStore,id)}
            />
        )
    }
    showData=(data,id)=>{
        var result='';
        result=(data && data.map((data,key)=>{
            if(data.id===id){
                return <CategoryForm category={data} key={key} updateCategory={this.updateCategory} />
            }
        }))
        return result;
    }
    updateCategory=(category)=>{
        this.props.updateCategory(category);
    }
}
const mapStateToProps=(state)=>{
    return{
        categoryStore:state.getFirestore.ordered.category
    }
}
const dispatchToProps=(dispatch,props)=>{
    return{
        updateCategory:(category)=>{
            dispatch(actions.UPDATE_CATEGORY_REQUEST(category));
        }
    }
}
export default
compose(connect(mapStateToProps,dispatchToProps),
firestoreConnect(ownProps=>[
    {
        collection:"category"
    }
]))
(categoryUpdate);