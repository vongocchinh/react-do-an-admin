/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import Product from './../../components/ManagerProduct/productSale/productSale';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import ProductItem from './../../components/ManagerProduct/productSale/productSaleItem';
import * as actions from './../../actions/product';
import { Dialog } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
 class productSale extends Component {
     constructor(props) {
         super(props);
         this.state={
             searchName:'',
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
        var {productStore,ProductMessage}=this.props;
        var {searchName,onSort}=this.state;
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
        productStore=this.onSortData(productStore,onSort);
        productStore=this.onFilter(productStore,searchName);
        return (
           <>
            <Product
                showData={this.showData(productStore)}
                search={this.search}
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
        var {currentPage,newsPerPage}=this.state;
        if(products){
        var count=0;
        for(let i=0;i<products.length;i++){
            if(products[i].priceSale>0){
                count++;
            }
        }
        return  <Pagination page={currentPage}
         onChange={this.onClickPage} 
         count={Math.ceil((count)/newsPerPage)} 
         size="small" />

        }
    }
    onClickPage=(e,value)=>{
        this.setState({
            currentPage:value
        });
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
        var result=null;
        if(data){
            result=data.filter(product=>{
                return product.name.toLowerCase().indexOf(search)!==-1;
            })
        }
        return result;
    }
    showData=(products)=>{
            var result=null;
            if(products){

            var productNew=[];
            for(let i=0;i<products.length;i++){
                if(products[i].priceSale>0){
                    productNew.push(products[i]);
                }
            }
            var {currentPage,newsPerPage}=this.state;
            const LastPage=currentPage*newsPerPage;
            const FirstPage=(LastPage - newsPerPage);
            const currentTodos = productNew.slice(FirstPage, LastPage);//tra ve mang moi tu vitri 1 đến vị trí n relace(1,n);
            result=(currentTodos && currentTodos.map((product,key)=>{

                return <ProductItem
                    product={product}
                    key={key}
                    keys={key}
                    onDelete={this.onDelete}
                    onStatus={this.onStatus}
                 />
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
    search=(search)=>{
       this.setState({
           searchName:search
       });
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
        ProductMessage:state.ProductMessage
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
        }
    }
}
export default
compose(connect(mapStateToProps,dispatchToProps),
firestoreConnect(ownProps=>[
    {
        collection:"products"
    }
]))
(productSale);