/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import {connect} from 'react-redux';
import * as action from '../../actions/bill';
import * as actions from '../../actions/product';
import { Dialog } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';
import { toast } from 'react-toastify';
import Ordered from './../../components/ManagerBill/ordered/ordered';
import OrderedItem from './../../components/ManagerBill/ordered/orderedItem';

 class ordered extends Component {
    render() {
        var {billStore,BillState}=this.props;
        if(BillState.Update_Quantity_Success){
            toast.success("Update thành công !!!");
            setTimeout(() => {
                this.props.Reset_Update_Bill();
            }, 500);
        }
        return (
            <>
            <Dialog open={BillState.Update_Quantity_Request}>
                        <DialogContent>
                            <CircularProgress aria-labelledby="simple-dialog-title" />
                        </DialogContent>
                    </Dialog>
            <Ordered 
                showBillGo={this.showBillGo(billStore)}
            />
            </>
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
    rulesBillGo=(bill)=>{
        this.props.rulesBillGo(bill);
    }

    showBillGo=(bill)=>{
        var result=null;
        if(bill){
            if(bill){
                // bill=this.sort(bill);

                result=(bill && bill.map((bill,key)=>{
                    if(bill.rulesBill===3){
                        return <OrderedItem 
                            bill={bill}
                            key={key}
                            stt={key}
                            rulesBill={this.rulesBill}
                            updateQuantity={this.updateQuantity}
                            onDelete={this.onDelete}
                            rulesBillSuccess={this.rulesBillSuccess}

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
    rulesBillSuccess=(bill)=>{
        this.props.rulesBillSuccess(bill);
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
    componentDidMount(){
        document.title="Quản lý đơn hàng...";
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
        },
        rulesBillGo:(bill)=>{
            dispatch(action.rulesBillGo(bill));
        },
        rulesBillSuccess:(bill)=>{
            dispatch(action.rulesBillSuccess(bill));
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
(ordered);
