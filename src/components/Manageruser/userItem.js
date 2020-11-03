import React, { Component } from 'react'

export default class userItems extends Component {
    render() {
        var {users}=this.props;
        var {keys}=this.props;
        return (
            <tbody>
                <tr>
                    <td>{keys++}</td>
                    <td>{users.name}</td>
                    <td>{users.userName}</td>
                    <td>{users.email}</td>
                    <td>{users.address}</td>
                    <td>{users.phone}</td>
                </tr>
                
                </tbody>
        )
    }
}
