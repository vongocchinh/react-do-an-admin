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
 class product extends Component {
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
             newsPerPage:10
         }
     }
    render() {
        var {productStore,ProductMessage}=this.props;
        var {searchName,onSort,}=this.state;
        if(ProductMessage.Product_Delete_Request){
            return <Dialog open={true}>
                        <DialogContent>
                            <CircularProgress aria-labelledby="simple-dialog-title" />
                        </DialogContent>
                    </Dialog>;
        }
        if(ProductMessage.Product_Update_Success||ProductMessage.Product_Delete_Success){
            setTimeout(() => {
                this.props.resetMessage();
            }, 1000);
        }
        productStore=this.onSortData(productStore,onSort);
        if(productStore){
            productStore=(productStore && productStore.filter((data)=>{
                return (data.name.toLowerCase().indexOf(searchName) !== -1);
            }));
        }
        return (
            <Product
                showData={this.showData(productStore)}
                search={this.search}
                onSortRedux={this.onSortRedux}
                ProductMessage={ProductMessage}
                showIdPage={this.showIdPage(productStore)}
                getBy={this.getBy}
            />
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
            // if(currentPage===number){
            //     return <li style={{color:"red"}} id={number} >{number}</li>
            // }else{
            //     return <li onClick={this.onChose} style={{color:"red"}} id={number} >{number}</li>
            // }
            return <li key={number} onClick={this.onChose} className="idPage" id={number} >{number}</li>
        });
        return result;
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
   componentDidMount(){
       this.props.resetMessage();
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
(product);