/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import Product from './../../components/ManagerProduct/product';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import ProductItem from './../../components/ManagerProduct/productItem';
import * as actions from './../../actions/product';
import { Dialog } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import styles from './styles/styles';
import loading from '../../components/images/loadding.gif';
 class product extends Component {
     constructor(props) {
         super(props);
         this.state={
             onSort:{
                 sortBy:'',
                 sortValue:1
             },
             open:false,
             currentPage:1,
             newsPerPage:10,
             number:0
         }
     }
    render() {
        const {classes}=this.props;
        var {productStore,ProductMessage,DataFilter}=this.props;
        var {onSort}=this.state;
        if(!productStore){
            return <div className="main-right">
                        <div className={classes.layoutLoading} >
                            <img alt={loading} src={loading} className={classes.Loading} />
                        </div>
                    </div>
        }
        if(ProductMessage.Product_Delete_Request){
            return <Dialog open={true}>
                        <DialogContent>
                            <CircularProgress aria-labelledby="simple-dialog-title" />
                        </DialogContent>
                    </Dialog>;
        }
        if(ProductMessage.Product_Update_Status_Success){

            setTimeout(() => {
                this.props.resetMessage();
            }, 1000);
        }
        if(ProductMessage.Product_Update_Success||ProductMessage.Product_Delete_Success){
            setTimeout(() => {
                this.props.resetMessage();
            }, 1000);
        }
        productStore=this.onFilter(productStore,DataFilter);
        productStore=this.onSortData(productStore,onSort);
        return (
           <>
            <Product
                showData={this.showData(productStore)}
                filter={this.filter}
                onSortRedux={this.onSortRedux}
                ProductMessage={ProductMessage}
                showIdPage={this.showIdPage(productStore)}
                getBy={this.getBy}
                onClickIdDown={this.onClickIdDown}
                onClickIdUp={this.onClickIdUp}
            />
           </>
        )
    }
    onSortRedux=(sort)=>{
        this.setState({
            onSort:sort
        });
    }
    onChose=(e)=>{
        this.setState({
            currentPage:Number(e.target.id)
        });
    }
    getBy=(value)=>{
        this.setState({
            newsPerPage:parseInt(value,10)
        });
    }
    showIdPage=(products)=>{
        const idPage=[];
        var result=null;
        var {newsPerPage}=this.state;
            if(products){
                for(let i=1;i<=Math.ceil(products.length / newsPerPage);i++){
                    idPage.push(i);
                }
            }
        result=idPage.map(number=>{
            if(this.state.currentPage===number){
                return <li key={number} className="idPage active-idPage" style={{backgroundColor:"#007BFF",color:"white"}} id={number} >{number}</li>
            }else{
                return <li key={number} className="idPage" onClick={this.onChose}  id={number} >{number}</li>
            }
        });
        return result;
    }
    onClickIdDown=()=>{
        this.setState({
            currentPage:this.state.currentPage-1
        });
    }
    onClickIdUp=()=>{
        this.setState({
            currentPage:this.state.currentPage+1
        });
    }
    onFilter=(data,search)=>{
        if(data){
           if(search){
                if(search.name){
                    data=data.filter(product=>{
                        return product.name.toLowerCase().indexOf(search.name)!==-1;
                    });
                    return data;
                }
           }else{
               return data;
           }
        }
        return data;
    }
    showData=(products)=>{
            var result=null;
            var {currentPage,newsPerPage}=this.state;
            const LastPage=currentPage*newsPerPage;
            const FirstPage=(LastPage - newsPerPage);
            if(products){
            const currentTodos = products.slice(FirstPage, LastPage);//tra ve mang moi tu vitri 1 đến vị trí n relace(1,n);
            result=(currentTodos && currentTodos.map((product,key)=>{
                return <ProductItem
                    // stt={key + 1 + (10 - 1)*15}
                    product={product}
                    key={key}
                    keys={key}
                    onDelete={this.onDelete}
                    onStatus={this.onStatus}
                 />
            }));
           }else{
           }
        return result;

    }
    onSortData=(productStore,onSort)=>{
    if (onSort.sortBy === 'name') {
            productStore=productStore && productStore.slice().sort((a, b) => {
                if (a.name > b.name) {
                    return onSort.sortValue;
                } else if (a.name < b.name) {
                    return -onSort.sortValue;
                } else {
                    return 0;
                }
            })
    } else if (onSort.sortBy === 'status') {
            productStore=productStore&&productStore.slice().sort((a, b) => {
                if (a.statusProduct > b.statusProduct) {
                    return -onSort.sortValue;
                } else if (a.statusProduct < b.statusProduct) {
                    return onSort.sortValue;
                } else {
                    return 0;
                }
            })
        }
        return productStore;
    }
    onDelete=(product)=>{
        this.props.onDelete(product);
    }
    onStatus=(product)=>{
        this.props.onStatus(product);
    }
    filter=(filter)=>{
     this.props.FILTER_DATA_PRODUCT(filter);
    }
    onResetMessage=()=>{
        this.props.resetMessage();
    }
   componentDidMount(){
       this.onResetMessage();
       document.title="Quản lý danh sách sản phẩm";
   }

}
const mapStateToProps=(state)=>{
    return{
        productStore:state.getFirestore.ordered.products,
        product:state.Products,
        ProductMessage:state.ProductMessage,
        DataFilter:state.DataFilter
    }
}
const dispatchToProps=(dispatch,props)=>{
    return{
        onDelete:(product)=>{
            dispatch(actions.DELETE_PRODUCT_REQUEST(product));
        },
        onStatus:(status)=>{
            dispatch(actions.UPDATE_STATUS(status));
        },
        resetMessage:()=>{
            dispatch(actions.ResetMessage());
        },
        FILTER_DATA_PRODUCT:(filter)=>{
            dispatch(actions.FILTER_DATA_PRODUCT(filter))
        }
    }
}
export default
compose(connect(mapStateToProps,dispatchToProps),
firestoreConnect(ownProps=>[
    {
        collection:"products"
    }
]),withStyles(styles))
(product);