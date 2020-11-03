/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import Bill from './../../components/ManagerBill/bill';
import BillItem from './../../components/ManagerBill/billItem';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import {connect} from 'react-redux';
import * as action from '../../actions/bill';
import * as actions from '../../actions/product';
import { Dialog } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';
import { toast } from 'react-toastify';

 class bill extends Component {
    render() {
        var {billStore,BillState}=this.props;
        if(BillState.Update_Quantity_Request){
            return <Dialog open={true}>
                        <DialogContent>
                            <CircularProgress aria-labelledby="simple-dialog-title" />
                        </DialogContent>
                    </Dialog>;
        }
        if(BillState.Update_Quantity_Success){
            toast.success("Update thành công !!!");
        }
        setTimeout(() => {
            this.props.Reset_Update_Bill();
        }, 1000);
        return (
            <Bill 
                showBill={this.showBill(billStore)}
                showBillConfirm={this.showBillConfirm(billStore)}
            />
        )
    }
    sort=(bill)=>{
        var result=null;
        if(bill){
            result=bill.slice().sort((a,b)=>{
                return b.date-a.date;
            });
        }
        return result;
    }
    showBill=(bill)=>{
        var result=null;
        if(bill){
            if(bill){
                // bill=this.sort(bill);

                result=(bill && bill.map((bill,key)=>{
                    if(bill.rulesBill===false){
                        return <BillItem 
                            bill={bill}
                            key={key}
                            stt={key}
                            rulesBill={this.rulesBill}
                            updateQuantity={this.updateQuantity}
                    />
                    }
                }));
            }
        }else{
            return <Dialog open={true}>
                        <DialogContent>
                            <CircularProgress aria-labelledby="simple-dialog-title" />
                        </DialogContent>
                    </Dialog>;
        }
        
        return result;
    }
    showBillConfirm=(bill)=>{
        var result=null;
        if(bill){
            if(bill){
                // bill=this.sort(bill);

                result=(bill && bill.map((bill,key)=>{
                    if(bill.rulesBill===true){
                        return <BillItem 
                            bill={bill}
                            key={key}
                            stt={key}
                            rulesBill={this.rulesBill}
                            updateQuantity={this.updateQuantity}
                            onDelete={this.onDelete}
                    />
                    }
                }));
            }
        }else{
            return <Dialog open={true}>
                        <DialogContent>
                            <CircularProgress aria-labelledby="simple-dialog-title" />
                        </DialogContent>
                    </Dialog>;
        }
        
        return result;
    }
    rulesBill=(bill)=>{
        
        
    }
    onDelete=(bill)=>{
        this.props.onDelete(bill);
    }
    updateQuantity=(cart,bill)=>{
        var {products}=this.props;
        for(let i=0;i<cart.length;i++){
            if(products){
                for(let j=0;j<products.length;j++){
                    if(cart[i].cartProduct.id===products[j].id){
                        if(products[j].quantity>0){
                            this.props.rulesBill(bill);
                            this.props.updateQuantity(products[j],cart[i].quantity);
                        }
                       else if(products[j].quantity<1){
                           alert('san pham '+products[j].name +" het hang.!!!");
                           return;
                       }
                    }
                }
          
            }
        }
        
    }
}
const mapStateToProps=(state)=>{
    return{
        billStore:state.getFirestore.ordered.bill,
        products:state.getFirestore.ordered.products,
        BillState:state.Bill
    }
}
const dispatchToProps=(dispatch,props)=>{
    return{
        rulesBill:(bill)=>{
            dispatch(action.UpdateBillRules(bill));
        },
        updateQuantity:(product,quantity)=>{
            
            dispatch(actions.UPDATE_PRODUCT_Bill(product,quantity));
        },
        Reset_Update_Bill:()=>{
            dispatch(action.Reset_Update_Bill());
        },
        onDelete:(bill)=>{
            dispatch(action.BILL_DELETE_REQUEST(bill));
        }
    }
}
export default 
compose(connect(mapStateToProps,dispatchToProps),
firestoreConnect(own=>[
    {
        collection:"bill"
    },
    {
        collection:"products"
    }
]))
(bill);