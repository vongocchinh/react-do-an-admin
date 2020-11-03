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
            <div className="main-content-table">
                            <p><i className="far fa-calendar-alt" /> Đơn Hàng Mới Nhất</p>
                            <div className="hidden-table">
                                <table className="table-main" >
                                    <thead>
                                    <tr><th className="th-main-table-i">ID</th>
                                        <th className="th-main-table-d">Tên người đặt</th>
                                        <th className="th-main-table-i">Số Lượng</th>
                                        <th className="th-main-table-np">Ngày Đặt Hàng</th>
                                        <th className="th-main-table-i">Chi tiết</th>
                                    </tr></thead>
                                   {this.showBillItem(this.props.bill)}
                                    
                                </table>
                            </div>
                        </div>
        )
    }
}
