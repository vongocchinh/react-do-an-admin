import React, { Component } from 'react'
import Newsletters from '../../components/managerNewservlet/newsletters'
import NewslettersItem from '../../components/managerNewservlet/newslettersItem'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class newsletters extends Component {
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
            />
        )
    }
    showNewsletters=(data)=>{
        var result=null;
        if(data){
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