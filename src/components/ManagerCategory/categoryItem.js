/* eslint-disable no-useless-concat */
import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
// import * as Format from '../../conStants/format';
import IconDe from './../images/de.png';
import IconU from './../images/e.png';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button, TextField } from '@material-ui/core';
export default class categoryItem extends Component {
    constructor(props) {
        super(props);
        this.state={
            open:false,
            CategoryName:'',
            CategoryId:'',
            openDelete:false
        }
    }
    onDelete=()=>{
        this.setState({
            openDelete:true
        });
    }
    onUpdate=()=>{
        this.setState({
            open:true
        });
    }
    handleClose=()=>{
        this.setState({
            open:false
        });
    }
    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    handleSubmit=()=>{
        this.setState({
            open:false
        });
        var CategoryNew={
            categoryName:this.state.CategoryName,
            categoryId:this.state.CategoryId
        }
        this.props.updateCategory(CategoryNew);
        
    }
    UNSAFE_componentWillMount(){
        var {category}=this.props;
        if(category){
            this.setState({
                CategoryName:category.categoryName,
                CategoryId:category.id
            });
        }else{
            this.setState({
                CategoryName:'',
                CategoryId:''
            });
        }
    }
    UNSAFE_componentWillReceiveProps(nextProps){
        
        if(nextProps.category&&nextProps){
            this.setState({
                CategoryName:nextProps.category.categoryName,
                CategoryId:nextProps.category.id
            });
        }else{
            this.setState({
                CategoryName:'',
                CategoryId:''
            });
        }
    }
    handleCloseDelete=()=>{
        this.setState({
            openDelete:false
        });
    }
    handleOnDelete=()=>{
        this.setState({
            openDelete:false
        });
        this.props.onDelete(this.props.category);

    }
    render() {
        var {category}=this.props;
        var {keys}=this.props;
        return (
            <>
            <tbody>
            <tr>
                <td>{keys++}</td>
                <td>{category.categoryName}</td>
                
                <td className="option">
                    <button style={{border:"none",outline:"none",backgroundColor:"white"}}  onClick={this.onDelete}> <img alt="###" src={IconDe} /></button>
                    {/* <Link to={"/"+"update-category"+"/"+category.id+"/"+Format.to_slug(category.categoryName)} ><img alt="###" src={IconU} /></Link> */}
                    <span onClick={this.onUpdate}><img alt="###" src={IconU} /></span>
                </td>
            </tr>
            
            </tbody>
            <Dialog
                    open={this.state.open}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                     <DialogTitle id="form-dialog-title">Update</DialogTitle>
                    
                        <DialogContent>
                        <DialogContentText>
                            To update to this website, please enter your name  here. We will send updates
                            occasionally.
                        </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                type="text"
                                fullWidth
                                name="CategoryName"
                                onChange={this.onChange}
                                value={this.state.CategoryName||''}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                cancel
                            </Button>
                            <Button  onClick={this.handleSubmit} color="primary">
                                Update
                            </Button>
                        </DialogActions>
                    
                </Dialog>
                <Dialog
                    open={this.state.openDelete}
                    onClose={this.handleCloseDelete}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">Delete</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        If you want to remove this product <span style={{color:"red"}}>{this.state.CategoryName}</span> from the list, the delete selection will not be restored. !!!
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.handleCloseDelete} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleOnDelete} color="primary" autoFocus>
                        Agree
                    </Button>
                    </DialogActions>
                </Dialog>
        </>
        )
    }
}
