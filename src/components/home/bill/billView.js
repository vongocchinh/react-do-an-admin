/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import BillItem from './billItem';

export default class billView extends Component {
    sort=(bill)=>{
        var billNew=null;
        if(bill){
            billNew=bill.slice().sort((a,b)=>{
                return b.date-a.date;
            })
        }
        return billNew;
    }
    showBillItemDay=(data)=>{
        var result='';
        var count=0;
        var dataNew=this.sort(data);
        if(data){
            result=(dataNew&&dataNew.map((data,key)=>{
                if(new Date(data.date.seconds*1000).toDateString()===new Date().toDateString()){
                    if(true){
                        count++;
                        if(new Date().getHours()===13){
                            //set vao database
                            var countBillDay={
                                date:new Date().toDateString(),
                                count
                            }
                            this.props.countBillDay(countBillDay);
                            count=0;
                        }
                        return <BillItem
                        bill={data}
                        key={key}
                        stt={key}
                         />
                    }
                }

            }))
        }else{
            return <tbody>
                        <tr>
                            <td>Loading...</td>
                        </tr>
                    </tbody>
        }
        return result;
    }
    showBillItem=(data)=>{
        var result='';
        var count=0;
        var dataNew=this.sort(data);
        if(data){
            result=(dataNew&&dataNew.map((data,key)=>{
                if(count<10){
                    count++;
                    return <BillItem
                    bill={data}
                    key={key}
                    stt={key}
                     />
                }
            }))
        }else{
            return <tbody>
                        <tr>
                            <td>Loading...</td>
                        </tr>
                    </tbody>
        }
        return result;
    }

    render() {
        return (
           <>
            <div className="main-content-table">
                <p><i className="far fa-calendar-alt" /> Đơn Hàng Hôm Nay</p>
                <div className="hidden-table">
                    <table className="table-main" >
                        <thead>
                        <tr><th className="th-main-table-i">ID</th>
                            <th className="th-main-table-d">UserName</th>
                            <th className="th-main-table-i">Qty</th>
                            <th className="th-main-table-np">DateBill</th>
                            <th className="th-main-table-i">Detail</th>
                        </tr></thead>
                        {this.showBillItemDay(this.props.bill)}
                    </table>
                </div>
            </div>
            <div className="main-content-table">
                <p><i className="far fa-calendar-alt" /> Đơn Hàng Mới Nhất</p>
                <div className="hidden-table">
                    <table className="table-main" >
                        <thead>
                        <tr><th className="th-main-table-i">ID</th>
                            <th className="th-main-table-d">UserName</th>
                            <th className="th-main-table-i">Qty</th>
                            <th className="th-main-table-np">DateBill</th>
                            <th className="th-main-table-i">Detail</th>
                        </tr></thead>
                    {this.showBillItem(this.props.bill)}
                    </table>
                </div>
            </div>
           </>
        )
    }
}
