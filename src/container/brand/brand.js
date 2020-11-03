/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import Brand from './../../components/ManagerBrand/brand';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import BrandItem from './../../components/ManagerBrand/brandItem';
import * as actions from './../../actions/brand';
import { Dialog } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';
 class brand extends Component {
     constructor(props) {
         super(props);
         this.state={
             name:'',
             value:1
         }
     }
    render() {
        var {BrandStoreFirebase,BrandMessage}=this.props;
        if(BrandMessage.Brand_Delete_Request||BrandMessage.Brand_Update_Request){
            return <Dialog open={true}>
                        <DialogContent>
                            <CircularProgress aria-labelledby="simple-dialog-title" />
                        </DialogContent>
                    </Dialog>;
        }
        if(BrandMessage.Brand_Update_Success||BrandMessage.Brand_Delete_Success){
        setTimeout(() => {
            this.resetBrandMessage_update();
            }, 1000);
       }
        BrandStoreFirebase=this.sortBrand(BrandStoreFirebase,this.state.value);
        return (
            <Brand
                    showBrand={this.showBrand(BrandStoreFirebase)}
                    BrandMessage={BrandMessage}
                    onSort={this.onSort}
            />
        )
    }
    showBrand=(data)=>{
        var result='';
        if(data){
            
            result=(data && data.map((brands,key)=>{
               
                if(brands){
                    return <BrandItem brand={brands} key={key} keys={key}
                    onDeleteBrand={this.onDeleteBrand}
                    updateBrand={this.updateBrand}
                 />
                }else{
                    return <Dialog open={true}>
                                <DialogContent>
                                    <CircularProgress aria-labelledby="simple-dialog-title" />
                                </DialogContent>
                            </Dialog>;
                }
            }));

        }else{
            return <Dialog open={true}>
                        <DialogContent>
                            <CircularProgress aria-labelledby="simple-dialog-title" />
                        </DialogContent>
                    </Dialog>;

        }
        return result;
    }
    onDeleteBrand=(brandDelete)=>{
        this.props.onDeleteBrand(brandDelete);
    }
    componentDidMount(){
        this.props.resetBrandMessage();
    }
    resetBrandMessage_update=()=>{
        this.props.resetBrandMessage_Update();
    }
    updateBrand=(brandNew)=>{
        this.props.updateBrand(brandNew);
    }
    onSort=(value)=>{
        this.setState({
            name:value.name,
            value:value.value
        });
    }
    sortBrand=(data,value)=>{
            data=data&&data.slice().sort((a,b)=>{
                if(a.brandName>b.brandName){
                    return value;
                }else{
                    return -value;
                }
            })
        return data;
    }
}
const mapSateToProps=(state)=>{
    return{
        BrandStoreFirebase:state.getFirestore.ordered.brand,
        BrandMessage:state.BrandMessage
    }
}
const dispatchToProps=(dispatch,props)=>{
    return{
        onDeleteBrand:(brand)=>{
            dispatch(actions.DeleteBrandRequest(brand));
        },
        resetBrandMessage:()=>{
            dispatch(actions.ResetMessage());
        },
        updateBrand:(brand)=>{
           
            dispatch(actions.UpdateBrandRequest(brand));
        },
        resetBrandMessage_Update:()=>{
            dispatch(actions.ResetMessage());
        }
    }
}
export default 
compose(connect(mapSateToProps,dispatchToProps),
    firestoreConnect(ownProps=>[
        {
            collection:"brand"
        }
    ])
)
(brand);