/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import Bill from './../../components/ManagerBill/billDetail/billDetail';
import BillItem from './../../components/ManagerBill/billDetail/billDetailItem';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import {connect} from 'react-redux';
import { Dialog } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';
 class billDetail extends Component {
    render() {
        var {billStore}=this.props;
        var {id}=this.props.match.params;
       
        return (
            <Bill 
                showBill={this.showBill(billStore,id)}
            />
        )
    }
    showBill=(bills,id)=>{
        var result=null;
        if(bills){
            (bills && bills.map((bill)=>{
                
                if(bill.id===id){
                    var {name,date,userMail,phone,address}=bill;
                    
                   
                    result=(bill.cart.map((item,key)=>{
                        return <BillItem 
                        itemProduct={item}
                        key={key}
                        stt={key}
                        name={name}
                        date={date}
                        userMail={userMail}
                        phone={phone}
                        address={address}
                        bill={bill}
                        
                />
                    }))
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
}
const mapStateToProps=(state)=>{
    return{
        billStore:state.getFirestore.ordered.bill
    }
}
const dispatchToProps=(dispatch,props)=>{
    return{

    }
}
export default 
compose(connect(mapStateToProps,dispatchToProps),
firestoreConnect(own=>[
    {
        collection:"bill"
    }
]))
(billDetail);