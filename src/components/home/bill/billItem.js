import React, { Component } from 'react'
import * as Format from './../../../conStants/format';
import { Link } from 'react-router-dom';

export default class billIte extends Component {
    
    render() {
        var {bill}=this.props;
        var stt=this.props.stt;
        return (
            <tbody>

            <tr>
                <td>{stt}</td>
                <td>{bill.name}</td>
                <td>{Format.quantityBill(bill.cart)}</td>
                <td>
                    {new Date(bill.date.seconds*1000).toDateString()}
                </td>
                <td>
                    <Link to="/bill" className="option-table">Chi tiết</Link>
                </td>
            </tr>
            </tbody>
        )
    }
}
