import React, { Component } from 'react'
import BrandForm from './brandForm';
// import {CircularProgress} from '@material-ui/core';

 class brandAdd extends Component {
    render() {
        // var {BrandMessage}=this.props;
        // if(BrandMessage.Brand_Request)
        // {
        //     return (
        //         <div style={{width:"100%",height:"580px",display:"flex",justifyContent:"center",alignItems:"center"}}>
        //             <CircularProgress />
        //         </div>
        //     )
        // }
        return (
            <>
            <div className="main-right">
                <BrandForm
                    addBrand={this.props.addBrand}
                />
            </div>
            </>
        )
    }
}
export default brandAdd;