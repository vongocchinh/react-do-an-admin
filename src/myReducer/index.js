import {combineReducers} from 'redux';

import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import Brand from './brand/brand';
import Category from './category/category';
import Products from './product/product';
import DataFilter from './product/filterData';
import Review from './product/review';
import Admin from './admin/admin';
import BrandMessage from './brand/brandMessage';
import CategoryMessage from './category/categoryMessage';
import ProductMessage from './product/ProductMessage';
import Bill from './bill/bill';
import Slides from './slides/slides';
import UserAdmin from './admin/userAdmin';
import Register from './admin/register';
import GetBrand from './brand/GetBrand';
var myReducer=combineReducers({
    getFirebase:firebaseReducer,
    getFirestore:firestoreReducer,
    Brand,
    Category,
    Products,
    AdminMessage:Admin,
    BrandMessage,
    CategoryMessage,
    ProductMessage,
    Bill,
    Slides,
    UserAdmin,
    Register,
    GetBrand,
    DataFilter,Review
});
export default myReducer;