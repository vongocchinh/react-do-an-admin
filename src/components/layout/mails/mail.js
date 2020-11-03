import React, { Component } from 'react'
import { Dialog, DialogContent, Button } from '@material-ui/core';
import { DialogTitle } from '@material-ui/core';
import { DialogContentText } from '@material-ui/core';
import { DialogActions } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import { Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';
const data=[
    {
        id:1,
        message:" Sau A51, Samsung tiếp tục ra mắt Galaxy A71 là đại diện kế tiếp thuộc thế hệ smartphone Galaxy A 2020. "
    }
    ,
    {
        id:2,
        message:" Sau A51, Samsung tiếp tục ra mắt Galaxy A71 là đại diện kế tiếp thuộc thế hệ smartphone Galaxy A 2020. "
    },
    {
        id:3,
        message:" Sau A51, Samsung tiếp tục ra mắt Galaxy A71 là đại diện kế tiếp thuộc thế hệ smartphone Galaxy A 2020. "
    },
    {
        id:4,
        message:" Sau A51, Samsung tiếp tục ra mắt Galaxy A71 là đại diện kế tiếp thuộc thế hệ smartphone Galaxy A 2020. "
    },
    {
        id:5,
        message:" Sau A51, Samsung tiếp tục ra mắt Galaxy A71 là đại diện kế tiếp thuộc thế hệ smartphone Galaxy A 2020. "
    },
    {
        id:6,
        message:" Sau A51, Samsung tiếp tục ra mắt Galaxy A71 là đại diện kế tiếp thuộc thế hệ smartphone Galaxy A 2020. "
    },
    {
        id:7,
        message:" Sau A51, Samsung tiếp tục ra mắt Galaxy A71 là đại diện kế tiếp thuộc thế hệ smartphone Galaxy A 2020. "
    },
    {
        id:8,
        message:" Sau A51, Samsung tiếp tục ra mắt Galaxy A71 là đại diện kế tiếp thuộc thế hệ smartphone Galaxy A 2020. "
    }
];
export default class mail extends Component {
    constructor(props) {
        super(props);
        this.state={
            open:false
        }
    }
    handleClose=(e)=>{
       this.setState({
        open:false
        });
    }
    open=(e)=>{
        this.setState({
            open:true
        });
    }
    mail=()=>{
      var result=null;
      result=data.map((item,key)=>{
        return (
            <DialogContentText  color="primary" key={key} onClick={this.handleClose}>
                <Link style={{textDecoration:"none"}} to="/">
                    {item.message}
                </Link>
            </DialogContentText>
        )
    
      })
           return result;
    }
    render() {
       
        return (
            <>
                <Badge onClick={this.open} badgeContent={4} color="secondary">
                            <MailIcon />
                        </Badge>
                <Dialog
                    
                    scroll="paper"
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="customized-dialog-title"
                >
                    <DialogTitle id="max-width-dialog-title">Optional notification</DialogTitle>
                    <DialogContent>
                        { this.mail()}
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Close
                    </Button>
                    </DialogActions>
                </Dialog>
            </>
        )
    }
}
