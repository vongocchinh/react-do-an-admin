/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import Item1 from './../../components/ManagerProduct/productDetail/item/item1';
import Item2 from './../../components/ManagerProduct/productDetail/item/item2';
import Item3 from './../../components/ManagerProduct/productDetail/item/item3';
import Item4 from './../../components/ManagerProduct/productDetail/item/item4';
import ProductDetail from './../../components/ManagerProduct/productDetail/productDetails';
import * as action from './../../actions/product';
import Review from './../../components/ManagerProduct/productDetail/review';
import ReviewCount from './../../components/ManagerProduct/productDetail/reviewCount';
import ReviewDetail from './../../components/ManagerProduct/productDetail/review/reviewDetail';
import { toast } from 'react-toastify';
import styles from './styles/styles';
import { withStyles } from '@material-ui/core';
import Loading from './../../components/images/loadding.gif';
import { Pagination } from '@material-ui/lab';
class productDetail extends Component {
    constructor(props) {
        super(props);
        this.state={
            currentPage:1,
            currentPageNew:20
        }
    }
    render() {

        
        var {ProductStore,reviewStore,brandStore,categoryStore,Review}=this.props;
        var {id}=this.props.match.params;
        if(Review.DELETE_REVIEW_SUCCESS){
            setTimeout(() => {
                this.props.resetReview();
            }, 1000);
             toast.dark("Xóa Thành Công");
        }
        return (
            <ProductDetail
            showItem1={this.showItem1(ProductStore,id,brandStore,categoryStore)}
            showItem2={this.showItem2(ProductStore,id)}
            showItem3={this.showItem3(ProductStore,id)}
            showItem4={this.showItem4(ProductStore,id)}
            review={this.reviewStore(reviewStore,id)}
            showReviewDetail={this.showReviewDetail(id,reviewStore)}
            showPagination={this.showPagination(reviewStore,id)}
             />
        )
    }
    showItem1=(products,id,brands,category)=>{
        var result="";
        var brandName='';
        var categoryName='';
            result=(products && products.map((product,key)=>{
                if(product.id===id){
                    brands&&brands.map((brand,key)=>{
                        if(brand.id===product.brand){
                            brandName=brand.brandName;
                        }
                    })
                    category&&category.map((category,key)=>{
                        if(product.category===category.id){
                            categoryName=category.categoryName
                        }
                    })
                    return <Item1 
                        brandName={brandName}
                        categoryName={categoryName}
                        key={key}
                        product={product}
                        onStatus={this.onStatus}
                    />
                }
            }))
        return result;
    }
    showItem2=(products,id)=>{
        var result="";
            result=(products && products.map((product,key)=>{
                if(product.id===id){
                    return <Item2
                        key={key}
                        product={product}
                        onDelete={this.onDelete}
                    />
                }
            }))
        return result;
    }
    showItem3=(products,id)=>{
      
        var result="";
            result=(products && products.map((product,key)=>{
                if(product.id===id){
                    return <Item3 
                        key={key}
                        product={product}
                    />
                }
            }))
        return result;
    }
    reviewStore=(review,id)=>{
        const {classes}=this.props;
        var countReview=0;
        var countRating1=0;
        var countRating2=0;
        var countRating3=0;
        var countRating4=0;
        var countRating5=0;
        var arr=[];
        if(review){
           for(let i=0;i<review.length;i++){
                if(review[i].idProduct===id){
                    countReview++;
                    if(review[i].rating===1){
                        countRating1++;
                    }
                    if(review[i].rating===2){
                        countRating2++;
                    }
                    if(review[i].rating===3){
                        countRating3++;
                    }
                    if(review[i].rating===4){
                        countRating4++;
                    } if(review[i].rating===5){
                        countRating5++;
                    }

                }
           }
           arr.push(countRating1);
           arr.push(countRating2);
           arr.push(countRating3);
           arr.push(countRating4);
           arr.push(countRating5);
            return <Review 
                    countReview={countReview}
                    ItemReview={this.showREVIEW(arr)}

            />
        }else{
            return <div className={classes.layoutLoading1} >
                        <img alt={Loading} src={Loading} className={classes.Loading} />
                    </div>
        }
    }
    showREVIEW=(arr)=>{
           var result=null;
            result=arr.map((item,key)=>{
                return (
                    <ReviewCount
                        item={item}
                        key={key}
                        keys={key}
                    />
                 );
            });

            return result;
    }
    deleteReview=(id)=>{
        this.props.DELETE_REVIEW(id);
    }
    showItem4=(products,id)=>{
        var result="";
            result=(products && products.map((product,key)=>{
                if(product.id===id){
                    return <Item4
                        key={key}
                        product={product}
                    />
                }
            }))
        return result;
    }
    onDelete=(product)=>{
        this.props.onDelete(product);
    }
    onStatus=(product)=>{
        this.props.onStatus(product);
    }
    showReviewDetail=(id,reviews)=>{
        var result='';
        const {classes}=this.props;
        if(!reviews){
            return  <div className={classes.layoutLoading1} >
                        <img alt={Loading} src={Loading} className={classes.Loading} />
                    </div>
        }
        var arr=[];
        for(let i=0;i<reviews.length;i++){
            if(reviews[i].idProduct===id){
                arr.push(reviews[i]);
            }
        }
        var {currentPage,currentPageNew}=this.state;
        var currentLast=currentPage*currentPageNew;
        var currentFirst=currentLast-currentPageNew;
        arr=arr.slice(currentFirst,currentLast);
        result=arr.map((review,key)=>{

            if(id===review.idProduct){
                return <ReviewDetail 
                    key={key}
                    review={review}
                    deleteReview={this.deleteReview}
                    
                />
            }
        })
        return result;
    }
    showPagination=(reviews,id)=>{
        var {currentPage,currentPageNew}=this.state;
        var count=0;
        if(reviews){
            for(let i=0;i<reviews.length;i++){
                if(reviews[i].idProduct===id){
                    count++;
                }
            }
        }
        if(reviews){
          return <Pagination 
            page={currentPage}
            count={Math.ceil(count/currentPageNew)}
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
}
const mapStateToProps=(state)=>{
    return{
        ProductStore:state.getFirestore.ordered.products,
        reviewStore:state.getFirestore.ordered.reviews,
        brandStore:state.getFirestore.ordered.brand,
        categoryStore:state.getFirestore.ordered.category,
        Review:state.Review
    }
}
const dispatchToProps=(dispatch,props)=>{
    return{
        onDelete:(product)=>{
            dispatch(action.DELETE_PRODUCT_REQUEST(product));
        },
        onStatus:(product)=>{
            dispatch(action.UPDATE_STATUS(product));
        },
        DELETE_REVIEW:(id)=>{
            dispatch(action.DELETE_REVIEW(id));
        },
        resetReview:()=>{
            dispatch(action.resetReview());
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
        collection:"reviews"
    },
    {
        collection:"brand"
    },
    {
        collection:"category"
    }
]),withStyles(styles))(productDetail);