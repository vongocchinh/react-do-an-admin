import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import ListAdmin from './../../components/admin/listAdmin/listAdmin';
// import { Redirect } from 'react-router-dom';
// var userAdminLocalStorage=JSON.parse(localStorage.getItem('userAdmin'));
class listAdmin extends Component {
    render() {
        var {AdminFirestore}=this.props;
        var data=[];
        if(AdminFirestore){
            for(let i=0;i<AdminFirestore.length;i++){
                var admin={
                    userEmail:AdminFirestore[i].userEmail,
                    phone:AdminFirestore[i].phone,
                    displayName:AdminFirestore[i].displayName,
                    date:new Date(AdminFirestore[i].date.seconds*1000).toDateString(),
                    id:i+1
                }
                data.push(admin);
            }
        }
        // if(userAdminLocalStorage.rule!==true){
        //     return <Redirect to="/error" />
        // }
        return (
            <ListAdmin 
            data={data}
            />
        )
    }
    componentDidMount(){
        document.title="Danh sách admin...  ";
    }
}
 const mapSateToProps=(state)=>{
    return {
        AdminFirestore:state.getFirestore.ordered.admin
    }
}
 const dispatchToProps=(dispatch,props)=>{
    return {

    }
}
export default 
compose(connect(mapSateToProps,dispatchToProps),
    firestoreConnect(ownProps=>[
        {
            collection:"admin"
        }
    ])
)(listAdmin);