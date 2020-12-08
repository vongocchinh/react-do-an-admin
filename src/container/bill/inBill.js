/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import {connect} from 'react-redux';
import InBill from './../../components/ManagerBill/printBill/inBill';
import { Dialog, DialogContent, CircularProgress } from '@material-ui/core';
import InBillItem from './../../components/ManagerBill/printBill/inBillItem';

 class inBill extends Component {
    render() {
        var {billStore}=this.props;
        var {id}=this.props.match.params;
    return (
        <>
            <InBill showInBill={this.showInBill(billStore,id)} />
        </>
    )
    }
    showInBill=(bills,id)=>{
        var result=null;
        if(bills){
            result=(bills && bills.map((bill,key)=>{
                if(bill.id===id){
                    var {name,date,phone,address,huyen,tinh,xa,email}=bill;
                     return <InBillItem
                        itemProduct={bill.cart}
                        key={key}
                        stt={key}
                        name={name}
                        date={date}
                        emails={email}
                        phone={phone}
                        address={address}
                        bill={bill}
                        huyen={huyen}
                        tinh={tinh}
                        xa={xa}
                />

                }
            }));
        }else{
            return (
                <Dialog open={true}>
                    <DialogContent>
                        <CircularProgress aria-labelledby="simple-dialog-title" />
                    </DialogContent>
                </Dialog>
            )
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
 (inBill);