/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import Home from './../../components/index';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import TotalView from './../../components/home/totalView';

import Chart from './../../components/home/chart';
 class home extends Component {
    render() {
        document.title="Trang chủ quản lý cửa hàng ..."
        var {productStore,user,bill,brand}=this.props;
        return (
           <Home 
                totalProduct={this.totalProduct(productStore,user,bill)}
                bill={bill}
                chart={this.chart(productStore,bill,user,brand)}
               
              
           />
        )
    }
    chart=(product,bill,user,brand)=>{
       
      if(product&&bill&&user&&brand){
            
        return <Chart
        product={(product&&(product.length))}
        bill={(bill&&bill.length)}
        user={(user&&user.length)}
        productStore={(product&&(product))}
        brand={(brand&& brand)}
    />
      }else{
          return <p className="loading">loading...</p>
      }
       
    }
   
    totalProduct=(product,user,bill)=>{
       
       if(product&&user&&bill){
        return <TotalView product={(product&&(product.length))}
        user={(user&&(user.length))} 
        bill={(bill&&bill.length)}
        sale={this.sale(product)}
        
        
    />
       }else{
           return <p className="loading">Loading...</p>
       }
    }
    sale=(product)=>{
        // console.log(product);
        var count =0;
        
            for(let i=0;i<product.length;i++){
                if(product[i].priceSale>0){
                    count++;
                }
            }
        
        return count;
    }

}
const mapStateToProps=(state)=>{
   
    return{
        productStore:state.getFirestore.ordered.products,
        user:state.getFirestore.ordered.user,
        bill:state.getFirestore.ordered.bill,
        brand:state.getFirestore.ordered.brand,
        
    }
}
const dispatchToProps=(dispatch,props)=>{
    return{
       
    }
}
export default 
compose(connect(mapStateToProps,dispatchToProps),
firestoreConnect(ownProps=>[
    {
        collection:"products"
    },
    {
        collection:"user"
    },
    {
        collection:"bill"
    },
    {
        collection:"brand"
    }
]))
(home)