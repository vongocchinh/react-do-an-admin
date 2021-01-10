import React, { Component } from 'react'
import BrandAdd from './../../components/ManagerBrand/brandAdd/brandAdd';
import { connect } from 'react-redux';
import * as actions from './../../actions/brand';
import { Redirect } from 'react-router-dom';
import { Dialog, DialogContent, CircularProgress,  } from '@material-ui/core';


 class brandAdd extends Component {
    render() {
        var {BrandMessage}=this.props;
        if(BrandMessage.Brand_Success){
            return <Redirect to="/brand" />
        }
        return (
           <>
            <Dialog  open={BrandMessage.Brand_Request} >
                       <DialogContent>
                        <CircularProgress color="inherit" />
                       </DialogContent>
            </Dialog>
           <BrandAdd
               addBrand={this.addBrand}
               BrandMessage={BrandMessage}
           />
           </>
        )
    }
    addBrand=(brand)=>{
        this.props.addBrand(brand);
    }
    componentDidMount(){
        document.title="Thêm sản phẩm ...";
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