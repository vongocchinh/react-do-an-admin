/* eslint-disable no-useless-concat */
import React, { Component } from 'react'


 class contactItem extends Component {
    render() {
        var {contact}=this.props;
        var {stt}=this.props;
        return (
        <>
                <tbody>
                <tr>
                    <td>{stt++}</td>
                    <td>{contact.firstName}</td>
                    <td>{contact.lastName}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>{contact.message}</td>
                    <td>{new Date(contact.date.seconds*1000).toDateString()}</td>
                    
                </tr>
                </tbody>
        </>
        )
    }
}
export default contactItem;