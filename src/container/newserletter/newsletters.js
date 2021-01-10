import React, { Component } from 'react'
import Newsletters from '../../components/managerNewservlet/newsletters'
import NewslettersItem from '../../components/managerNewservlet/newslettersItem'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Pagination from '@material-ui/lab/Pagination';

class newsletters extends Component {
    constructor(props) {
        super(props);
        this.state={
            currentPage:1,
            currentPageNew:10
        }
    }
    render() {
        // document.title="Quản lý newsletters ... ";
        var {newslettersFirebase}=this.props;
        var arr=[];
        if(newslettersFirebase){
            for(let i=0;i<newslettersFirebase.length;i++){
                var date=new Date(newslettersFirebase[i].date.seconds*1000).toDateString();
                var mail=newslettersFirebase[i].mail;
                var dataNewsletter={
                    id:i+1,
                    mail,date
                }
                arr.push(dataNewsletter);
            }
        }
        return (
            <Newsletters
                showNewsletters={this.showNewsletters(newslettersFirebase)}
                arrData={arr}
                showPagination={this.showPagination(newslettersFirebase)}
            />
        )
    }
    showPagination=(data)=>{
        var {currentPage,currentPageNew}=this.state;
        if(data){
            return <Pagination 
                page={currentPage}
                count={Math.ceil(data.length/currentPageNew)}
                size='small'
                onChange={this.onChangePagination}
            />
        }
    }
    onChangePagination=(e,value)=>{
        this.setState({
            currentPage:value
        });
    }
    showNewsletters=(data)=>{
        var result=null;
        var {currentPage,currentPageNew}=this.state;

        if(data){
            var pageLast=currentPage*currentPageNew;
            var pageFirst=pageLast-currentPageNew;
            data=data.slice(pageFirst,pageLast);
            result=data.map((rs,key)=>{
                return <NewslettersItem
                data={rs}
                key={key}
                stt={key+1}
                 />
            })
        }
        return result;
    }
    componentDidMount(){
        document.title="Danh sách email newsletter";
    }
}

export const mapStateToProps=(state)=>{
    return {
        newslettersFirebase:state.getFirestore.ordered.newsletters
    }
}
export const dispatchToProps=(dispatch,props)=>{
    return {

    }
}
export default 
compose(connect(mapStateToProps,dispatchToProps),
firestoreConnect(ownProps=>[
    {
        collection:"newsletters"
    }
]))
(newsletters);