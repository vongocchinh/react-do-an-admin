/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import ListBill from './../../components/userTransport/listBill';
import ListBillItem from './../../components/userTransport/listBillItem';
import * as action from './../../actions/bill';
 class userTransport extends Component {
    render() {
        var {BillFirebase}=this.props;
        return (
                <ListBill
                    showBill={this.showBill(BillFirebase)}
                />
        )
    }
    showBill=(bills)=>{
        var result=null;
        if(bills){
            result=bills.map((bill,key)=>{
                if(bill.rulesBill===3){
                    return <ListBillItem
                        bill={bill}
                        key={key}
                        rulesBillSuccess={this.rulesBillSuccess}
                        stt={key+1}
                    />
                }
            })
        }
        return result;
    }
    rulesBillSuccess=(bill)=>{
        this.props.rulesBillSuccess(bill);
    }
}
export const mapStateToProps=(state)=>{
    return{
        BillFirebase:state.getFirestore.ordered.bill
    }
}
export const dispatchToProps=(dispatch,props)=>{
    return {
        rulesBillSuccess:(bill)=>{
            dispatch(action.rulesBillSuccess(bill));
        }
    }
}
export default 
compose(connect(mapStateToProps,dispatchToProps),firestoreConnect(own=>[
    {
        collection:"bill"
    }
]))
(userTransport);