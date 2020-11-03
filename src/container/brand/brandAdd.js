import React, { Component } from 'react'
import BrandAdd from './../../components/ManagerBrand/brandAdd/brandAdd';
import { connect } from 'react-redux';
import * as actions from './../../actions/brand';
import { Redirect } from 'react-router-dom';
import { Dialog, DialogContent, CircularProgress } from '@material-ui/core';


 class brandAdd extends Component {
    render() {
        var {BrandMessage}=this.props;
        if(BrandMessage.Brand_Request){
            return <Dialog open={true}>
                        <DialogContent>
                            <CircularProgress aria-labelledby="simple-dialog-title" />
                        </DialogContent>
                    </Dialog>;
        }
        if(BrandMessage.Brand_Success){
            return <Redirect to="/brand" />
        }
        return (

           <BrandAdd
               addBrand={this.addBrand}
               BrandMessage={BrandMessage}
           />
        )
    }
    addBrand=(brand)=>{
        this.props.addBrand(brand);
    }
}
const mapStateToProps=(state)=>{
    return{
        BrandMessage:state.BrandMessage
    }
}
const dispatchToProps=(dispatch,props)=>{
    return{
        addBrand:(brand)=>{
            dispatch(actions.AddBrandRequest(brand));
        }
    }
}
export default (connect(mapStateToProps,dispatchToProps))(brandAdd);