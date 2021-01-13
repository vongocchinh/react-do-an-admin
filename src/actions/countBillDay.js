import * as types from './../conStants/billDay';


export const ADD_COUNT_BILL_DAY=(value)=>{
    return  {
        type:types.ADD_COUNT_BILL_DAY,
        value
    }
}

export const ADD_SUCCESS=()=>{
    return{
        type:types.ADD_COUNT_BILL_DAY
    }
}

