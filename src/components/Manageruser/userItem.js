import React, { Component } from 'react'
var avtImage="https://scr.vn/wp-content/uploads/2020/07/Avatar-Facebook-tr%E1%BA%AFng.jpg";
export default class userItems extends Component {
    render() {
        var {users}=this.props;
        var {keys}=this.props;
        return (
                <tr>
                    <td>{keys++}</td>
                    <td>{users.userEmail}</td>
                    <td>{users.displayName}</td>
                    <td>{users.address}</td>
                    <td>{users.phone}</td>
                    <td>
                        <img alt={users.imagesUser} src={users.imagesUser?users.imagesUser:avtImage}
                            style={{width:"50px",height:"50px",borderRadius:"50%"}}
                        />
                    </td>
                </tr>

        )
    }
}
