/* eslint-disable no-useless-escape */
import React, { Component } from 'react'
import { Button } from '@material-ui/core';

// import { Link } from 'react-router-dom';
import eye from '../../images/lickon.png';
import eyeOff from '../../images/lockOff.png';
 class loginForm extends Component {
    constructor(props){
        super(props);
        this.state={
            userName:'',
            passWord:'',
            isPassWord:false,
            isShowIcon:false
        }
    }
    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    onChangePass=(e)=>{
        if(this.state.passWord===''||this.state.passWord===null||this.state.passWord=== undefined){
            this.setState({
                isShowIcon:false
            });
        }
        this.setState({
            [e.target.name]:e.target.value,
            isShowIcon:true
        });

    }
    onSubmit=(e)=>{
        e.preventDefault();
        var {userName,passWord}=this.state;
        const user={
            userName,
            passWord
        }
        this.props.loginAdmin(user);
        e.target.reset();
    }
    isPassWord=()=>{
        this.setState({
            isPassWord:!this.state.isPassWord
        });
    }
    render() {
        var {AdminMessage}=this.props;
        var {isPassWord,isShowIcon}=this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-login-admin-input">
                    <span className="title-name-input">UserName</span>
                    <input autoComplete="off" required onChange={this.onChange} name="userName" type="email" className="form-control-input"   />
                </div>
                <div className="form-login-admin-input">
                    <span className="title-name-input">PassWord</span>
                    <input autoComplete="off" required onChange={this.onChangePass} name="passWord" type={isPassWord?"text":"password"} className="form-control-input"  />
                    {isShowIcon?<span className="isPassWord" onClick={this.isPassWord}>{isPassWord?<img style={{width:"19px"}} alt={eyeOff} src={eyeOff} />:
                    <img style={{width:"19px"}} alt={eye} src={eye} />
                    }</span>:''}
                </div>

                   <div className="form-login-admin-submit">
                        <Button style={{outline:"none"}} type="submit" className="btnSubmit-admin" >Đăng Nhập</Button>

                   </div>
                   {AdminMessage.Login_Admin_Error?<p className="error-login-admin">Đăng Nhập Thất Bại !!!</p>: ''}
            </form>
        )
    }
}
export default loginForm;