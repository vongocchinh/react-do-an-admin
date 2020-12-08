import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
// import IconButton from '@material-ui/core/IconButton';
// import PhotoCamera from '@material-ui/icons/PhotoCamera';
// import { makeStyles } from '@material-ui/core/styles';

class account extends Component {
    constructor(props) {
        super(props);
        this.state={
            displayName:"",
            userEmail:"",
            phone:"",
            address:"",
            rule:false,
            uidAuthentication:"",
            idAdmin:"",
            date:"",
            imagesAdmin:""
        }
    }
    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    onSubmit=(e)=>{
        e.preventDefault();
        var {displayName,userEmail,phone,address,idAdmin,uidAuthentication,date,rule,imagesAdmin}=this.state;

        var adminUser={
            displayName,
            userEmail,
            phone,
            address,
            idAdmin,
            uidAuthentication,date,rule,
            imagesAdmin

        }
        this.props.updateAdmin(adminUser);
    }
    onSubmitImages=(e)=>{
        e.preventDefault();
        var {displayName,userEmail,phone,address,idAdmin,uidAuthentication,date,rule,imagesAdmin}=this.state;

        var adminUser={
            displayName,
            userEmail,
            phone,
            address,
            idAdmin,
            uidAuthentication,date,rule,
            imagesAdmin

        }
        this.props.updateImagesAdmin(adminUser);
    }
    UNSAFE_componentDidMount(){
        var {UserAdmin}=this.props;
        if(UserAdmin){
            this.setState({
                displayName:UserAdmin.displayName,
                userEmail:UserAdmin.userEmail,
                phone:UserAdmin.phone,
                address:UserAdmin.address,
                rule:UserAdmin.rule,
                uidAuthentication:UserAdmin.uidAuthentication,
                idAdmin:UserAdmin.idAdmin,
                date:UserAdmin.date,
                imagesAdmin:UserAdmin.imagesAdmin
            });
        }else{
            this.setState({
                displayName:"",
                userEmail:"",
                phone:"",
                address:"",
                rule:false,
                uidAuthentication:"",
                idAdmin:"",
                date:"",
                imagesAdmin:""
            });
        }
    }
    UNSAFE_componentWillReceiveProps(nextProps){

        if(nextProps&& nextProps.UserAdmin){
            this.setState({
                displayName:nextProps.UserAdmin.displayName,
                userEmail:nextProps.UserAdmin.userEmail,
                phone:nextProps.UserAdmin.phone,
                address:nextProps.UserAdmin.address,
                rule:nextProps.UserAdmin.rule,
                uidAuthentication:nextProps.UserAdmin.uidAuthentication,
                idAdmin:nextProps.UserAdmin.idAdmin,
                date:nextProps.UserAdmin.date,
                imagesAdmin:nextProps.UserAdmin.imagesAdmin
            });
        }else{
            this.setState({
                displayName:"",
                userEmail:"",
                phone:"",
                address:"",
                rule:false,
                uidAuthentication:"",
                idAdmin:"",
                date:"",
                imagesAdmin:""
            });
        }
    }
    onImages=(e)=>{
        if(e.target.files[0]){
            const imagesAdmin=e.target.files[0];
            this.setState({
                imagesAdmin:imagesAdmin,
            });
        }
    }
    render() {
        var {displayName,userEmail,phone,address,imagesAdmin}=this.state;
        
        return (
            <div className="main-right">
             <div className="">
                <p className="table-text"><i className="far fa-calendar-alt" /> UserAdmin</p>
                <div className="hidden-table">
                    
                        <div className="account-admin-container">
                            <div className="account-admin">
                                <div className="title-images-admin">
                                    <img
                                        src={imagesAdmin?imagesAdmin:"https://st.quantrimang.com/photos/image/2017/04/08/anh-dai-dien-FB-200.jpg"} 
                                        alt="admin"/>
                                </div>

                                <div className="title-name-admin-hello">
                                        <p><strong>Xin Chào</strong>:
                                            <u>{displayName===''?" Admin":displayName}</u>
                                        </p>
                                        <p>{userEmail}</p>
                                </div>
                                <div className="form-control-admin-images">
                                    <form onSubmit={this.onSubmitImages}>
                                        <div className="input-group mb-3">
                                            <div className="custom-file">
                                                {/* <input name="imagesAdmin" onChange={this.onImages} style={{display:"none"}} accept="image/*"  id="icon-button-file" type="file" /> */}
                                                {/* <label className="custom-file-label" >Thêm ảnh</label> */}
                                                {/* <input name="imagesAdmin" onChange={this.onImages} type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" /> */}
                                                    <input
                                                    accept="image/*"
                                                    id="contained-button-file"
                                                    multiple
                                                    type="file"
                                                    name="imagesAdmin" onChange={this.onImages} style={{display:"none"}}
                                                />
                                                <label htmlFor="contained-button-file">
                                                    <Button variant="contained" color="primary" component="span">
                                                   File
                                                    </Button>
                                                </label>
                                            </div>
                                                <Button
                                                className="input-button-submit-images"
                                                    variant="contained"
                                                    color="default"
                                                    type="submit"
                                                    style={{marginTop:"-4px"}}
                                                    // className={classes.button}
                                                    startIcon={<CloudUploadIcon />}
                                                >
                                                    Upload
                                                </Button>
                                            {/* <input className="input-button-submit-images" type="submit" value="Submit" /> */}
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="account-admin-form">
                            <form onSubmit={this.onSubmit}>
                            <p className="title-account-admin">userEmail:</p>
                                <div className="input-account-admin" >{userEmail}</div>
                            <p className="title-account-admin">FirstName</p>
                                <div className="layout-admin-from-input">
                                    <input onChange={this.onChange} name="displayName" value={displayName}   className="layout-input-account-admin"/>
                                    <input onChange={this.onChange} name="lastName" className="layout-input-account-admin"/>
                                </div>
                                <p className="title-account-admin">Address</p>
                                    <input onChange={this.onChange} value={address} name="address" className="input-account-admin"/>
                                <p className="title-account-admin">Phone</p>
                                    <input onChange={this.onChange} value={phone} name="phone" className="input-account-admin"/>
                                <div>
                                    <input className="input-button-submit" type="submit" value="Submit"/>
                                </div>
                                </form>
                            </div>
                        </div>
                </div>
                </div>
            </div>
        )
    }
}
export default account;