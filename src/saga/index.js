import {    takeEvery,put,} from 'redux-saga/effects'
import { ADD_SUCCESS } from '../actions/countBillDay';
import {db} from '../config/config';
import * as types from '../conStants/billDay';



function* addCountBill({ value }) {
    db.collection('countBillDay').add({
        date:value.date,
        count:value.count
    }).then(res=>{
        console.log(res);
    }).catch(err=>{

    })
    yield put(ADD_SUCCESS);
}

function* rootSaga(){

yield takeEvery(types.ADD_COUNT_BILL_DAY,addCountBill);
}
export default rootSaga;