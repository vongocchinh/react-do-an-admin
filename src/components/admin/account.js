import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import IconU from '../images/e.png'
class account extends Component {
    render() {
        var {UserAdmin}=this.props;
        return (
            <div className="main-right">
             <div className="main-content-table">
                <p className="table-text"><i className="far fa-calendar-alt" /> UserAdmin</p>
                <div className="hidden-table">
                    <table className="table-main">
                    <thead>
                            <tr>
                                <th className="th-main-table-i">ID</th>
                                <th className="th-main-table-d">UserName</th>
                                <th className="th-main-table-0">PassWord</th>
                                <th className="th-main-table-d">Mail</th>
                                <th className="th-main-table-i">Phone</th>
                                <th className="th-main-table-d">address</th>
                                <th className="th-main-table-i">Chi tiết</th>
                                <th className="th-main-table-o">edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{UserAdmin.uid}</td>
                                <td>{UserAdmin.displayName}</td>
                                <td>************</td>
                                <td>{UserAdmin.email}</td>
                                <td>{UserAdmin.phoneNumber}</td>
                                <td></td>
                                <td>{UserAdmin.photoURL}</td>
                                <td className="option">
                                {/* <Link to={"/update-product/"+product.id+"/"+Format.to_slug(product.name)}  href="product_edit.html"> */}
                                    <img alt="###" src={IconU} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        )
    }
}
export default account;