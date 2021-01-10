import React, { Component } from 'react'
import {Switch,Route} from 'react-router-dom';
import Home from './../container/home/home';
import MenuRePonSize from './../components/Menu/menuReponsive';
import Product from './../container/product/product';
import ProductAdd from './../container/product/productAdd';
import ProductUpdate from './../container/product/productUpdate';
import User from './../container/user/user';
import Brand from './../container/brand/brand';
import BrandADD from './../container/brand/brandAdd';
import UpdateBrand from './../container/brand/brandUpdate';
import Category from './../container/category/category';
import CategoryAdd from './../container/category/addCategory';
import CategoryUpdate from './../container/category/categoryUpdate';
import ProductDetail from './../container/product/productDetail';
import Contact from './../container/contact/contact';
import Bill from './../container/bill/bill';
import BillDetail from './../container/bill/billDetail';
import Logins from './../container/login/login';
import Register from './../container/login/register';
import Slides from './../container/slides/slides';
import SlidesAdd from '../container/slides/slidesAdd';
import ProductCategory from '../container/product/productCategory';
import Admin from './../container/admin/AccountAdmin';

import Newsletters from '../container/newserletter/newsletters';
import ListAdmin from '../container/admin/listAdmin';
import Error from './../container/404/error';
import InBill from './../container/bill/inBill';
import UserTransport from '../container/userTransport/userTransport';
import Ordered from './../container/bill/ordered';
import OrderConfirmation from './../container/bill/orderConfirmation';
import OrderDelivered from '../container/bill/orderDelivered';
import Editor from './../container/editor';
import ProductSale from './../container/product/productSale';
 class routerUi extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/menu-reponsize" component={MenuRePonSize}></Route>
                    <Route path="/nhanvien" component={Home}></Route>
                    <Route path="/admin" component={Admin}></Route>
                    <Route path="/user" component={User}></Route>
                    <Route path="/brand" component={Brand}></Route>
                    <Route path="/brandAdd" component={BrandADD}></Route>
                    <Route path="/update-brand/:id/:to_slug" component={UpdateBrand}></Route>
                    <Route path="/productList" component={Product}></Route>
                    <Route path="/productAdd" component={ProductAdd}></Route>
                    <Route path="/update-product/:id/:name" component={ProductUpdate}></Route>
                    <Route path="/product/:id/:name" component={ProductDetail}></Route>
                    <Route path="/categoryAdd" component={CategoryAdd}></Route>
                    <Route path="/category" component={Category}></Route>
                    <Route path="/update-category/:id/:name" component={CategoryUpdate}></Route>
                    <Route path="/contact" component={Contact}></Route>
                    <Route path="/bill" component={Bill}></Route>
                    <Route path="/bill-detail/:id.html" component={BillDetail}></Route>
                    <Route path="/login" component={Logins}></Route>
                    <Route path="/register" component={Register}></Route>
                    <Route path="/slides" component={Slides}></Route>
                    <Route path="/listAdmin" component={ListAdmin}></Route>
                    <Route path="/error" component={Error}></Route>
                    <Route path="/addSlides" component={SlidesAdd}></Route>
                    <Route path="/newsletters" component={Newsletters}></Route>
                    <Route path="/userTransport" component={UserTransport}></Route>
                    <Route path="/inBill/:id" component={InBill}></Route>
                    <Route path="/ordersDelivered" component={OrderDelivered}></Route>
                    <Route path="/orderConfirmation" component={OrderConfirmation}></Route>
                    <Route path="/ordered" component={Ordered}></Route>
                    <Route path="/editor" component={Editor}></Route>
                    <Route path="/productSale" component={ProductSale}></Route>
                    <Route path="/product-Category/:categoryName" component={ProductCategory} ></Route>
                    <Route  component={Home}></Route>
                </Switch>
            </>
        )
    }
}
export default routerUi;