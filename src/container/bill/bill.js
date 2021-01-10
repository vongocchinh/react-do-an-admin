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
// import { toast } from 'react-toastify';
import Pagination from '@material-ui/lab/Pagination';

 class bill extends Component {
     constructor(props) {
        super(props);
        this.state = {
          currentPage:1,
          currentPageNew:10
        };
     }
    render() {
        var {billStore,BillState}=this.props;
        if(BillState.Update_Quantity_Success){
            // toast.dark("Xác nhận thành công !!!");
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
            <Bill 
                showBill={this.showBill(billStore)}
                showPagination={this.showPagination(billStore)}
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
    showPagination=(data)=>{
        var {currentPage,currentPageNew}=this.state;
        var count=0;
        
            if(data){
                for(let i=0;i<data.length;i++){
                    if(data[i].rulesBill===1){
                        count++;
                    }
                }
            return <Pagination 
                page={currentPage} count={Math.ceil(count/currentPageNew)}
                size="small"
                onChange={this.onHandlePagination}
            />
            }
    }
    onHandlePagination=(e,value)=>{
        this.setState({
          currentPage:value
        });
      }
    showBill=(bill)=>{
        var result=null;
        if(bill){
            if(bill){
                var data=[];
                for(let i=0;i<bill.length;i++){
                    if(bill[i].rulesBill===1){
                        data.push(bill[i]);
                    }
                }
                // console.log(data);
                var {currentPage,currentPageNew}=this.state;
                var pageLast=currentPage*currentPageNew;
                var pageFirst=pageLast- currentPageNew;
                data=data.slice(pageFirst,pageLast);
                data=this.sort(data);
                result=(data && data.map((bill,key)=>{
                    if(bill.rulesBill===1){
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
                           break;
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
(bill);