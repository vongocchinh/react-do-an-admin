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
class user extends Component {
    render() {
        
        var {UserData}=this.props;
        return (
            <User
               showUser={this.showUser(UserData)}
            />
        )
    }
    showUser=(data)=>{
        var result=null;
       if(data){
        result=(data && data.map((user,key)=>{
            return <UserItems users={user} key={key} keys={key} />
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
    }
}
const mapStateToProps=(state)=>{
    const UserData=state.getFirestore.ordered.user;
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
        collection:"user"
    }
    ])
)(user);


