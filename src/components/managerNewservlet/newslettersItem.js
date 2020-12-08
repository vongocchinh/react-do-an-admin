import React, { Component } from 'react'

export default class newslettersItem extends Component {
    render() {
        var {data}=this.props;
        var {stt}=this.props;
        return (
            <tbody>
            <tr>
                <td>{stt++}</td>
                <td>{data.mail}</td>
                <td>{new Date(data.date.seconds*1000).toDateString()}</td>
                
            </tr>
            </tbody>
        )
    }
}
