/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import { connect } from 'react-redux';
import User from './../../components/Manageruser/user';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import UserItems from './../../components/Manageruser/userItem';
import * as actions from './../../actions/user';
import { Dialog } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
class user extends Component {
    constructor(props) {
        super(props);
        this.state={
            currentPage:1,
            currentPageNew:10
        }
    }
    render() {
        var {UserData}=this.props;
        return (
            <User
               showUser={this.showUser(UserData)}
               showIdPage={this.showIdPage(UserData)}
            />
        )
    }
    showIdPage=(UserData)=>{
        var {currentPageNew,currentPage}=this.state;
        if(UserData){
            return  <Pagination page={currentPage} onChange={this.onClickPage} count={Math.ceil((UserData.length)/currentPageNew)} size="small" />
        }
    }
    onClickPage=(e,value)=>{
        this.setState({
            currentPage:value
        });
    }
    showUser=(data)=>{
        var result=null;
       if(data){
           var {currentPage,currentPageNew}=this.state;
           var pageLast=currentPage*currentPageNew;
           var pageFirst=pageLast-currentPageNew;
           data=data.slice(pageFirst,pageLast);
        result=(data && data.map((user,key)=>{
            return <UserItems users={user} key={key} keys={key+1} />
        }));
       }else{
        return <Dialog open={true}>
                        <DialogContent>
                            <CircularProgress aria-labelledby="simple-dialog-title" />
                        </DialogContent>
                    </Dialog>;
       }
        return result;
    }
    componentDidMount(){
        this.props.RenderAllUser();
        document.title="Quản lý danh sách user";
    }
}
const mapStateToProps=(state)=>{
    const UserData=state.getFirestore.ordered.userClient;
    return{
        UserData:UserData,
        
    }
}
const dispatchToProps=(dispatch,props)=>{
    return{
        RenderAllUser:()=>{
          
            dispatch(actions.RenderAllUserRequest());
        }
    }
}
export default compose(
connect(mapStateToProps,dispatchToProps),
firestoreConnect(ownProps=>[
    {
        collection:"userClient"
    }
    ])
)(user);


