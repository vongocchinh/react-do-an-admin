/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import Home from './../../components/index';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import TotalView from './../../components/home/totalView';
import Loading from '../../components/images/loadding.gif';
import Chart from './../../components/home/chart';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import BillLineChart from '../../components/home/recharts/lineCharts/bill';
import * as action from '../../actions/countBillDay';

 class home extends Component {
     render() {
        var {productStore,bill,brand,userClient,ViewPage,ContactFirebase,newsletter}=this.props;

        return (
           <Home
                totalProduct={this.totalProduct(productStore,userClient,bill)}
                bill={bill}
                chart={this.chart(productStore,bill,userClient,brand,ViewPage,ContactFirebase,newsletter)}
                billLineCharts={this.billLineCharts(bill)}
                countBillDay={this.countBillDay}
           />
        )
    }
    countBillDay=(value)=>{
        this.props.ADD_COUNT_BILL_DAY(value);
    }
    chart=(product,bill,user,brand,viewPage,ContactFirebase,newsletter)=>{
        const {classes}=this.props;
      if(product&&bill&&user&&brand&&viewPage&&newsletter){
         var countContacts=ContactFirebase.length;
        return <Chart
        product={(product&&(product.length))}
        bill={(bill&&bill.length)}
        user={(user&&user.length)}
        productStore={(product&&(product))}
        brand={(brand&& brand)}
        viewPage={viewPage[0].count}
        countContact={countContacts}
        newsletter={newsletter.length}
    />
      }else{
          return<div className={classes.layoutLoading} >
            <img alt={Loading} src={Loading} className={classes.Loading} />
          </div>
      }

    }
    totalProduct=(product,user,bill)=>{
        const {classes}=this.props;
       if(product&&user&&bill){
        return <TotalView product={(product&&(product.length))}
        user={(user&&(user.length))} 
        bill={(bill&&bill.length)}
        sale={this.sale(product)}

    />
       }else{
            return<div className={classes.layoutLoading} >
                <img alt={Loading} src={Loading} className={classes.Loading} />
            </div>
       }
    }
    billLineCharts=(bill)=>{
        const {classes}=this.props;
        let XHTML=null;
        var date=new Date().toDateString();
        // var count=0;
        var arr=[];
        for(let i=0;i<arr.length;i++){
            if(arr[i].date!==date){
                var dates={
                    date:date,
                    count:0
                }
                    arr.push(dates);
            }
        }
        if(bill){
            for(let i=0;i<bill.length;i++){
                var dateBill=(new Date(bill[i].date.seconds*1000).toDateString());
                if(date===dateBill){
                    // console.log(bill[i]);
                    // count++;
                }
            }
            XHTML=(
                <BillLineChart bill={bill} />
            )
        }else{
            XHTML=<div className={classes.layoutLoading} >
                        <img alt={Loading} src={Loading} className={classes.Loading} />
                    </div>
        }
        // console.log(arr);
        return XHTML;
    }
    sale=(product)=>{
        var count =0;
            for(let i=0;i<product.length;i++){
                if(product[i].priceSale>0){
                    count++;
                }
            }
        return count;
    }
    componentDidMount(){
        document.title="Trang chủ quản lý cửa hàng ..."
    }
}
const mapStateToProps=(state)=>{
   
    return{
        productStore:state.getFirestore.ordered.products,
        user:state.getFirestore.ordered.user,
        bill:state.getFirestore.ordered.bill,
        brand:state.getFirestore.ordered.brand,
        userClient:state.getFirestore.ordered.userClient,
        ViewPage:state.getFirestore.ordered.viewPage,
        ContactFirebase:state.getFirestore.ordered.contact,
        newsletter:state.getFirestore.ordered.newsletters
    }
}
const dispatchToProps=(dispatch,props)=>{
    return{
        ADD_COUNT_BILL_DAY:(value)=>{
            dispatch(action.ADD_COUNT_BILL_DAY(value));
        }
    }
}
export default 
compose(connect(mapStateToProps,dispatchToProps),
firestoreConnect(ownProps=>[
    {
        collection:"products"
    },
    {
        collection:"userClient"
    },
    {
        collection:"bill"
    },
    {
        collection:"brand"
    },
    {
        collection:"viewPage"
    },
    {
        collection:"contact"
    },
    {
        collection:"newsletters"
    }
]),withStyles(styles))

(home)