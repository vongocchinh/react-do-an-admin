import React, { Component } from 'react'
import Contact from './../../components/ManagerContact/contact';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import ContactItem from './../../components/ManagerContact/contactItem';
import Pagination from '@material-ui/lab/Pagination';

 class contact extends Component {
     constructor(props) {
         super(props);
         this.state={
             currentPage:1,
             currentPageNew:10
         }
     }
    render() {
        var {ContactFireBase}=this.props;
        return (
           <Contact 
            //    data={data}
               showContact={this.showContact(ContactFireBase)}
               showPagination={this.showPagination(ContactFireBase)}
           />
        )
    }
    showPagination=(data)=>{
        var {currentPage,currentPageNew}=this.state;
        if(data){
            return <Pagination
            page={currentPage}
            count={Math.ceil(data.length/currentPageNew)}
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
    showContact=(contact)=>{
        var result=null;
        var {currentPage,currentPageNew}=this.state;

        if(contact){
            var pageLast=currentPage*currentPageNew;
            var pageFirst=pageLast-currentPageNew;
            contact=contact.slice(pageFirst,pageLast);
            result=contact.map((data,key)=>{
                return <ContactItem
                    contact={data}
                    key={key}
                    stt={key}
                 />
            })
        }
        return result;
    }
    sort=(data)=>{
        var result=null;
        result=data.slice().sort((a,b)=>{
            return b.date-a.date;
        })
        return result;
    }
    componentDidMount(){
        document.title="Danh sách contact";
    }
}
export const mapStateToProps=(state)=>{
    return{
        ContactFireBase:state.getFirestore.ordered.contact
    }
}
export const dispatchToProps=(dispatch,props)=>{
    return{

    }
}
export default compose(connect(mapStateToProps,dispatchToProps),
firestoreConnect(own=>[{
    collection:"contact"
}]))(contact);