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
import Admin from './../container/admin/admin';
import Nhanvien from './../container/admin/nhanvien';
 class routerUi extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/menu-reponsize" component={MenuRePonSize}></Route>
                    <Route path="/nhanvien" component={Nhanvien}></Route>
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
                    <Route path="/addSlides" component={SlidesAdd}></Route>
                    <Route path="/product-Category/:categoryName" component={ProductCategory} ></Route>
                    <Route  component={Home}></Route>
                </Switch>
            </div>
        )
    }
}
export default routerUi;