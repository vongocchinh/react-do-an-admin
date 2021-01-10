import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import ListAdmin from './../../components/admin/listAdmin/listAdmin';
import { Redirect } from 'react-router-dom';
import ListAdminItem from './../../components/admin/listAdmin/listAdminItem';
import * as action from './../../actions/admin';
import { Pagination } from '@material-ui/lab';
class listAdmin extends Component {
    constructor(props) {
        super(props);
        this.state={
            currentPage:1,
            currentPageNew:10
        }
    }
    render() {
        var {AdminFirestore,UserAdmin}=this.props;
        if(UserAdmin.levelAdmin>0){
            return <Redirect to="/" />
        }
        return (
            <ListAdmin 
            // data={data}
            show={this.show(AdminFirestore)}
            showPagination={this.showPagination(AdminFirestore)}
            />
        )
    }
    showPagination=(admin)=>{
        var {currentPage,currentPageNew}=this.state;
       if(admin){
        return <Pagination 
            page={currentPage} 
            count={Math.ceil(admin.length/currentPageNew)}
            size="small"
            onChange={this.onChangePagination}
        />
       }
    }
    onChangePagination=(e,value)=>{
        this.setState({
            currentPage:value
        });
    }
    show=(admin)=>{
        var result=null;
        if(admin){
            result=admin.map((data,key)=>{
                return <ListAdminItem 
                    data={data}
                    key={key}
                    stt={key+1}
                    updateLevel={this.updateLevel}
                />
            })
        }
        return result;
    }
    updateLevel=(value)=>{
        this.props.updateLevel(value);
    }
    componentDidMount(){
        document.title="Danh sách admin...  ";
        this.props.GetAccountAdmin();
    }
}
 const mapSateToProps=(state)=>{
    return {
        AdminFirestore:state.getFirestore.ordered.admin,
        UserAdmin:state.UserAdmin
    }
}
 const dispatchToProps=(dispatch,props)=>{
    return {
        updateLevel:(value)=>{
            dispatch(action.updateLevel(value));
        },
        GetAccountAdmin:()=>{
            dispatch(action.GetAccountAdmin());
        }
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